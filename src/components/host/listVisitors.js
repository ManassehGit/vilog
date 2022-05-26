import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

const ListVisitors = () => {

  let visitors = useSelector(state => state.visitors.visitorEmails);
  
  
  useEffect(() => {
    console.log(visitors)
  }, [visitors])
    

  return (
    <div>
        <ul>
            {visitors.map(visitor => <li>{visitor}</li>)}
        </ul>
    </div>
  )
}

export default ListVisitors