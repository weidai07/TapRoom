import React from 'react';
import PropTypes from 'prop-types';

function LocalBeer(props){
  return (
    <div>
      <style jsx>{`
          div {
            background-color: brown;
          }
        `}</style>
      <h3>{props.city}</h3> 
      <ul>
        {props.selection.map((item, index) =>
          <li key ={index} className = "beerList"> {item} </li>)}
      </ul>
      <hr/>
    </div>
  );
}

LocalBeer.propTypes = {
  city: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired
};

export default LocalBeer;