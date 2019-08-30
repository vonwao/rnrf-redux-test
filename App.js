import React from 'react';
import {Actions, Router, Scene} from "react-native-router-flux";
import Home from "./src/home";
import Page from "./src/page";
import {connect, Provider} from "react-redux";
import {createStore} from "redux";

const navigator = Actions.create(<Scene key="root" hideNavBar>
  <Scene key="home" component={Home}/>
  <Scene key="page" component={Page}/>
</Scene>);

const ReduxRouter = connect((state) => ({ state: state.route }))(Router);
// it is important to load reducers AFTER actions.create (so no import here)
const reducers = require('./src/reducers').default;

export default
class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers, {})}>
        <ReduxRouter navigator={navigator} />
      </Provider>
    );
  }
}
