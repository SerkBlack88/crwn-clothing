import './category-item.styles.scss'

import React from 'react'

export const CategoryItem = ({ category }) => {
    const { imageUrl, name } = category;
  return (
    <div className="category-container">
    {/* Add the image tag here */}
    <div className="background-image" style={{
      backgroundImage: `url(${imageUrl})`
    }}/>
    <div className="category-body-container">
      <h2>{ name }</h2>
      <p>Shop Now</p>
    </div>
  </div>
  )
}
