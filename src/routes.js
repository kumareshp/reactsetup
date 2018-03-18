import React from "react";
import {
BrowserRouter,
Switch,
Route,
Redirect,
HashRouter,
hashHistory,
ReactRouter
} from "react-router-dom";

import HomeApplication from "./component/HomeApplication.js";
import ComponentA from "./component/ComponentA.js";

const appRoutes = [
{
path: "/",
isExactPath: true,
component: <HomeApplication />
},
{
path: "/nextpage",
isExactPath: true,
component: <ComponentA/>
}

];


const routes = (
<HashRouter history={hashHistory}>
<Switch>
{appRoutes.map((routeItem, idx) => {
return <Route
key={routeItem.path}
path={routeItem.path}
exact={routeItem.isExactPath}
render={(params) => {
return routeItem.component;
}}
/>;
})}
</Switch>
</HashRouter>
);

export default routes;