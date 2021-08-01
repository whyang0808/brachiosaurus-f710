export enum STATUS {
  CANCELED = 'CANCELED',
  CREATED = 'CREATED',
  FULFILLED = 'FULFILLED'
}

export interface SubmitValues {
  id?: string;
  purchaseOrderId: string;
  vendorId: string;
  status: string;
  users: string[];
  remarks?: string;
}
