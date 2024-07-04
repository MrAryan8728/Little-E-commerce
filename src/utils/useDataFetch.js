import { useState, useEffect } from "react";

const useDataFetch = (id) => {
    // console.log(id);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const val = await res.json();
        setData(val);
        // console.log(val)
    }
    // console.log(data);
    return data;
}

export default useDataFetch;