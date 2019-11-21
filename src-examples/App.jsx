import React, {Component} from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import NavItem from "./NavItem";
import RichGridDeclarativeExample from "./richGridDeclarativeExample/RichGridDeclarativeExample";
import SimpleReduxDynamicExample from "./simpleReduxDynamicComponentExample/SimpleReduxExample";
import SimpleReduxHookExample from "./simpleReduxHooksExample/SimpleReduxHookExample";
import classCompRendererCreateDestroyExample from './classCompRendererCreateDestroy/GridComponent';
import componentThreeExampleExample from './componentThreeExample/GridComponent';
import componentTwoExampleExample from './componentTwoExample/GridComponent';
import deltaRowModeRefreshCompRendererExample from './deltaRowModeRefreshCompRenderer/GridComponent';
import floatingFilterExampleExample from './floatingFilterExample/GridComponent';
import fragmentsFuncRendererCreateDestroyExample from './fragmentsFuncRendererCreateDestroy/GridComponent';
import funcRendererWithNanExample from './funcRendererWithNan/GridComponent';
import flickerExample from './flickerExample/GridExample';
import memoExample from './memoizedRenderer/GridComponent';
import nullExample from './nullRenderer/GridComponent';

const SideBar = () => (
    <div style={{float: "left", width: 335, marginRight: 25}}>
        <ul className="nav nav-pills">
            <NavItem to='/rich-grid-declarative'>Rich Grid with Declarative Markup</NavItem>
            <NavItem to='/simple-redux-dynamic'>Simple Redux Dynamic Component Example</NavItem>
            <NavItem to='/simple-redux-hook'>Simple React Hook Component Example</NavItem>
            <NavItem to='/classCompRendererCreateDestroy'>classCompRendererCreateDestroy</NavItem>
            <NavItem to='/>componentThreeExample'>componentThreeExample</NavItem>
            <NavItem to='/componentTwoExample'>componentTwoExample</NavItem>
            <NavItem to='/>deltaRowModeRefreshCompRenderer'>deltaRowModeRefreshCompRenderer</NavItem>
            <NavItem to='/floatingFilterExample'>floatingFilterExample</NavItem>
            <NavItem to='/>fragmentsFuncRendererCreateDestroy'>fragmentsFuncRendererCreateDestroy</NavItem>
            <NavItem to='/funcRendererWithNan'>funcRendererWithNan</NavItem>
            <NavItem to='/flickerExample'>flicker issue&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</NavItem>
            <NavItem to='/memo'>memoized renderer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</NavItem>
            <NavItem to='/null'>null renderer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</NavItem>
        </ul>
    </div>
);

class App extends Component {
    render() {
        return (
            <div style={{display: "inline-block", width: "100%"}}>
                <SideBar/>
                <div style={{float: "left"}}>
                    <Switch>
                        <Redirect from="/" exact to="/rich-grid-declarative"/>
                        <Route exact path='/rich-grid-declarative' component={RichGridDeclarativeExample}/>
                        <Route exact path='/simple-redux-dynamic' component={SimpleReduxDynamicExample}/>
                        <Route exact path='/simple-redux-hook' component={SimpleReduxHookExample}/>
                        <Route exact path='/classCompRendererCreateDestroy' component={classCompRendererCreateDestroyExample}/>
                        <Route exact path='/>componentThreeExample' component={componentThreeExampleExample}/>
                        <Route exact path='/componentTwoExample' component={componentTwoExampleExample}/>
                        <Route exact path='/>deltaRowModeRefreshCompRenderer' component={deltaRowModeRefreshCompRendererExample}/>
                        <Route exact path='/floatingFilterExample' component={floatingFilterExampleExample}/>
                        <Route exact path='/>fragmentsFuncRendererCreateDestroy' component={fragmentsFuncRendererCreateDestroyExample}/>
                        <Route exact path='/funcRendererWithNan' component={funcRendererWithNanExample} />
                        <Route exact path='/flickerExample' component={flickerExample} />
                        <Route exact path='/memo' component={memoExample} />
                        <Route exact path='/null' component={nullExample} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App
