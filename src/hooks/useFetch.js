import { useEffect,useState} from "react";


export const useFetch = (API) => {
    const [data,setData] = useState([]);

    useEffect(() => {
        function fetchData(){
            fetch(API)
            .then(response => response.json())
            .then(data => setData(data.results))
        }

        fetchData();
    },[API]);


    return data;
        
   
};