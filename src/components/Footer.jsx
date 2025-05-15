
const infoFooter = [
    '© 2025 Todo por 2 pesos',
    'Desarrollado por Alexis Calixto',
    'Contacto: alexiscfx1@gmail.com',
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
                <p className='m-0'> Redes Sociales:  
                <a href={instagram}>Instagram </a> 
                - 
                <a href={twitter}> Twitter</a>
                </p>
            </div>
        </>
    )
}