import { useState, useCallback } from 'react';

const useJSON = () => {
    const [data, setData] = useState<any>();
  
    const getJSON = async(url: string) => {
        const api_call = await fetch(url);
        const data = await api_call.json();
        console.log(data);
        const displayData = data.map(({name, mass, recclass, reclat, reclong, year}: any) => ({
            name,
            mass,
            class: recclass,
            lat: reclat,
            lng: reclong,
            year: year && year.slice(0, 4),
        }))
        setData(displayData);
        }
        
    if(!data) getJSON('https://data.nasa.gov/resource/y77d-th95.json');
    
    const years = data && data.map((d: any) => d.year && d.year.slice(0, 4));
    const yearMin = years && years.reduce((min: number, year: number) => year < min ? year : min);
    const yearMax = years && years.reduce((max: number, year: number) => year > max ? year : max);
    
    const getDefaultYearByMass = useCallback((mass: number) => {
        const dataByMass = data && data.filter((m: any) => Number(m.mass) > Number(mass)).sort((a: any, b: any) => a.year > b.year ? -1 : 1)[0]?.year;
        console.log({ data });
        console.log({ dataByMass });
        console.log('data.filter((m: any) => m.mass > mass).sort((a: any, b: any) => a.year > b.year ? -1 : 1)', 
        data?.filter((m: any) => Number(m.mass) > Number(mass)).sort((a: any, b: any) => a.year > b.year ? -1 : 1));
        return dataByMass;
    }, [data]);
    
    return { data, getDefaultYearByMass, years, yearMin, yearMax };
};

export default useJSON;