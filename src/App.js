import React, { Fragment, useEffect } from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import AddBtn from "./components/layout/AddBtn";
import TargetBar from "./components/layout/TargetBar";
import Companies from "./components/companies/Companies";
import StatusModal from "./components/layout/StatusModal";
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
        <TargetBar />
        <div className='container'>
          <AddBtn />
          <StatusModal />
          <AddCompanyModal />
          <EditCompanyModal />
          <Companies />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
