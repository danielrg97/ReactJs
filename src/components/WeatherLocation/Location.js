import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = ({city}) => (
    <div className="locationCont">
        <h1>{city}</h1>
    </div>
);
    // Normal:
    //const city = props.city; (parametro en metodo debe ser props)
    // Destructuring:
    //const { city }=props; (parametro en metodo debe ser props)

Location.propTypes={
    city: PropTypes.string.isRequired,
}

export default Location;