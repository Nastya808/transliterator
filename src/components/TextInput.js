import React from 'react';

const TextInput = ({ value, onChange, placeholder }) => {
    return (
        <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows="4"
            style={{
                width: '100%',
                marginBottom: '20px',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
            }}
        />
    );
};

export default TextInput;
