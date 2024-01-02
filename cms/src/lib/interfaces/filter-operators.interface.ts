import type { WhereFilterOp } from 'firebase/firestore';

export interface FilterOperators {
  [key: string]: {
    operator: WhereFilterOp;
    key?: string;
  };
}
