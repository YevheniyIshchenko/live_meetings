import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="page__content">
    <h1>🏠</h1>
    <Link to="/users">Users</Link>
  </div>
);

export default Home;
