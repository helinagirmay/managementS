 
import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { useForm } from 'react-hook-form'
import { useStyles } from './style'
import { useDispatch, useSelector } from 'react-redux';
import { createClient, getClient, selectClients } from '../../Redux/slice/Client/ClientSlice';
import { IClient } from '../../Redux/slice/Client/type';

  
export default function CreateClient() {
  const classes = useStyles();
    const {register, handleSubmit } = useForm()  
    const dispatch = useDispatch() 

    const clients = useSelector(selectClients)

        
  const onSubmit = (data: IClient) => {
    console.log(data)
    dispatch(createClient(data))
    
  };

  console.log("Clients", clients);


  return (
    <React.Fragment>
       <main className={classes.layout}>
      
       <Paper className={classes.paper}>
       <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>

      <Grid container spacing={3}>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"           
            inputRef={register}
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"         
            inputRef={register}
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            inputRef={register}
            label="Email"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="tinNumber"
            name="tinNumber"
            inputRef={register}
            label="Tin Number"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            inputRef={register}
            label="Address line 1"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            inputRef={register}
            name="city"
            label="City"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            inputRef={register}
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
           Register
          </Button>
        
      </Grid>
    </form>
    </Paper>
    </main>
    </React.Fragment>
  );
}
