import React from 'react';

const MarkupInput = ({ code, markup }) => {
  return (
    <div className="markup-code">
      <textarea 
        name="markdown" 
        style={{width: '95%', height: '100%'}} 
        value={code} 
        onChange={markup} />
    </div>
  )
}

export default MarkupInput;