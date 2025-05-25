
const infoFooter = [
    '© Aguizon',
    'Developed by Alexis Calixto',
    'Contact: alexiscfx1@gmail.com',
]
export const NewFooter =({instagram, twitter})=>{
    return(
        <>
            {infoFooter.map((info, index) => {
                return (
                    <div key={index} className='d-flex justify-content-center align-items-center bg-dark text-light' style={{height: '50px'}}>
                        <p className='m-0'>{info}</p>
                    </div>
                )
            })}
            <div 
            className='d-flex justify-content-center align-items-center bg-dark text-light' 
            style={{height: '50px'}}
            >
                <p className='m-0'> {`Social Media: `}  
                <a style={{textDecoration:'none'}} href={instagram}>Instagram </a> 
                - 
                <a style={{textDecoration:'none'}} href={twitter}> Twitter</a>
                </p>
            </div>
        </>
    )
}