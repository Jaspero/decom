import type { WhereFilterOp } from 'firebase/firestore';

export interface Filter {
  key: string;
  operation: WhereFilterOp;
  value: any;
}
