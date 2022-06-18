import React from 'react';

import { Grid } from '@mui/material';
import Formula from './Formula';
import formulas from '../formulas';

const FormulaStack = props => {

    return (
        <Grid container spacing={2} padding={2}>
            {formulas.map((data) => (
                <Grid item xs={6}>
                    <Formula {...data} />
                </Grid>
            ))}
        </Grid>
    );
};

export default FormulaStack;