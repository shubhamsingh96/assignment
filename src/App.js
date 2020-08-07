import React, { Fragment } from "react";
import "./App.css";
import Col from './components/Col'
import Row from './components/Row'
import Card from './components/Card'
import Section from './components/Section'
import Tag from './components/Tag'
import MarkDown from './components/MarkDown'
import { data } from './mock/inputData'

const App = () => {
  let count = 0;
  
  const renderChildren = (childList) => {
    // TAKES THE CHILDREN ARRAY OR THE CHILDREN STRING AND RETURNS THE COMPONENT

    if (Array.isArray(childList) && childList.length) {
      return childList.map(({ component, props }, index) => {
        const { children } = props;
        switch (component) {
          case "Col": {
            if (children) {
              return (
                <Col key={count++} {...props}>
                  {renderChildren(children)}
                </Col>
              );
            }
            return <Col key={count++} {...props} />;
          }
          case "Row": {
            if (children) {
              return (
                <Row key={count++} {...props}>
                  {renderChildren(children)}
                </Row>
              );
            }
            return <Row key={count++} {...props} />;
          }
          case "Card": {
            if (children) {
              return (
                <Card key={count++} {...props}>
                  {renderChildren(children)}
                </Card>
              );
            }
            return <Card key={count++} {...props} />;
          }
          case "Section": {
            if (children) {
              const {h2,title} = props;
              return (
                <Section key={count++} {...props} title={h2 || title}>
                  {renderChildren(children)}
                </Section>
              );
            }
            return <Section key={count++} {...props} />;
          }
          case "Tag": {
            return <Tag key={count++} {...props} />;
          }
          case "Markdown": {
            if (children) {
              return (
                <MarkDown key={count++} {...props}>
                  {renderChildren(children)}
                </MarkDown>
              );
            }
            return <MarkDown key={count++} {...props} />;
          }
          default:
            return <Fragment key={count++} />;
        }
      });
    }
    
    return;
  };

  // Final Render Method

  return <Fragment>{renderChildren(data)}</Fragment>;
};

export default App;
