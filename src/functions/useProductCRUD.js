import { useState, useEffect } from "react"


export const useProductCRUD = () => {
    const API_URL ='https://68548f936a6ef0ed662f697a.mockapi.io/products'

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [fetchError, setFetchError] = useState(null)

    const fetchData = async () => {
        setLoading(true)
        try {
            const res = await fetch(API_URL)
            if (!res.ok) throw new Error('Aplication Error' + res.status)
            const resApi = await res.json()
            setData(resApi)
        }
        catch(err) {
            console.log('An error occurred', err);
            setFetchError(err.message)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
    fetchData();
    }, []);

    const createProduct = async (product) => {
        try {
            const res = await fetch(API_URL,
                {
                    method:'POST',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify(product),
                }
            )
            if(!res.ok) throw new Error('Error creating item')

            const data = await res.json();
            console.log('Producto creado en MockAPI:', data);
            await fetchData()
        } 
        catch (error) {
            console.error('Error detectado en catch:', error);
            alert('Error creating item');
            console.log(error);
        }
    }

    const updateProduct = async (currentItem) => {
        try {
            const res = await fetch (`${API_URL}/${currentItem.id}`,
                {
                    method:'PUT',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify(currentItem),
                }
            )
            if(!res.ok) throw new Error('Error update item')
            await fetchData()
        } 
        catch (error) {
            alert('Error update item');
            console.log(error);
        }
    }
    const deleteProduct = async (id) => {
        if(window.confirm('Are you sure you want to delete this item?')){
            try {
                const res = await fetch (`${API_URL}/${id}`, {method:'DELETE',})
                if(!res.ok) throw new Error('Error delete item')
                await fetchData()
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
        fetchError,
        createProduct,
        updateProduct,
        deleteProduct,
    ]
}