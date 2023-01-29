import React from 'react'

const Footer = () => {

    const date = new Date()
    const curYear = date.getFullYear()

  return (
    <footer>
        <p>Copyright ⓒ {curYear}</p>
    </footer>
  )
}

export default Footer