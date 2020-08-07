import React, { Fragment } from 'react'

const Section = ({ title, text, children }) => {
  return (
    <Fragment>
      <h2>{title}</h2>
      <p>{text}</p>
      {children}
    </Fragment>
  );
};

export default Section
