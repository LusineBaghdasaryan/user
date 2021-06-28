import Login from "../components/Login";
import Register from "../components/Register";
import Profile from "../components/Profile";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";


export const useRoutes = (isAuth:boolean) => {
    if (isAuth) {
        return (
                <Router>
                    <Switch>
                        <Route path="/profile" exact component={Profile}/>
                        <Redirect to="/profile"/>
                    </Switch>
                </Router>
        )
    }
    return (
            <Router>
                <Switch>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/" exact component={Login}/>
                    <Redirect to="/"/>
                </Switch>
            </Router>
    )
}

export default useRoutes;
