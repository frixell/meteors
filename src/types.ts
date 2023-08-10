export type FilterType = {
  filterText: string;
  filterName: string;
  filterValue: number;
  filterMin?: number;
  filterMax?: number;
  listCondition?: boolean;
  filterCondition?: boolean;
  listData?: any[];
  onFilterChange: (e: any) => void;
  onFilterClick?: (e: any) => void;
  onFilterFocus?: (e: any) => void;
  onFilterBlur?: (e: any) => void;
}

export type TableType = {
  data: any;
  year: string;
  mass: number;
}

export type MessageType = {
  message: string;
  messageCondition: boolean;
  buttonText?: string;
  buttonAction?: (val?: number) => void;
  buttonActionValue?: number;
}
