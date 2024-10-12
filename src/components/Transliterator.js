import React, { useState, useEffect } from 'react';
import TextInput from './TextInput';
import TransliteratedOutput from './TransliteratedOutput';

const transliterate = (text) => {
    const mapping = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
        'е': 'e', 'ё': 'yo', 'ж': 'zh', 'з': 'z', 'и': 'i',
        'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
        'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
        'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch',
        'ш': 'sh', 'щ': 'shch', 'ъ': '', 'ы': 'y', 'ь': '',
        'э': 'e', 'ю': 'yu', 'я': 'ya', 
    };

    return text.split('').map(char => mapping[char] || char).join('');
};

const Transliterator = () => {
    const [inputText, setInputText] = useState('');
    const [transliteratedText, setTransliteratedText] = useState('');

    useEffect(() => {
        const result = transliterate(inputText);
        setTransliteratedText(result);
    }, [inputText]);

    const handleChange = (e) => {
        setInputText(e.target.value);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
            <h1>Транслитерация текста</h1>
            <TextInput
                value={inputText}
                onChange={handleChange}
                placeholder="Введите текст для транслитерации"
            />
            <TransliteratedOutput value={transliteratedText} />
        </div>
    );
};

export default Transliterator;
