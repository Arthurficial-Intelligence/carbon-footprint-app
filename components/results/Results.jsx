import React, { useEffect, useRef } from 'react';
import { Typography } from '@mui/material';
import { useSurvey } from '../../context/SurveyContext';
import Chart from 'chart.js/auto';

import calculateCarbonFootprint from '../../utils/calculateCarbonFootprint';
import generateRecommendations from '../../utils/generateRecommendations';
const Results = () => {
    const { surveyData } = useSurvey();
    const chartRef = useRef(null);


    const totalFootprint = calculateCarbonFootprint(surveyData);
    const recommendations = generateRecommendations(surveyData);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        // Dummy data for average carbon footprint
        const averageFootprint = 10;

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Your Footprint', 'Average Footprint'],
                datasets: [
                    {
                        label: 'Carbon Footprint',
                        data: [totalFootprint, averageFootprint],
                        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
                        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Carbon Footprint (tons CO2e)',
                        },
                    },
                },
            },
        });
    }, [totalFootprint]);

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Survey Results
            </Typography>
            <Typography variant="h6">
                Your total carbon footprint: {totalFootprint} tons CO2e per year
            </Typography>
            <div>
                <canvas ref={chartRef} />
            </div>
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