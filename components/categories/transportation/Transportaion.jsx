import React from 'react';
import { TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, Grid } from '@mui/material';
import { useSurvey } from '../../../context/SurveyContext';

const Transportation = ({ handleNext }) => {
    const { surveyData, updateSurveyData } = useSurvey();

    const handleInputChange = (event) => {
        updateSurveyData('transportation', { [event.target.name]: event.target.value });
    };

    // Similar functions can be created for handling changes in other fields

    return (
        <form>
            <Grid container flexDirection={'column'} alignItems={'flex-start'}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Primary mode of transportation</FormLabel>
                    <RadioGroup
                        name="transportationMode"
                        value={surveyData.transportation.transportationMode || ''}
                        onChange={handleInputChange}
                    >
                        <FormControlLabel value="car" control={<Radio />} label="Car" />
                        <FormControlLabel value="public_transit" control={<Radio />} label="Public Transit" />
                        <FormControlLabel value="walking" control={<Radio />} label="Walking" />
                        <FormControlLabel value="biking" control={<Radio />} label="Biking" />
                        {/* Add more options as necessary */}
                    </RadioGroup>
                </FormControl>
                <Button sx={{ marginTop: '24px' }} onClick={handleNext}>Submit</Button>
            </Grid>
        </form>
    );
};

export default Transportation;
