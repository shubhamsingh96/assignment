import React, { Fragment } from "react";

const Tag = ({ children, className, tag }) => {
  const Tagname = tag;
  const validateTag = () => document.createElement(tag).toString() !== "[object HTMLUnknownElement]";
  // VALIDATE THE TAG TO AVOID INVALID-TAGS BEING RENDERED IN HTML
  if (validateTag()) {
    if (Array.isArray(children) && children.length) {
      return children.map((value,index) => (
        <Tagname key={index} className={className}>{value}</Tagname>
      ));
    }
    return <Tagname className={className}>{children}</Tagname>;
  }
  return <Fragment />;
};

export default Tag;
