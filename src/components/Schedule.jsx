import React from 'react';
import PropTypes from 'prop-types';

function Schedule(props){
  var scheduleStyle = {
    border: '1px solid #4d8c3c',
    padding: 10,
    textAlign: 'center'
  };
  return (
    <div style={scheduleStyle}>
      <h3>{props.day}</h3>
      <h3>{props.location} </h3>
      <h3>{props.hours}</h3>
      <h3>{props.booth}</h3>
    </div>
  );
}

Schedule.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Schedule;