import { useState, useCallback } from 'react';

const useTable = ({ data, year, mass }: any) => {    
    const dataByYear = data && data.filter((d: any) => d.year && d.year.slice(0, 4) === year).sort((a: any, b: any) => {
        if (Number(a.year) > Number(b.year)) return -1;
        return 1;
      });
      
      const dataByMassAndYear = dataByYear?.length > 0 && dataByYear.filter((d: any) => Number(d.mass) > Number(mass)).sort((a: any, b: any) => {
        if (Number(a.year) > Number(b.year)) return -1;
        return 1;
      });
    
    return { dataByYear, dataByMassAndYear };
};

export default useTable;