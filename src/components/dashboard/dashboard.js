import React from 'react';
import {Admin, Resource} from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { PostList} from './posts';

const dataProvider = simpleRestProvider('http://localhost:3001');

const Dashboard = () => {

  return (
    <>
      <Admin dataProvider={dataProvider}>
        <Resource name="users" list={PostList} />
    </Admin>
    </>
  )
}

export default Dashboard