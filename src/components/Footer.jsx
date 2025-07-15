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
                <div className='m-0 d-flex bg-dark text-light '>  
                    <Button variant='outline-dark' className='border-0 w-50 mb-1 text-light' href={github} >
                        <FaGithub size='25'/>
                    </Button>
                    <Button variant='outline-dark' className='border-0 w-50 mb-1 text-light' href={instagram} >
                        <FaInstagram size='25'/>
                    </Button>
                    <Button variant='outline-dark' className='border-0 w-50 mb-1 text-light' href={linkedin} >
                        <FaLinkedin size='25'/>
                    </Button>
                </div>
            </div>
        </>
    )
}