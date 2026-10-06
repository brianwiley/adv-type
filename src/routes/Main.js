import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import fonts from '../font-details.json';
import button from '../topButton.svg';
import '../App.css';

// Single-case fonts get custom text converted to the case they actually have.
const applyCase = (text, fontCase) => {
    if (fontCase === 'upper') return text.toUpperCase();
    if (fontCase === 'lower') return text.toLowerCase();
    return text;
};

const Main = ({ theme, toggleTheme }) => {
    const [customText, setCustomText] = useState('');

    return (
    <React.Fragment>
        <div className="header navbar">
            <span>Boise State GDes Typography</span>
            <span className="header-actions">
                <input
                    type="search"
                    className="custom-text"
                    placeholder="Type to preview…"
                    aria-label="Preview custom text in every typeface"
                    value={customText}
                    onChange={e => setCustomText(e.target.value)}
                />
                <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                    <span className="toggle-track"><span className="toggle-thumb"></span></span>
                    <span className="toggle-label">{theme === 'dark' ? 'Light' : 'Dark'}</span>
                </button>
                <span className="about"><Link to='/About'>About</Link></span>
            </span>
        </div>
        <div className="padding">
            {fonts.map((font, index) => (
                <div className="fontContainer" key={index}>

                    <div className="fontFamily">{font.displayName || font.fontFamily}</div>
                    <div className="fontDetails">{font.author}&nbsp; |&nbsp; {font.year}&nbsp; |&nbsp; {font.course}</div>
                    <div className="grid-container">
                        <div>
                            <div className="fontPreview" style={{ fontFamily: font.fontFamily }}>
                                {font.availChars}
                            </div>
                            <div className="fontSize fontSize-1">
                            </div>
                        </div>
                        <div>
                            <div className="sampleText" style={{ fontFamily: font.fontFamily }} >
                                {customText ? applyCase(customText, font.case) : font.sampleText}
                            </div>
                            <div className="fontSize-2">
                            </div>
                        </div>
                        <span className="fontDescript">
                            {font.description}
                        </span>
                        <span className="buttonContainer">
                            <button className="buttonSpecimen">
                                <a method="get" href={`specimens/${font.specimenFilename}`} download>View Specimen</a>
                            </button>
                            <button className="buttonDownload">
                                <a method="get" href={`fonts/${font.filename}`} download>Download</a>
                            </button>
                        </span>
                    </div>
                </div>
            ))}
        </div>
        <a className="backToTop" href="#top" ><img src={button} alt="back to top"></img></a>
    </React.Fragment>
    );
};

export default Main;
