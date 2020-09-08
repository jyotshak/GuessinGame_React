import React from 'react';
import PropTypes from 'prop-types';

const Congrats=  (props) => {
    if(props.success){
        return(
            <div data-test='component-congrats'>
                <br></br>
                <span data-test='congrats-message' className="alert alert-success" >
                Congratulations! You got the word :3
                </span>
                <br></br>
            </div>
        );
    }
    else{
        return (
            <div data-test='component-congrats'></div>
        );
    }
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
};

export default Congrats;