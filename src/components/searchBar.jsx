import { useState, useEffect } from 'react'

export const SearchBar = ({data, setToFilter}) => {
    const [search, setSearch] = useState('')

    useEffect(() => {
        const filterData = data.filter(item => 
            item.title.toLowerCase().includes(search.toLowerCase())
        )
        setToFilter(filterData)
    }, [search, data, setToFilter])

    return(
        <div className='mx-3'>
            <form className="form-inline my-1 my-lg-0 shadow rounded">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=> setSearch(e.target.value)}/>
            </form>
        </div>
    )
}