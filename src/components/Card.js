import React, { Fragment } from 'react'

const Card = ({ title, link, text }) => {
  return (
    <Fragment>
      <h2>{title}</h2>
      <a href={`${link}`}>{link}</a>
      <p>{text}</p>
    </Fragment>
  );
};

export default Card
