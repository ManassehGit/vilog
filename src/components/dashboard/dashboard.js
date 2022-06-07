import React from 'react';
import {Admin, Resource} from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { PostList } from './posts';
import {useSelector} from 'react-redux';
import { getUsers } from '../../functions/functions';

const dataProvider = simpleRestProvider('http://localhost:3001');


const Dashboard = () => {
  let data = getUsers();
  console.log(data)

  return (
    <>
      {/* <Admin dataProvider={data}>
        <Resource name="users" list={PostList} />
    </Admin> */}
    <div>
      {Object.keys(data)}
    </div>
    </>
  )
}

export default Dashboard