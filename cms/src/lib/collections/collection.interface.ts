import type {FilterOperators} from '../interfaces/filter-operators.interface';
import type {Sort} from '../interfaces/sort.interface';

export interface TableHeader {
	key: string;
	label: string;
	pipes?: Array<(value: any, row: any, index: number) => any>;
	exportPipes?: Array<(value: any, row: any, index: number) => any>;
	sortable?: boolean;
}

export interface Collection {
	name: string;
	module?: string;
	tableHeaders: TableHeader[];
	initialSort?: Sort;
	filterOperators?: FilterOperators;
	filterOptions?: () => Promise<any[]>;
	form?: any;
	singularName?: string;
	add?: boolean;
	editKey?: string;

	/**
	 * Provide either an idPrefix or createId.
	 * An idPrefix will produce `${idPrefix}-${random.string(24)}` and
	 * createId allows for providing a custom method.
	 */
	idPrefix?: string;
	createId?: () => string;

	/**
	 * Invoked before the form is submitted use preCreate or preEdit for logic that
	 * needs to invoke only before creates or edits.
	 */
	preSubmit?: (id: string) => Promise<void>;
	preCreate?: (id: string) => Promise<void>;
	preEdit?: (id: string) => Promise<void>;
}