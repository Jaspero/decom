export interface FirestoreUser {
  id: string;
  email: string;
  createdOn: number;
  role?: string;
  country?: string;
  city?: string;
  address?: string;
  state?: string;
  zip?: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  dateOfBirth?: string;
}
