import React from 'react';
import { TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, Grid } from '@mui/material';
import { useSurvey } from '../../../context/SurveyContext';

const Habits = ({ handleNext }) => {
    const { surveyData, updateSurveyData } = useSurvey();

    const handleInputChange = (event) => {
        updateSurveyData('habits', { [event.target.name]: event.target.value });
    };

    return (
        <form>
            <Grid container flexDirection={'column'} alignItems={'flex-start'}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">How do you shop?</FormLabel>
                    <RadioGroup
                        name="habitsMode"
                        value={surveyData.habits.habitsMode || ''}
                        onChange={handleInputChange}
                    >
                        <FormControlLabel value="online" control={<Radio />} label="Online" />
                        <FormControlLabel value="instore" control={<Radio />} label="In Store" />
                    </RadioGroup>
                </FormControl>
                <Button sx={{ marginTop: '24px' }} onClick={handleNext}>Submit</Button>
            </Grid>
        </form>
    );
};

export default Habits;
