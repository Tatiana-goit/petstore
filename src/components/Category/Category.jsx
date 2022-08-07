import React from 'react'

export default function Category({value, onChangeCategory}) {

  const categories = ['All', 'small', 'medium', 'large']

  return (
    <div className="categories">
      <ul>
        {categories.map((categorie, index) => (
          <li
            key={categorie}
            onClick={() => onChangeCategory(index)}
            className={value === index ? 'active' : ''}
          >
            {categorie}
          </li>
        ))}
      </ul>
    </div>
  )
}
