import React, { Fragment, useEffect } from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import AddBtn from "./components/layout/AddBtn";
import Companies from "./components/companies/Companies";
import AddCompanyModal from "./components/companies/AddCompanyModal";
import EditCompanyModal from "./components/companies/EditCompanyModal";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
        <AddBtn />
        <AddCompanyModal />
        <EditCompanyModal />
        <Companies />
      </Fragment>
    </Provider>
  );
};

export default App;
