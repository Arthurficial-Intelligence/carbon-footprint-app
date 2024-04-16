import React from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, Grid } from '@mui/material';
import { useSurvey } from '../../../context/SurveyContext';

const Energy = ({ handleNext }) => {
    const { surveyData, updateSurveyData } = useSurvey();

    const handleInputChange = (event) => {
        updateSurveyData('energy', { [event.target.name]: event.target.value });
    };

    return (
        <form>
            <Grid container flexDirection={'column'} alignItems={'flex-start'}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">What is your primary source of heat?</FormLabel>
                    <RadioGroup
                        name="energyMode"
                        value={surveyData.energy.energyMode || ''}
                        onChange={handleInputChange}
                    >
                        <FormControlLabel value="natural" control={<Radio />} label="Natural Gas" />
                        <FormControlLabel value="electricity" control={<Radio />} label="Electricity" />
                        <FormControlLabel value="oil" control={<Radio />} label="Oil" />
                    </RadioGroup>
                </FormControl>
                <Button sx={{ marginTop: '24px' }} onClick={handleNext}>Submit</Button>
            </Grid>
        </form>
    );
};

export default Energy