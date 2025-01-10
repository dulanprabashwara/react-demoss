import React from 'react'
import { createPortal } from 'react-dom'

function popupcontent() {
  return createPortal (
    <div>popupcontent</div>,
    document.querySelector("#id")
  )
}

export default popupcontent