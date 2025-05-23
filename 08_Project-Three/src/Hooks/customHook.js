import { useEffect, useState } from "react";

function useCurrencyInformation(currency){
    let [data,setData] = useState({});
    const dataURL=`https://v6.exchangerate-api.com/v6/c1bfe88f9a8fb1a86e7b0537/latest/${currency}`;
    useEffect(function(){
        fetch(dataURL)
            .then((response)=>(response.json()))
            .then((jsonResponse)=>{setData(jsonResponse.conversion_rates)});
    },[currency]);
    return data;
}

export default useCurrencyInformation;