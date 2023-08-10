import { useState, useCallback } from 'react';

const useMassFilter = ({ year, dataByYear }: any) => {    
    const [mass, setMass] = useState<number | string>('');
    
    const onMassFilterChange = useCallback((e: any) => {
        const { value } = e.target;
        setMass(value)
    }, []);
    
    const dataByMassAndYear = dataByYear?.length > 0 && dataByYear.filter((d: any) => Number(d.mass) > Number(mass)).sort((a: any, b: any) => {
        if (Number(a.year) > Number(b.year)) return -1;
        return 1;
    });
    
    const getMassMessage = (defaultYear: number | undefined) => year && year.length === 4 && (!dataByMassAndYear || dataByMassAndYear?.length === 0) ? `
        Could Not Find Any Meteors With Mass Larger Than ${mass} in ${ !defaultYear ? '.. like, EVER!' : year }` : `
        Found ${dataByMassAndYear?.length} Meteor${dataByMassAndYear?.length !== 1 ? 's' : ''} With Mass Larger Than ${mass} in ${ year }`;
  
    
    return { mass, onMassFilterChange, dataByMassAndYear, getMassMessage };
};

export default useMassFilter;