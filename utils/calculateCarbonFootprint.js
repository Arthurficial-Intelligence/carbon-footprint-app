
const calculateCarbonFootprint = (data) => {
    let footprint = 0;

    // Transportation
    switch (data.transportation.transportationMode) {
        case 'car':
            footprint += 5;
            break;
        case 'publicTransport':
            footprint += 2;
            break;
        case 'walking':
            footprint += 0.5;
            break;
        default:
            break;
    }

    // Energy
    switch (data.energy.energyMode) {
        case 'electricity':
            footprint += 3;
            break;
        case 'gas':
            footprint += 4;
            break;
        case 'oil':
            footprint += 6;
            break;
        default:
            break;
    }

    // Food
    switch (data.food.foodMode) {
        case 'meatLover':
            footprint += 4;
            break;
        case 'vegetarian':
            footprint += 2;
            break;
        case 'vegan':
            footprint += 1;
            break;
        default:
            break;
    }

    // Habits
    switch (data.habits.habitsMode) {
        case 'online':
            footprint += 1;
            break;
        case 'instore':
            footprint += 2;
            break;
        default:
            break;
    }

    return footprint.toFixed(2);
};

export default calculateCarbonFootprint;