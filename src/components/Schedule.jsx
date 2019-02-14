import React from 'react';
import PropTypes from 'prop-types';

function Schedule(props){
  return (
    <div>
      <style jsx>{`
          div {
            background-color: lightpink;
            border:1px;
          }
        `}</style>
      <h3>{props.day}</h3>
      <h3>{props.location} </h3>
      <h3>{props.hours}</h3>
      <h3>{props.booth}</h3>
      <hr/>
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