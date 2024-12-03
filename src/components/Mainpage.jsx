import React, { useState } from 'react'
import Maincard from './Maincard'


const Mainpage = () => {
    const [data, setData] = useState()
    const [serach, setSearch] = useState("")
    const [msg, setMsg] = useState()

    const myfun = async () => {
        if (serach == "") {
            setMsg("plese enter something")
        }
        else {
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${serach}`)
            const jsondata = await get.json();
            setData(jsondata.meals)
            setMsg("")
        }

    }
    return (
        <>
            <div className='main-container'>
                <div className='serach-bar'>
                    <input type="text" placeholder='Enter Dish' onChange={(e) => setSearch(e.target.value)} value={serach} />
                    <button onClick={myfun}>Serach</button>
                </div>
            </div>
            <h3 className='typesomething'>{msg}</h3>
            <div>
                <Maincard details={data} />
            </div>
        </>
    )
}

export default Mainpage