import { useEffect, useState } from "react";


const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch(url, 
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + window.sessionStorage.getItem("authToken")
                },
                credentials: "include",
            })
            .then(res => {
            if(res.status === 401){
                setIsAuthenticated(false);
            }
            if(!res.ok) {
                throw Error(`Something went wrong, error code ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setIsPending(false);
        })
    }, [url]);

    return {data, isAuthenticated, isPending}
}

export default useFetch;