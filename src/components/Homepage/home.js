import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Stonk from "./Stonk"
import Post from './post';
import Story from './Story';


export default function home() {
  return (
  <div className = "homegrid" >
      <Stonk/>
     <Story/>
     <Post/> 
  </div>
  );
}
