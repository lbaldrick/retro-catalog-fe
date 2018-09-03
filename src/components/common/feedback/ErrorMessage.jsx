import React from 'react';

const ErrorMessage = ({errorText, titleText}) => {
    return <div className={'error-text'}>
        <span className={'error-text_title'}>{titleText}</span>
        <span className={'error-text_content'}>{errorText}</span>
    </div>
};

export default ErrorMessage;