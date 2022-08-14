import React from 'react'

export default function ErrorLoading() {
  return (
    <div>
        <div className="content__error-info">
              <h2 className="content__error-title">Error</h2>
              <p className="content__error-text">
                Unfortunately, it wasn't possible to get humsters. 
              </p>
              <p className="content__error-text">
              Please try again later
              </p>
            </div>
    </div>
  )
}
