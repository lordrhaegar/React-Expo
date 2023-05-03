import { useState, useEffect } from "react";
import axios from "axios";
const apiUser = (search, query)=>{
 const [data, setData] = useState([]);
 const [isLoading, setLoading] = useState(false);
 const [error, setError] = useState(null);
 const axios = require('axios');

const options = {
  method: 'GET',
  url: `https://jsearch.p.rapidapi.com/${search}`,
  params: {...query},
  headers: {
    'X-RapidAPI-Key': 'fa025310a5mshf864d5465aa6b31p1cc0f4jsnf19c90a5f526',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  }
};

const getData = async ()=>{
    setLoading(true);
    try {
        const response = await axios.request(options);
        setData(response.data.data);
        setLoading(false);
    } catch (error) {
        setError(error)
        alert("There was an error");
    }finally {setLoading(false)}
}
useEffect(()=>{
    getData();
},[]);
const refetch = ()=>{
    setLoading(true);
    getData();
}
return {data,isLoading,error, refetch};
}
export default apiUser;
