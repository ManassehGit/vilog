import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

const ListVisitors = () => {
    let visitors = useSelector(state => state.visitors.visitorEmails);
    console.log(visitors)

  return (
    <div>
        <ul>
            {visitors.map(visitor => <li>{visitor}</li>)}
        </ul>
    </div>
  )
}

export default ListVisitors