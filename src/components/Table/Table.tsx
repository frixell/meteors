import useTable from '../../hooks/useTable';
import { TableWrapper, TableHeader, TableRow, TableCell, MeteorNum, MeteorName, MeteorClass, MeteorMass, MeteorLat, MeteorLng, TableBody } from '../../styles/styles';
import {TableType} from '../../types';

const TableCellWidths = [20, 220, 180, 140, 110, 110];

const Table = ({data, year, mass, excludedFields = []}: TableType) => {
  
  const { dataByMassAndYear } = useTable({data, year, mass});
  
  if (!dataByMassAndYear || dataByMassAndYear?.length === 0 || mass === '') return null;
    
  return (
    <TableWrapper>
      <TableHeader>
          <TableRow>
            <TableCell width={TableCellWidths[0]} />
            {
              Object.keys(dataByMassAndYear[0]).map((key: any, i: number) => {
                return excludedFields.includes(key) ? null : <TableCell key={i} width={TableCellWidths[i + 1]}>{key}</TableCell>
              })
            }
          </TableRow>
      </TableHeader>
      <TableBody>
        {dataByMassAndYear.map((meteor: any, i: number) => {
          return (
          <TableRow key={i}>
            <MeteorNum>{i + 1}</MeteorNum>
            <MeteorName>{meteor.name}</MeteorName>
            <MeteorClass>{meteor.class}</MeteorClass>
            <MeteorMass>{meteor.mass}</MeteorMass>
            <MeteorLat>{meteor.lat}</MeteorLat>
            <MeteorLng>{meteor.lng}</MeteorLng>
          </TableRow>
          );
        })}
      </TableBody>
    </TableWrapper>
  );
}

export default Table;
