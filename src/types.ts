export type FilterType = {
  filterText: string;
  filterName: string;
  filterValue: number | string;
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
  year: number | string;
  mass: number | string;
  excludedFields?: string[];
}

export type MessageType = {
  message: string;
  messageCondition: boolean;
  buttonText?: string | boolean;
  buttonAction: (val: number | string) => void;
  buttonActionValue?: number;
}
