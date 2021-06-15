import React from 'react';
import NameCard from './../NameCard/NameCard';
import './ResultsContainer.css';

const ResultsContainer = ({ suggestedNames }) => {
    const suggestedNameCards = suggestedNames.map((suggestedName) => {
        return <NameCard suggestedName={suggestedName} />;
    });

    return <div className="results-container">{suggestedNameCards}</div>;
};

export default ResultsContainer;
