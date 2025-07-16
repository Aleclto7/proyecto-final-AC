import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { Button } from 'react-bootstrap'

const infoFooter = [
    '© Aguizon',
    'Developed by Alexis Calixto',
    'Contact: alexiscfx1@gmail.com',
]
export const NewFooter =({github, instagram, linkedin})=>{
    return(
        <>
            {infoFooter.map((info, index) => {
                return (
                    <div key={index} className='d-flex justify-content-center align-items-center bg-dark text-light' style={{height: '40px'}}>
                        <p className='m-0'>{info}</p>
                    </div>
                )
            })}
            <div 
            className='d-flex justify-content-center align-items-center bg-dark text-light' 
            style={{height: '50px'}}
            >
                <div className='m-0 d-flex bg-dark text-light gap-1 '>  
                    <Button variant='outline-secondary' className='border-0 w-50 mb-1' href={github} >
                        <FaGithub color="white" size='25'/>
                    </Button>
                    <Button variant='outline-secondary' className='border-0 w-50 mb-1' href={instagram} >
                        <FaInstagram color="white" size='25'/>
                    </Button>
                    <Button variant='outline-secondary' className='border-0 w-50 mb-1' href={linkedin} >
                        <FaLinkedin color="white" size='25'/>
                    </Button>
                </div>
            </div>
        </>
    )
}