import React from 'react'

const DashContainer = (props) => {
  return (
    <div className="container-fluid">
        {props.children}
    </div>
  )
}

export default DashContainer