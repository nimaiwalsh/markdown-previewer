import React from 'react';

const HtmlOutput = ({markUp}) => {
  return (
    <div className="output-code" dangerouslySetInnerHTML={{__html:markUp}} />
  )
}

export default HtmlOutput;