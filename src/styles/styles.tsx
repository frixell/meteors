import styled from '@emotion/styled';

// Filter

export const FilterWrapper = styled('div')`
  display: flex;
`;

export const FilterText = styled('div')`
  font-size: 16px;
  color: #fff;
  margin-right: 8px;
`;

export const FilterBox = styled('div')`
  position: relative;
  input {
    background: #282c34;
    color: #fff;
    font-size: 14px;
    border: 1px solid #fff;
    padding: 3px;
    width: 80px;
  }
`;

export const ListUl = styled('div')`
  position: absolute;
  top: 24px;
  padding: 16px;
  border: 1px solid white;
  max-height: 320px;
  overflow: auto;
`;

export const ListLi = styled('div')`
  color: white;
  font-size: 14px;
  margin: 4px 0;
`;

// Message

export const FilterMessageWrapper = styled('div')`
  display: flex;
  padding: 12px 0;
  button {
    border: 1px solid #fff;
    padding: 3px;
    width: 80px;
    height: 24px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    background: navy;
    cursor: pointer;
  }
`;

// Table

export const TableWrapper = styled('div')`
    padding: 4px;
    width: 800px;
    border: 1px solid gray;
`;

export const MeteorTableHeader = styled('div')`
  display: flex;
  font-weight: bold;
  padding: 4px 0;
`;

export const MeteorTable = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const Meteor = styled('div')`
  display: flex;
  font-size: 14px;
  color: #fff;
`;

export const MeteorName = styled('div')`
  width: 220px;
`;

export const MeteorClass = styled('div')`
  width: 180px;
`;

export const MeteorMass = styled('div')`
  width: 140px;
`;

export const MeteorLat = styled('div')`
  width: 110px;
`;

export const MeteorLng = styled('div')`
  width: 110px;
`;
