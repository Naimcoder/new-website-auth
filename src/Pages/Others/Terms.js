import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Here is our Terms and conditions</h2>
            <p>Go back to Registration:<Link to='/register'>Registration</Link> </p>
        </div>
    );
};

export default Terms;