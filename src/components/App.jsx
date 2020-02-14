import React from 'react';
import Header from './Header';
import BeerList from './BeerList';
import { Switch, Route } from 'react-router-dom';
import NewBeerForm from './NewBeerForm';
import Error404 from './Error404';
import Background from '../assets/images/background.jpg';

function App(){
  var style = {  
    backgroundImage: 'url(' + Background + ')',
    backgroundPosition: 'fixed',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    minHeight: '100vh',
    minWidth: '100%'
  };

  return (
    <div style={style}>
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={BeerList} />
          <Route path='/newbeerform' component={NewBeerForm} />
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
