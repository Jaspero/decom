export interface TableHeader {
	key: string;
	label: string;
	pipes?: Array<(value: any, row: any, index: number) => any>;
	sortable?: boolean;
}

export interface Collection {
	name: string;
	module?: string;
	tableHeaders: TableHeader[];
	form?: any;
	singularName?: string;
	add?: boolean;
}