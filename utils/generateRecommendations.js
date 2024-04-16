const generateRecommendations = (data) => {
    const recommendations = [];

    // Example recommendation based on transportation
    if (data.transportation.transportationMode === 'car') {
        recommendations.push('Consider using public transportation or carpooling to reduce your transportation footprint.');
    }

    // Example recommendation based on energy
    if (data.energy.energyMode === 'oil') {
        recommendations.push('Switch to renewable energy sources like solar or wind power to reduce your energy footprint.');
    }

    // Add more recommendation logic based on the surveyData

    return recommendations;
};

export default generateRecommendations;