
import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {
    const error1 = useRouteError();
    console.log(error1)
    return (
        <div>
            <h1>Opp's Pages Not Found</h1>
        </div>
    );
};

export default ErrorElement;