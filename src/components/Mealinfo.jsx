import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Mealinfo = () => {
    const { mealid } = useParams()
    const [info, setInfo] = useState()


    useEffect(() => {
        const getinfo = async () => {
            try {
                const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
                const jsondata = await get.json()
                setInfo(jsondata.meals[0])
            }
            catch (err) {
                console.log("ther error is", err)
            }

        }

        if (info !== "") {
            getinfo()
        }

    }, [])



    return (

        <>
            {!info ? "No data found" : <div className='mealInfo'>
                <img src={info.strMealThumb} />
                <div>
                    <h1>Recipe Details</h1>
                    <button>{info.strMeal}</button>
                    <h3>Instructions</h3>
                    <p>{info.strInstructions}</p>
                    <h1> <a href={info.strYoutube} target='_blank' rel="noopener noreferrer"> Watch on Youtube</a></h1>

                </div>
            </div>}

        </>

    )
}

export default Mealinfo