import React from 'react'

const DashWrapper = (props) => {
  return (
    <div class="d-flex flex-column" id="content-wrapper">
        {props.children}
    </div>
  )
}

export default DashWrapper