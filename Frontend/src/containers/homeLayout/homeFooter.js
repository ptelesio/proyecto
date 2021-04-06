import React, { Fragment } from 'react';

const HomeFooter = () => {

const year = new Date().getFullYear();

  return (
      <Fragment>
        <h6 className={`text-center`}>Gonzalo Patricio Telesio © {year} - Open Weather Map</h6>
      </Fragment>
  );
};

export default HomeFooter;