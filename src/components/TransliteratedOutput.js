import React from 'react';

const TransliteratedOutput = ({ value }) => {
    return (
        <div>
            <h2>Транслитерированный текст:</h2>
            <textarea
                value={value}
                readOnly
                rows="4"
                style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                }}
            />
        </div>
    );
};

export default TransliteratedOutput;
