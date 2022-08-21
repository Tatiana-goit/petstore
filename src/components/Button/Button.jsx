import React from 'react'
import PropTypes from "prop-types"

export default function Button({children, variant="", size="medium", type="button"}) {
  return (
    <div>
        <button type="button" className="button">{children}</button>
    </div>
  )
}

Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'square', 'link']),
    type: PropTypes.oneOf(['medium', 'large', 'small']),
    size: PropTypes.oneOf(['button', 'submit']),
    children: PropTypes.node,
    onClick: PropTypes.func
}
