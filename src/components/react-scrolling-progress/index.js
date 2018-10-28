import React, { useState, useEffect } from 'react'

const ReactScrollingProgress = () => {
  const [width, setWidth] = useState(0)
  const styles = {
    position: 'fixed',
    top: 0,
    backgroundColor: 'green',
    height: '20px',
    width: `${width}px`,
  }
  useEffect(() => {
    const handleScroll = () => {
      const scrollVal = window.scrollY
      const viewportHeight = window.innerHeight
      const pageHeight = document.body.clientHeight
      const totalHeight = pageHeight - viewportHeight
      const scrollPercentage = (scrollVal / totalHeight).toFixed(2)
      const pageWidth = window.innerWidth
      const progressWidth = Math.floor(pageWidth * scrollPercentage)
      return setWidth(progressWidth)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [width])

  return (
    <div style={styles} />
  )
}

export default ReactScrollingProgress
