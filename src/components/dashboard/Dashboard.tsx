import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Notification from './Notification';
import { connect } from 'react-redux';
import { useStyles } from './style'
import IssueList from '../../pages/issues/IssueList';
// import { User } from '../../Redux/slice/type';
import { authIsReady } from 'react-redux-firebase';

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
              
        <Grid container spacing={4} className={classes.contentMainData}>
       
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <IssueList />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Notification />
          </Paper>
        </Grid>
        
      </Grid>
      
    </div>
  );
}

// const mapStateToProps = (state: any, ownProps: any = {}) => {
//   console.log(state,state.authenticating,ownProps, '======');
  
//   return {
//   }
// }

export default (Dashboard);

// connect(mapStateToProps)