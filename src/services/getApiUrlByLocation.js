import { api_key, api_url } from "../constants/api_weather"; //sintaxis structuring p obtener los dos valores

const getApiUrlByLocation = city => {
    return `${api_url}?q=${city}&appId=${api_key}&unit=metric}`;
};

export default getApiUrlByLocation; 

