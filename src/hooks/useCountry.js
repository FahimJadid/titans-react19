import api from "../api/axiosConfig";
import { useEffect, useState } from "react";

function useCountry(){
    const [loading, setLoading] = useState(true);
    const [countries, setCountries] = useState([]);

    const [country, setCountry] = useState([]);


    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const res = await api.get("/all?fields=name,flags,population,region,capital,independent,cca3");
                setCountries(res.data);                
            } catch (error) {
                console.error('Error fetching countries:', error);
            } finally{
                setLoading(false);
            }
        }
            fetchCountries();      
    },[])


    const fetchCountryByName = async (name) => {
        try {
            const res = await api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,timezones,currencies,languages,borders,flags`)
            if(res.status === 200){
                setCountry(res.data[0]);
            }
        } catch (error) {
            console.error(`Error fetching country ${name}:`, error);
        } finally {
            setLoading(false);
        }
    }

    const sortCountries = (order) => {
        const sorted = [...countries].sort((a, b) => {
            if (order === "asc") {
                return a.name.common.localeCompare(b.name.common);
            } else {
                return b.name.common.localeCompare(a.name.common);
            }
        });
        setCountries(sorted);
    }



    return {
        loading,
        countries,
        country,
        fetchCountryByName,
        sortCountries
    }
}


export default useCountry;