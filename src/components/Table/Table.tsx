import { TableWrapper, MeteorTableHeader, Meteor, MeteorName, MeteorClass, MeteorMass, MeteorLat, MeteorLng, MeteorTable } from '../../styles/styles';
import {TableType} from '../../types';


const Table = ({data, year, mass}: TableType) => {
  
  const dataByYear = data && data.filter((d: any) => d.year && d.year.slice(0, 4) === year).sort((a: any, b: any) => {
    if (Number(a.year) > Number(b.year)) return -1;
    return 1;
  });
  
  const dataByMassAndYear = dataByYear?.length > 0 && dataByYear.filter((d: any) => Number(d.mass) > Number(mass)).sort((a: any, b: any) => {
    if (Number(a.year) > Number(b.year)) return -1;
    return 1;
  });
  
  if (!dataByMassAndYear || dataByMassAndYear?.length === 0) return null;
    
  return (
    <TableWrapper>
      <MeteorTableHeader>
          <Meteor>
            <MeteorName>Name</MeteorName>
            <MeteorClass>Class</MeteorClass>
            <MeteorMass>Mass</MeteorMass>
            <MeteorLat>Lat</MeteorLat>
            <MeteorLng>Lng</MeteorLng>
          </Meteor>
      </MeteorTableHeader>
      <MeteorTable>
        {dataByMassAndYear.map((meteor: any, i: number) => {
          console.log({ meteor });
          return (
          <Meteor key={i}>
            <MeteorName>{meteor.name}</MeteorName>
            <MeteorClass>{meteor.class}</MeteorClass>
            <MeteorMass>{meteor.mass}</MeteorMass>
            <MeteorLat>{meteor.lat}</MeteorLat>
            <MeteorLng>{meteor.lng}</MeteorLng>
          </Meteor>
          );
        })}
      </MeteorTable>
    </TableWrapper>
  );
}

export default Table;
