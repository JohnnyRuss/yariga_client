export enum Status {
  IDLE = "IDLE",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
}
export type StatusT = keyof typeof Status;

export interface LoadingStatusT {
  status: StatusT;
  error: boolean;
  loading: boolean;
  message: string;
}
