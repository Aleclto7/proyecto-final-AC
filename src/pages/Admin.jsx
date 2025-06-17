import { Container, Button, Form, Table } from "react-bootstrap";
import { useState } from "react";
import { AdminProductList } from "../components/AdminProductList";
import { useLocalStorage } from "../functions/UseLocalStorage";

export const Admin = () => {
    const [products, setProducts] = useLocalStorage('products', []);

    const [count, setCount] = useLocalStorage('count', 1);
    const [editingProduct, setEditingProduct] = useState(null);

    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const [error, setError] = useState([]);

    const validate = () => {
        const validationError = [];
        if (!image.trim()){
            validationError.push('Image URL is required');
        }
        if (!/^https?:\/\//i.test(image)) {
            validationError.push('Image must be a valid URL');
        }
        if (!title.trim()) {
            validationError.push('Title is required');
        }
        if (!description.trim()) {
            validationError.push('Description is required');
        }
        if (!price.trim()) {
            validationError.push('Price is required');
        }
        if (isNaN(price)) {
            validationError.push('price must be a number');
        }
        if (price <= 0) {
            validationError.push('price must be greater than 0');
        }
        setError(validationError)
        return validationError.length === 0;
    }

    const cleanInputs = () => {
        setImage("");
        setTitle("");
        setDescription("");
        setPrice("");
    }

    const addProduct = (e) => {
        e.preventDefault();
        if (!validate()) return;
        setProducts([
            ...products,
            {
                id: count,
                image,
                title,
                description,
                price
            }
        ])
        setCount(count + 1)
        cleanInputs();
    }

    const editProduct = (upgradedProduct) => {
        setEditingProduct(upgradedProduct);
        setImage(upgradedProduct.image);
        setTitle(upgradedProduct.title);
        setDescription(upgradedProduct.description);
        setPrice(upgradedProduct.price);
    }
    
    const productToEdit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        setProducts(products.map(p => 
            p.id === editingProduct.id 
            ? {...p, image, title, description, price} 
            : p
        )) 

        setEditingProduct(null)
        cleanInputs();
    }

    const deleteProducts = (item) => {
        const newProducts = prev => prev.filter(prod => prod.id !== item.id);
        
        setProducts(newProducts);
    }

    return (
        <Container className="min-vh-100 mt-3 ">
            <h1 className="mb-1">Admin</h1>
            {error.length > 0 && 
            <div className="alert alert-danger" role="alert">{
                <ul>
                    {error.length > 0 
                    && error.map ((err, i) => 
                        <li key={i}>{err}</li>
                    )}
                </ul>
            }</div>
            }

            <p className="mb-2">Add new products</p>
                <Form className="w-100 mt-4" onSubmit={
                    editingProduct 
                    ?
                    productToEdit
                    :                    
                    addProduct
                    }>
                    <Form.Group className="mb-3 d-flex align-items-center justify-content-between" controlId="ProductImage">
                        <Form.Label className="w-25">Product Image</Form.Label>
                        <Form.Control value={image} className="w-75" type="Text" placeholder="Enter image URL" onChange={(e)=> setImage(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex align-items-center justify-content-between" controlId="ProductName">
                        <Form.Label className="w-25">Product Name</Form.Label>
                        <Form.Control value={title} className="w-75" type="Text" placeholder="Enter product title" onChange={(e)=> setTitle(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex align-items-center justify-content-between" controlId="ProductDescription">
                        <Form.Label className="w-25">Product Description</Form.Label>
                        <Form.Control value={description} className="w-75" type="Text" placeholder="Enter product description" onChange={(e)=> setDescription(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex align-items-center justify-content-between" controlId="ProductPrice">
                        <Form.Label className="w-25">Product Price</Form.Label>
                        <Form.Control value={price} className="w-75" type="Text" placeholder="Enter product price" onChange={(e)=> setPrice(e.target.value)}/>
                    </Form.Group> 
                        <Button variant="primary" type="submit">{
                            editingProduct
                            ?
                            'Upgrade Product'
                            :
                            'Add Product'
                        }</Button>
                </Form>
                <h2 className="mt-5">Products</h2>
                <AdminProductList products={products} editProduct={editProduct} deleteProducts={deleteProducts} />
        </Container>
    )
}