import { Container, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { AdminProductList } from "../components/AdminProductList";
import { useProductCRUD } from "../functions/useProductCRUD";
import { useCart } from '../functions/CartContext';

import Swal from 'sweetalert2'

export const Admin = () => {
    const { swallAlert } = useCart();

    const [
        data, 
        loading, 
        fetchError,
        createProduct,
        updateProduct,
        deleteProduct,
    ] = useProductCRUD();
    
    const [products, setProducts] = useState([]);
    const [productToEdit, setProductToEdit] = useState(null);
    const [formError, setFormError] = useState([]);

    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");

    useEffect(() => {
        if (data) {
            setProducts(data)
        }
    },[data])
    
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
        if (!category.trim()) {
            validationError.push('Category is required');
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
        setFormError(validationError)
        return validationError.length === 0;
    }

    const cleanInputs = () => {
        setImage("");
        setTitle("");
        setDescription("");
        setCategory("");
        setPrice("");
    }

    const addProduct = (e) => {
        e.preventDefault();
        if (!validate()) return;
        const newProduct = {
                image,
                title,
                description,
                category,
                price,
        };
        
        createProduct(newProduct)
        
        cleanInputs();

        swallAlert("The product was successfully added.")
    }

    const editProduct = (upgradedProduct) => {
        setProductToEdit(upgradedProduct);
        setImage(upgradedProduct.image);
        setTitle(upgradedProduct.title);
        setDescription(upgradedProduct.description);
        setCategory(upgradedProduct.category);
        setPrice(upgradedProduct.price);
    }
    
    const productEdition = (e) => {
        e.preventDefault();
        if (!validate()) return;

        const productToSend = {
                image,
                title,
                description,
                category,
                price,
                id: productToEdit.id
        }
        
        updateProduct(productToSend)

        setProductToEdit(null)
        cleanInputs();

        swallAlert("The product was successfully edited.")
    }
    const deletingProduct = (id) => {
        deleteProduct(id)
        swallAlert("The product was successfully disposed of.")
    }

    return (
        <Container className="min-vh-100 mt-3 ">
            <h1 className="mb-1">Admin</h1>
            {formError.length > 0 && 
            <div className="alert alert-danger" role="alert">{
                <ul>
                    {formError.length > 0 
                    && formError.map ((err, i) => 
                        <li key={i}>{err}</li>
                    )}
                </ul>
            }</div>
            }

            <p className="mb-2">Add new products</p>
                <Form className="w-100 mt-4" onSubmit={
                    productToEdit 
                    ?
                    productEdition
                    :                    
                    addProduct
                    }>
                    <Form.Group className="mb-3 d-flex align-items-center justify-content-between" controlId="ProductImage">
                        <Form.Label className="w-50 mb-0">Product Image</Form.Label>
                        <Form.Control value={image} className="w-75" type="Text" placeholder="Enter image URL" onChange={(e)=> setImage(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex align-items-center justify-content-between" controlId="ProductName">
                        <Form.Label className="w-50 mb-0">Product Name</Form.Label>
                        <Form.Control value={title} className="w-75" type="Text" placeholder="Enter product title" onChange={(e)=> setTitle(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex align-items-center justify-content-between" controlId="ProductDescription">
                        <Form.Label className="w-50 mb-0">Product Description</Form.Label>
                        <Form.Control value={description} className="w-75" type="Text" placeholder="Enter product description" onChange={(e)=> setDescription(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex align-items-center justify-content-between" controlId="ProductCategory">
                        <Form.Label className="w-50 mb-0">Product Category</Form.Label>
                        <Form.Control value={category} className="w-75" type="Text" placeholder="Enter product category" onChange={(e)=> setCategory(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex align-items-center justify-content-between" controlId="ProductPrice">
                        <Form.Label className="w-50 mb-0">Product Price</Form.Label>
                        <Form.Control value={price} className="w-75" type="Text" placeholder="Enter product price" onChange={(e)=> setPrice(e.target.value)}/>
                    </Form.Group> 
                        <Button variant="primary" type="submit">{
                            productToEdit
                            ?
                            'Upgrade Product'
                            :
                            'Add Product'
                        }</Button>
                </Form>
                <h2 className="mt-5">Products</h2>
                <AdminProductList products={products} editProduct={editProduct} deletingProduct={deletingProduct} />
        </Container>
    )
}