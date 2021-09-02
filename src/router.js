import React , { FC, useContext, useEffect }  from 'react'
import { Router, Route, useLocation } from 'react-router-dom';

import Home from './components/Homepage/home'

const Routes = ()  =>  {
    return (
         <Router>
             <Route path="/" element={<Home />} />
         </Router>
    
    )
}

export default Routes;

export function ScrollToTop() {
  const { pathname, key } = useLocation();

  useEffect(() => {
    if (key !== 'default') {
      window.scrollTo(0, 0);
    }
  }, [pathname, key]);

  return null;
}
