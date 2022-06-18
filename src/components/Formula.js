import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box'; 

const Formula = props => {
    const [interest, setInterest] = useState("");
    const [N, setN] = useState("");
    const [result, setResult] = useState("");

    const computeEquation = () => {
        try {
            setResult(props.equation(interest, N));
        } catch {}
    }

    return (
        <Card  >
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.name}
                </Typography>
                <Typography variant="h5" component="div" gutterBottom>
                    {props.mathLabel}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {props.description}
                </Typography>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { width: '12ch' },
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginY: 2
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            id="outlined-number"
                            label="Interest"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) => setInterest(parseFloat(event.target.value))}
                        />
                        <TextField
                            id="outlined-number"
                            label="Periods"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            sx={{
                                ml: 1
                            }}
                            onChange={(event) => setN(parseFloat(event.target.value))}
                        />
                    </div>
                    <div>
                        <TextField
                            id="outlined-read-only-input"
                            label="Output"
                            InputProps={{
                                readOnly: true,
                            }}
                            value={result}
                        />
                    </div>
                </Box>
                <Button variant="outlined" onClick={() => computeEquation()}>Compute</Button>
            </CardContent>
        </Card>
    );
};

export default Formula;