import { Table, Button } from 'react-bootstrap';

export const AdminProductList = ({products, editProduct, deletingProduct}) => {

    return (
        <Table striped borderless className='h-100'>
            <thead>
                <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Descrition</th>
                <th>Category</th>
                <th>Price</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title.slice(0,15)}</td>
                        <td className="w-50">{item.description.slice(0,25)}</td>
                        <td>{item.category}</td>
                        <td>{item.price}</td>
                        <td className="d-flex gap-3 h-100 align-items-center">
                            <Button className='h-100px w-50px' variant="warning" onClick={() => editProduct(item)}>Edit</Button>
                            <Button className='h-100px w-50px' variant="danger" onClick={() => deletingProduct(item.id)}>Delete</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
    </Table>
    )
}