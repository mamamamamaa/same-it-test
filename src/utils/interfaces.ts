export interface Request {
  city: string;
  query: string;
}

export interface Saved {
  Number: string;
}
export interface TrackingInitialState {
  error: string | null;
  isLoading: boolean;
  data: ResponseTracking | null;
  savedTracking: Saved[] | [];
  currentTrackNumber: string | "";
}
export interface WarehouseInitialState {
  error: string | null;
  isLoading: boolean;
  data: ResponseWarehouse[] | [];
  currentRequest: Request;
}

export interface Properties {
  city: string;
  query?: string;
}

export interface ResponseWarehouse {
  Description: string;
  Number: number;
}

export interface ResponseTracking {
  Status: string;
  WarehouseSender: string;
  WarehouseRecipient: string;
  Number: string;
}
