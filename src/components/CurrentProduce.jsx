
import React from 'react';
import PropTypes from 'prop-types';

function CurrentProduce(props){
  var produceStyle = {
    border: '1px solid #4d8c3c',
    padding: '10',
    textAlign: 'center'
  };

  return(
    <div style={produceStyle}>
      <h2>{props.month}</h2>
      <h4>{props.selection}</h4>
    </div>
  );
}

CurrentProduce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired,
};

export default CurrentProduce;