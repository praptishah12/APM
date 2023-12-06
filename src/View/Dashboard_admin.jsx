// Dashboard.js

import React from 'react';
import Layout from './layout_admin';
import PieChart from './PieChart';
class DashboardAdmin extends React.Component {
  render() {
    return (
      <Layout>

            <PieChart/>
      </Layout>
    );
  }
}

export default DashboardAdmin;
