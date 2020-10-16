import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Directory from './components/directory/directory.component';
import ShopPage from './pages/shop/shop.component'
import prods from './productos';
import Step1 from './pages/Step1/Step1.component';
import Header from './components/header-component/header-component.component'
import SignInSignOut from './pages/sign-in-sign-up/sign-in-sign-up.component';

class App extends React.Component {


  constructor(){
    super();

    this.state = {

      currentUser: null

    }
      
}

  
  render (){
    return (
      <div className="app">
        <Header />
          <Switch>
            <Route exact path='/step1' render={(props)=>( 
              <Step1 {...props}></Step1>)}></Route>
            <Route exact path='/' component={Directory}></Route>
            <Route exact path='/shop' component={ShopPage}></Route>
            <Route exact path='/signin' component={SignInSignOut}></Route>           
          </Switch>
      </div>
    );
  }

}

export default App;
