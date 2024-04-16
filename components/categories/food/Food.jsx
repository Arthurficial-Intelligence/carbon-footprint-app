import React from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, Grid } from '@mui/material';
import { useSurvey } from '../../../context/SurveyContext';

const Food = ({ handleNext }) => {
    const { surveyData, updateSurveyData } = useSurvey();

    const handleInputChange = (event) => {
        updateSurveyData('food', { [event.target.name]: event.target.value });
    };

    return (
        <form>
            <Grid container flexDirection={'column'} alignItems={'flex-start'}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">What is your diet like?</FormLabel>
                    <RadioGroup
                        name="foodMode"
                        value={surveyData.food.foodMode || ''}
                        onChange={handleInputChange}
                    >
                        <FormControlLabel value="omnivore" control={<Radio />} label="Omnivore" />
                        <FormControlLabel value="vegetarian" control={<Radio />} label="Vegetarian" />
                        <FormControlLabel value="vegan" control={<Radio />} label="Vegan" />
                    </RadioGroup>
                </FormControl>
                <Button sx={{ marginTop: '24px' }} onClick={handleNext}>Submit</Button>
            </Grid>
        </form>
    );
};

export default Food