import { Table, Button } from 'react-bootstrap';

export const AdminProductList = ({products, editProduct, deleteProducts}) => {

    return (
        <Table striped>
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Descrition</th>
                <th>Price</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td className="w-50">{item.description}</td>
                        <td>{item.price}</td>
                        <td className="d-flex gap-3">
                            <Button variant="warning" onClick={() => editProduct(item)}>Edit</Button>
                            <Button variant="danger" onClick={() => deleteProducts(item)}>Delete</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
    </Table>
    )
}