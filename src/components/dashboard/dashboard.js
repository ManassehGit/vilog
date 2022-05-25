import React from 'react';
import {Admin, Resource} from 'react-admin';
import restProvider from 'ra-data-simple-rest';

const Dashboard = () => {
  return (
    <div>
      <Admin dataProvider={restProvider('http://localhost:3000')}>
        <Resource name="visitors" />
      </Admin>
    </div>
  )
}

export default Dashboard