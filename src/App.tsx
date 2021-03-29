import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard';
import Notification from './components/dashboard/Notification';
import Nav from './components/layout/Navbar'
import IssueDetails from './pages/issues/IssueDetail'
import SignIn from './components/authToPage/SignIn'
import SignUp from './components/authToPage/SignUp'
import CreateClient from './pages/handleClient/CreateClient'
import { RootState } from './app/store';
import {useSelector, useDispatch} from 'react-redux';
import Chatbox from './pages/chat/Chatbox';
import ClientListTable from './pages/handleClient/ClientListTable';


function App() {
  const auth = useSelector((state: RootState) => state.Client);
  console.log(auth,'-----hhhh' )
  return (
    <div className="App">
      {/* <Chatbox /> */}
      <BrowserRouter>
      <Nav /> 
    <Switch>
      <Route path='/' exact component={Dashboard} />
      <Route path='/Notification' component={Notification} />
      <Route path='/issue/:id' component={IssueDetails} />
      <Route path='/SignUp' component={SignUp} />
      <Route path='/SignIn' component={SignIn} />
      <Route path='/CreateClient' component={CreateClient} />
      <Route path='/ClientList' component={ClientListTable} />
      <Route path='/ChatBox' component={Chatbox} />

    </Switch>
      </BrowserRouter>
      
    </div>
  );
}


export default App;
