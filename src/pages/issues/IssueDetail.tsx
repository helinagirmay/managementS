import React, { FC } from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { RouteProps, RouteComponentProps } from 'react-router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }),
);


type Props = { component: FC } & RouteComponentProps;

 const IssueDetail: FC<Props>  = ({ component: Component, ...rest }) => {
     console.log(rest.match.params, '----');
     const Id = rest.match.params;
    return (
        <div>
            <Paper elevation={3} >
                <h1>hello</h1>
                
            </Paper>
        </div>
    )
}
export default IssueDetail
