import { useState, useEffect } from "react"

const API_URL = 'https://68548f936a6ef0ed662f697a.mockapi.io/products'

export const useProductCRUD = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fecthData = async () => {
        setLoading(true)
        try {
            const res = await fetch(API_URL)
            if (!res.ok) throw new Error('Aplication Error' + res.status)
            const resApi = await res.json()
            setData(resApi)
        }
        catch(err) {
            console.log('An error occurred', err);
            setError(err.message)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
    fecthData();
    }, []);


    const createProduct = async () => {
        try {
            const res = await fetch (API_URL,
                {
                    method:'POST',
                    headers: {'Content-Type':'aplication/json'},
                    body: JSON.stringify(currentItem),
                }
            )
            if(!res.ok) throw new Error('Error creating item')
            await fecthData()
        } 
        catch (error) {
            alert('Error creating item');
            console.log(error);
        }
    }
    const updateProduct = async () => {
        try {
            const res = await fetch (`${API_URL}/${currentItem.id}`,
                {
                    method:'PUT',
                    headers: {'Content-Type':'aplication/json'},
                    body: JSON.stringify(currentItem),
                }
            )
            if(!res.ok) throw new Error('Error update item')
            await fecthData()
        } 
        catch (error) {
            alert('Error update item');
            console.log(error);
        }
    }
    const deleteProduct = async (id) => {
        if(window.confirm('Are you sure you want to delete this item?')){
            try {
                const res = await fetch (`${API_URL}/${currentItem.id}`, {method:'DELETE',})
                if(!res.ok) throw new Error('Error delete item')
                await fecthData()
            } 
            catch (error) {
                alert('Error delete item');
                console.log(error);
            }
        }
    }

    return [
        data, 
        loading, 
        error,
        fecthData,
        createProduct,
        updateProduct,
        deleteProduct,
    ]
}

/* useEffect(() => {
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
    
} */
