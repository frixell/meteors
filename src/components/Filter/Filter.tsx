import { FilterWrapper, FilterText, FilterBox, ListUl, ListLi } from '../../styles/styles';
import { FilterType } from '../../types';

const Filter = ({ filterText, filterName, filterValue, filterMin, filterMax, listCondition, filterCondition, listData = [], onFilterChange, onFilterClick, onFilterFocus, onFilterBlur }: FilterType) => {
  return filterCondition ? (
    <FilterWrapper>
      <FilterText>{filterText}</FilterText>
      <FilterBox>
        <input value={filterValue || ''} onFocus={onFilterFocus} onBlur={onFilterBlur} onChange={onFilterChange} name={filterName} type="number" min={filterMin} max={filterMax} step={1} />
        {listCondition && <ListUl>{listData.map((y: string, i: number) => <ListLi key={i} onClick={onFilterClick}>{y}</ListLi>)}</ListUl>}
      </FilterBox>
    </FilterWrapper>
  ) : null;
}

export default Filter;
