import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Cards = ({width='20rem', generalClassName, priceContentClassName='mt-3 w-100 ', image, title, description, children, primaryDisplay='d-none', click, buttonText, display='d-none', click2, bAddQuantity, itemQuantity, click3, bDecreseQuantity}) => {
    return (
        <Card style={{ width: {width}, padding: '10px', height: '100%' }} className={generalClassName}>
            <Card.Img variant="top" src={image} className='rounded mx-auto d-block' style={{objectFit: 'Contain', width: '15rem', height: '15rem'}}/>
            <Card.Body className='d-flex flex-column justify-content-between align-items-start'>
            <div>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </div>
            <div className={priceContentClassName}>
                <p className='my-auto'>
                    <strong>
                        $ {children}
                    </strong>
                </p>
                <Button variant="primary" className={primaryDisplay} onClick={click} >{buttonText}</Button>
                <div className='d-flex  justify-content-between align-items-center'>
                    <Button variant="primary" className={display} onClick={click2} >{bAddQuantity}</Button>
                    <span className='mx-3'>{ itemQuantity }</span>
                    <Button variant="primary" className={display} onClick={click3} >{bDecreseQuantity}</Button>
                </div>
            </div>
            </Card.Body>
        </Card>
    );
}
