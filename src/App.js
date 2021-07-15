import ProductList from './components/ProductList'
import Login from './admin/LoggedIn.js'
import Store from './store'
import { observer } from 'mobx-react-lite'
import { useContext } from "react"

import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import PrivateRoute from './components/PrivateRoute'


function App() {
  const OwnStore = useContext(Store)
  console.log(OwnStore.Auth)
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ProductList} />
          <PrivateRoute
            path="https://relaxed-leakey-626a52.netlify.app/login"
            component={Login}
            handler={OwnStore.Auth}
          />
          <PrivateRoute
            path="https://relaxed-leakey-626a52.netlify.app/admin"
            handler={OwnStore.Auth}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default observer(App);
