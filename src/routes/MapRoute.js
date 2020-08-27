import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
class MapRoute extends Component {
  render() {
    // console.log(this.props.routes);
    return (
     <Switch>
       {
         this.props.routes.map((item,index)=>{
           return (
              item.redirect ? (
                <Redirect key={item.path} path={item.path} to={item.redirect} />
              ) : (
                <Route 
                key={item.path} 
                path={item.path} 
                render={(props) => {
                  return item.auth ? (
                    localStorage.getItem('uname') ? (
                      <item.component {...props} routes={item.children} />
                    ) :(
                      <Redirect to="/login"/>
                    )
                  ) :(
                    <item.component {...props} routes={item.children} />
                  )
                }}
                 />
              )
           )
         })
       }
     </Switch>
    );
  }
}

export default MapRoute;