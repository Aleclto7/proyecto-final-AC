import { Table, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react'
import '../styles/style.css';
import { useCart } from '../functions/CartContext';

export const AdminProductList = ({products, editProduct, deletingProduct}) => {
    const { swallAlert } = useCart();
    const [showModal, setShowModal] = useState(false);
    const [produtToDelete, setProductToDelete] = useState([]);

    const handleShow = (item) => {
        setShowModal(true)
        setProductToDelete(item)
    }
    const handleClose = () => {
        setShowModal(false)
        setProductToDelete(null)
    }
    const confirmDelete = () => {
        if (produtToDelete) {
            deletingProduct(produtToDelete.id)
        }
        handleClose()
        swallAlert("The product was successfully disposed of.")
    }

    return (
        <Table striped borderless className='h-100'>
            <thead>
                <tr>
                <th className='itemAdminMQ'>ID</th>
                <th>Title</th>
                <th className='itemAdminMQ'>Descrition</th>
                <th className='itemAdminMQ'>Category</th>
                <th>Price</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map((item) => (
                    <tr key={item.id}>
                        <td className='itemAdminMQ'>{item.id}</td>
                        <td>{item.title.slice(0,15)}</td>
                        <td className="w-50 itemAdminMQ">{item.description.slice(0,25)}</td>
                        <td className='itemAdminMQ'>{item.category}</td>
                        <td>{item.price}</td>
                        <td className="d-flex gap-1 h-100 align-items-center buttonsAdmin">
                            <Button className='h-100px w-50px' variant="warning" onClick={() => editProduct(item)}>Edit</Button>
                            <Button className='h-100px w-50px' variant="danger" onClick={() => handleShow(item)}>Delete</Button>
                        </td>
                    </tr>
                ))}
                            <Modal
                                size="sm"
                                show={showModal}
                                onHide={handleClose}
                                aria-labelledby="delete-product-modal bg-dark"
                                >
                                <Modal.Header closeButton className='bg-dark text-white border-dark py-2'>
                                    <Modal.Title id="delete-product-modal">
                                        Delete Product
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body className='bg-dark text-white py-2'>
                                    Are you sure you want to remove the product <strong>{produtToDelete?.title}</strong>?
                                </Modal.Body>
                                <Modal.Footer className='bg-dark text-white border-dark py-2'>
                                    <Button variant="danger" onClick={confirmDelete}>
                                        Delete
                                    </Button>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Calcel
                                    </Button>
                                </Modal.Footer>
                            </Modal>
            </tbody>
    </Table>
    )
}