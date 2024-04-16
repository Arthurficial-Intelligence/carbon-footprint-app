import React, { useEffect, useRef } from 'react';
import { Typography } from '@mui/material';
import { useSurvey } from '../../context/SurveyContext';
import calculateCarbonFootprint from '../../utils/calculateCarbonFootprint';
import generateRecommendations from '../../utils/generateRecommendations';
const Results = () => {
    const { surveyData } = useSurvey();
    const chartRef = useRef(null);


    const totalFootprint = calculateCarbonFootprint(surveyData);
    const recommendations = generateRecommendations(surveyData);



    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Survey Results
            </Typography>
            <Typography variant="h6">
                Your total carbon footprint: {totalFootprint} tons CO2e per year
            </Typography>
            <Typography variant="h6">Recommendations:</Typography>
            <ul>
                {recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                ))}
            </ul>
        </div>
    );
};

export default Results;