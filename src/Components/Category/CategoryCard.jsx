import React from 'react'
import classes from './category.module.css'
import { Link } from 'react-router-dom'

const CategoryCard = ({data}) => {
  return (
    <div className={classes.category}>
        <Link to={`/Category/${data.title}`}>
            <span>
                <h2>{data.title}</h2>
            </span>
            <img src={data.imgLink} alt="" />
            <p>shop now</p>
        </Link>
    </div>
  )
}

export default CategoryCard