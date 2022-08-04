import React from 'react'
import { useState } from 'react'

export default function Category() {
  const [activeIndex, setActiveIndex] = useState(0)

  const categories = ['All', 'small', 'medium', 'large']

  return (
    <div className="categories">
      <ul>
        {categories.map((categorie, index) => (
          <li
          key={categorie}
            onClick={() => setActiveIndex(index)}
            className={activeIndex === index ? 'active' : ''}
          >
            {categorie}
          </li>
        ))}
      </ul>
    </div>
  )
}
