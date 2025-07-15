import { useState } from 'react'
import { Button } from 'react-bootstrap'

export const usePaginator = (products) => {

    const [actualPage, setActualPage] = useState(1)
    const productXPage = 9
    
    const indexLastProduct = actualPage * productXPage
    const indexFirsProduct = indexLastProduct - productXPage
    const visibleProducts = products.slice(indexFirsProduct, indexLastProduct)
    const totalPages = Math.ceil(products.length / productXPage)
    
    const goToPage = (pageNumbre) => {
        if(actualPage >= 1 && actualPage <= totalPages) {
            setActualPage(pageNumbre)
        }
    }

    const printPaginator = (
    <div className="d-flex justify-content-center mt-4 flex-wrap">
        <ul class="pagination">
            <Button         
                variant="outline-secondary"
                className="mx-1 mb-2"
                disabled={actualPage === 1}
                onClick={() => goToPage(actualPage - 1)}
                >
                <span>&laquo;</span>
            </Button>
            {Array.from({length: totalPages}).map((_, index) => {
                const numberPage = index + 1;
                return (
                <Button 
                key={numberPage}
                variant={actualPage === numberPage ? 'dark' : 'outline-dark'}
                className="mx-1 mb-2"
                onClick={() => goToPage(numberPage)}
                >
                    {numberPage}
                </Button>
                )
            }) }
            <Button
                variant="outline-secondary"
                className="mx-1 mb-2"
                disabled={actualPage === totalPages}
                onClick={() => goToPage(actualPage + 1)}
                >
                <span>&raquo;</span>
            </Button>
        </ul>
    </div>
    )

    return {
        visibleProducts,
        printPaginator
    };
}