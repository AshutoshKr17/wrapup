import React, { useState } from 'react';
import '../CSS/home.css';
import { useNavigate } from 'react-router-dom'; 

function Home() {
    const navigate = useNavigate();
    const [textValue, setTextValue] = useState('');

    const handleChange = (event) => {
        setTextValue(event.target.value);
    }

    const sumbitHandler = (event) =>{
        navigate('/flashcard');
    }
    return (
        <div className="container">
            <textarea onChange={handleChange} className="box" placeholder="Paste your text here"/>
            <button className="submit-button" onClick={sumbitHandler}>Submit</button>
        </div>
    );
}

export default Home;
