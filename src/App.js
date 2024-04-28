import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import GlobalStyles from './globalStyles'
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';
import ScrollToTop from './components/ScrollToTop';
import Ticket from './components/Ticket';
import Trackedbuses from './components/Pricing/Trackedbuses';
import Report from './components/Report';

function App() {
  return (
    
      <Router>
          <GlobalStyles />
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/services' component={Services} />
            <Route path='/products' component={Products} />
            <Route path='/sign-up' component={SignUp} />
            <Route path='/ticket' component={Ticket} />
            <Route path='/tracked' component={Trackedbuses} />
            <Route path='/report' component={Report} />
          </Switch>
          <Footer />
      </Router>
        
    
  );
}

export default App;
