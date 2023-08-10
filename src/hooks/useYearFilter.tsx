import { useState, useEffect, useCallback } from 'react';
import useJSON from './useJSON';

const useYearFilter = () => {
    const { data, years, yearMax } = useJSON();
    
    const [year, setYear] = useState(yearMax || 0);
    const [yearIsFocused, setYearIsFocused] = useState<boolean>(false);
    
    useEffect(() => {
        setYear(yearMax);
      }, [yearMax]);
    
    const [listYears, setListYears] = useState<string[]>([]);
    
    const onYearFilterChange = useCallback((e: any) => {
        // console.log({ e });
        // console.log(e.target.value);
        const { value } = e.target;
        const listYears = years.filter((year: string) => year && year.includes(value));
        console.log({ listYears });
        
        const listYearsResult: string[] = [];
        listYears.forEach((year: string) => {
            if(listYearsResult.indexOf(year) < 0) {
                listYearsResult.push(year);
            }
        });
        
        console.log({ listYearsResult });

        setListYears(listYearsResult.sort((a: any, b: any) => {
            if (Number(a) > Number(b)) return -1;
            return 1;
        }));
        setYear(value)
    }, [years]);
    
    const onYearFilterFocus = useCallback((e: any) => {
        setYearIsFocused(true);
    }, []);
    
    const onYearFilterBlur = useCallback((e: any) => {
        // setYearIsFocused(false);
    }, []);
    
    const onYearFilterClick = useCallback((e: any) => {
        console.log({e});
        setYear(e.target.innerHTML);
        setYearIsFocused(false);
    }, []);
    
    const dataByYear = data && data.filter((d: any) => d.year && d.year.slice(0, 4) === year).sort((a: any, b: any) => {
        if (Number(a.year) > Number(b.year)) return -1;
        return 1;
    });
    
    const yearMessage = `
        Found ${ dataByYear?.length > 0 ? 
        dataByYear?.length 
        : 
        'No' 
        } Meteor${dataByYear?.length !== 1 ? 's' : ''} in ${ year }`;
    
    return { year, dataByYear, setYear, yearIsFocused, listYears, onYearFilterChange, onYearFilterFocus, onYearFilterBlur, onYearFilterClick, yearMessage };
};

export default useYearFilter;