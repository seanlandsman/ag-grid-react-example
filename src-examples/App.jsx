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
import fragmentsFuncRendererCreateDestroyExample from './fragmentsFuncRendererCreateDestroy/GridComponent';
import funcRendererWithNanExample from './funcRendererWithNan/GridComponent';
import flickerExample from './flickerExample/GridComponent';
import flickerExample2 from './flickerExample2/GridComponent';
import flickerExample3 from './flickerExample3/GridComponent';
import flickerExample4 from './flickerExample4/GridComponent';
import contextFlicker from './contextFlicker/GridComponent';
import memoExample from './memoizedRenderer/GridComponent';
import updateHookProps from './updateHookProps/GridComponent';
import nullExample from './nullRenderer/GridComponent';
import amazonExample from './amazon/index';
import groupedRowsExample from './groupedRows/GridComponent';
import interactiveComponentExample from './interactiveComponentExample/GridComponent';
import componentNestedExample from './componentNestedExample/GridComponent';
import slowRendererExample from './slowRendererExample/GridComponent';
import autoheightRendererExample from './autoheightRendererExample/GridComponent';
import materialUI from './materialUI/GridComponent';
import materialUI2 from './materialUI2/GridComponent';
import componentLeak from './componentLeak/GridComponent';
import materialUITheme from './materialUITheme/GridComponent';
import editorComponent from './editorComponent/GridComponent';
import contextComponent from './contextExample/GridComponent';
import discreteUpdatesComponent from './discreteUpdatesExample/GridComponent';
import frozenDataExample from './frozenDataExample/GridComponent';
import dynamicColumnsExample from './dynamicColumnsExample/GridComponent';

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
            <NavItem to='/>fragmentsFuncRendererCreateDestroy'>fragmentsFuncRendererCreateDestroy</NavItem>
            <NavItem to='/funcRendererWithNan'>funcRendererWithNan</NavItem>
            <NavItem to='/flickerExample'>flicker issue&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</NavItem>
            <NavItem to='/flickerExample2'>flicker issue 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</NavItem>
            <NavItem to='/flickerExample3'>flicker issue 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</NavItem>
            <NavItem to='/flickerExample4'>flicker issue 4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</NavItem>
            <NavItem to='/contextFlicker'>context flicker issue 4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</NavItem>
            <NavItem to='/memo'>memoized renderer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</NavItem>
            <NavItem to='/updateHookProps'>update Hook Props&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</NavItem>
            <NavItem to='/null'>null renderer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</NavItem>
            <NavItem to='/amazon'>amazon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</NavItem>
            <NavItem to='/groupedRows'>grouped row&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</NavItem>
            <NavItem to='/interactiveComponentExample'>interactive renderer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</NavItem>
            <NavItem to='/componentNestedExample'>nested components&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</NavItem>
            <NavItem to='/materialUI'>materialUI&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</NavItem>
            <NavItem to='/materialUI2'>materialUI2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</NavItem>
            <NavItem to='/slowRendererExample'>slowRendererExample&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</NavItem>
            <NavItem to='/autoheightRendererExample'>autoheightRendererExample&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</NavItem>
            <NavItem to='/componentLeak'>componentLeak&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</NavItem>
            <NavItem to='/materialUITheme'>materialUITheme&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</NavItem>
            <NavItem to='/editorComponent'>editorComponent&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</NavItem>
            <NavItem to='/contextComponent'>contextComponent&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</NavItem>
            <NavItem to='/frozenDataExample'>frozenDataExample&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</NavItem>
            <NavItem to='/dynamicColumnsExample'>dynamicColumnsExample&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</NavItem>
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
                        <Route exact path='/>fragmentsFuncRendererCreateDestroy' component={fragmentsFuncRendererCreateDestroyExample}/>
                        <Route exact path='/funcRendererWithNan' component={funcRendererWithNanExample} />
                        <Route exact path='/flickerExample' component={flickerExample} />
                        <Route exact path='/flickerExample2' component={flickerExample2} />
                        <Route exact path='/flickerExample3' component={flickerExample3} />
                        <Route exact path='/flickerExample4' component={flickerExample4} />
                        <Route exact path='/contextFlicker' component={contextFlicker} />
                        <Route exact path='/memo' component={memoExample} />
                        <Route exact path='/updateHookProps' component={updateHookProps} />
                        <Route exact path='/null' component={nullExample} />
                        <Route exact path='/amazon' component={amazonExample} />
                        <Route exact path='/groupedRows' component={groupedRowsExample} />
                        <Route exact path='/interactiveComponentExample' component={interactiveComponentExample} />
                        <Route exact path='/componentNestedExample' component={componentNestedExample} />
                        <Route exact path='/materialUI' component={materialUI} />
                        <Route exact path='/materialUI2' component={materialUI2} />
                        <Route exact path='/slowRendererExample' component={slowRendererExample} />
                        <Route exact path='/autoheightRendererExample' component={autoheightRendererExample} />
                        <Route exact path='/componentLeak' component={componentLeak} />
                        <Route exact path='/materialUITheme' component={materialUITheme} />
                        <Route exact path='/editorComponent' component={editorComponent} />
                        <Route exact path='/contextComponent' component={contextComponent} />
                        <Route exact path='/discreteUpdatesComponent' component={discreteUpdatesComponent} />
                        <Route exact path='/frozenDataExample' component={frozenDataExample} />
                        <Route exact path='/dynamicColumnsExample' component={dynamicColumnsExample} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App
