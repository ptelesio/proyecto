import React from 'react';
import Loadable from 'react-loadable'

function Loading() {
  return <div>Loading...</div>;
}

const Home = Loadable({
  loader: () => import('./pages/home/home'),
  loading: Loading,
});

const routes = {
  home: [
    {path: '/', name: 'Home', component: Home}
  ]
};

export default routes;