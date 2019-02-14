import React from 'react';
import Header from './Header';
import ScheduleList from './ScheduleList';
import { Switch, Route } from 'react-router-dom';
import SeasonalProduce from './SeasonalProduce';
// import SideBar from './SideBar';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={ScheduleList} />
        <Route path='/seasonalProduce' component={SeasonalProduce} />
        {/* <Route exact path='/January' component={SeasonalProduce} />
        <Route exact path='/February' component={SeasonalProduce} />
        <Route exact path='/March' component={SeasonalProduce} />
        <Route exact path='/April' component={SeasonalProduce} />
        <Route exact path='/May' component={SeasonalProduce} />
        <Route exact path='/June' component={SeasonalProduce} />
        <Route exact path='/July' component={SeasonalProduce} />
        <Route exact path='/August' component={SeasonalProduce} />
        <Route exact path='/September' component={SeasonalProduce} />
        <Route exact path='/October' component={SeasonalProduce} />
        <Route exact path='/November' component={SeasonalProduce} />
        <Route exact path='/December' component={SeasonalProduce} /> */}
      </Switch>
    </div>
  );
}

export default App;