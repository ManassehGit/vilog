import React from 'react';
import {Admin, Resource} from 'react-admin';
import restProvider from 'ra-data-simple-rest';

const Dashboard = () => {
  return (
    <div>
      <Admin dataProvider={restProvider('http://localhost:3001')}>
        <Resource name="dashboard" />
      </Admin>
    </div>
  )
}

export default Dashboard