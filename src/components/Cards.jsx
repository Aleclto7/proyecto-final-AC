import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Cards = ({children, title, description, image, key}) => {
    return (
        <Card key={key} style={{ width: '20rem', padding: '10px', height: '100%' }}>
            <Card.Img variant="top" src={image} class='rounded mx-auto d-block' style={{objectFit: 'Contain', width: '15rem', height: '15rem'}}/>
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
            <div class='d-flex justify-content-between align-items-center'>
                <p>
                    <strong>
                        $ {children}
                    </strong>
                </p>
            <Button variant="primary">Add to cart</Button>
            </div>
            </Card.Body>
        </Card>
    );
}
