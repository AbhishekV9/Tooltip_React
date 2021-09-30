import React, { Component } from 'react';
import Tooltip from './tooltip';

export default class App extends Component{
 render(){
   return(
     <div>
       <div>
          <h1>Welcome to Tooltip Component</h1>
       </div>
       <div>
          <div>
            <Tooltip position="top"/>
          </div>
              
          <div>
            <Tooltip position="left"/>
          </div>
           
          <div>
            <Tooltip position="right"/>
          </div>

          <div>
            <Tooltip position="bottom"/>
          </div>

       </div>

     </div>
   )
 }
}
