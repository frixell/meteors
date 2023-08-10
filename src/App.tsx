import styled from '@emotion/styled';
import useJSON from './hooks/useJSON';
import { Filter, Message, Table, Title } from './components';
import useYearFilter from './hooks/useYearFilter';
import useMassFilter from './hooks/useMassFilter';

const Wrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  background: #282c34;
  padding: 24px;
`;

const App = () => {
  const { data, getDefaultYearByMass, yearMin, yearMax } = useJSON();
  const { year, dataByYear, setYear, yearIsFocused, listYears, onYearFilterChange, onYearFilterFocus, onYearFilterBlur, onYearFilterClick, yearMessage } = useYearFilter();
  const { mass, onMassFilterChange, dataByMassAndYear, getMassMessage } = useMassFilter({ year, dataByYear });
  
  const defaultYear = getDefaultYearByMass(mass);
  const massMessage = getMassMessage(defaultYear)
  
  if (!data) return <div />;
    
  return (
    <Wrapper>
      <Title title="Meteors" />
      <Filter 
        filterText="Filter by Year:"
        filterName="year"
        filterValue={year}
        filterMin={yearMin}
        filterMax={yearMax}
        listCondition={yearIsFocused && !!year && String(year).length < 4}
        onFilterChange={onYearFilterChange}
        onFilterClick={onYearFilterClick}
        onFilterFocus={onYearFilterFocus}
        onFilterBlur={onYearFilterBlur}
        listData={listYears}
        filterCondition
      />

      <Message 
        message={yearMessage}
        messageCondition={!!year && String(year)?.length === 4}
        buttonText={defaultYear !== undefined && !!year && String(year).length === 4 && (!dataByYear || dataByYear?.length === 0) && `Try ${defaultYear}`}
        buttonAction={setYear}
        buttonActionValue={defaultYear}
      />

      <Filter 
        filterText="Filter by Mass:"
        filterName="mass"
        filterValue={mass}
        filterMin={0}
        onFilterChange={onMassFilterChange}
        filterCondition={dataByYear?.length > 0 && !!year && String(year).length === 4}
      />
      
      <Message 
        message={massMessage}
        messageCondition={mass !== '' && String(year)?.length === 4 && dataByYear?.length > 0}
        buttonText={defaultYear !== undefined && !!year && String(year).length === 4 && (!dataByMassAndYear || dataByMassAndYear?.length === 0) && `Try ${defaultYear}`}
        buttonAction={setYear}
        buttonActionValue={defaultYear}
      />
      
      <Table data={data} year={year} mass={mass} excludedFields={['year']} />
      
    </Wrapper>
  );
}

export default App;
