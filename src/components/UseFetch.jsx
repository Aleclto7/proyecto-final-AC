import { useState, useEffect } from "react"

export const UseFetch = (url) => {
const [data, setData] = useState([])
const [loading, setLoading] = useState(true)

useEffect(() => {
    fetch(url)
        .then(res => res.json())
        .then(json => {
            setData(json)
            setLoading(false)
    })
        .catch(error => {
            console.error('Error fetching data:', error);
            setLoading(false);
    })
    }, [url]);   

    return [data, loading]
    
}
