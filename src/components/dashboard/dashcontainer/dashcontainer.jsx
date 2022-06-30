import React from 'react'

const DashContainer = (props) => {
  return (
    <div class="container-fluid">
        {props.children}
    </div>
  )
}

export default DashContainer