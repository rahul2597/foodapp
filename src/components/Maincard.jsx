import React from 'react'
import { NavLink } from 'react-router-dom'

const Maincard = ({ details }) => {
    console.log(details)
    return (
        <>
            <div className='meals-container'>

                {!details ? "Data Not Found" : details.map((item) => {
                    return (
                        <div className='meals-details'>
                            <img src={item.strMealThumb} />
                            <p>{item.strMeal}</p>
                            <p>{item.strCategory}</p>
                            <NavLink to={`/${item.idMeal}`}>
                                <button>Recipe</button>
                            </NavLink>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Maincard