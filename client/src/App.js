import React, { Fragment, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import FuncBtn from "./components/layout/FuncBtn";
import TargetBar from "./components/layout/TargetBar";
import Header from "./components/layout/Header";
import Companies from "./components/companies/Companies";
import StatusModal from "./components/layout/StatusModal";
import AddCompanyModal from "./components/companies/AddCompanyModal";
import EditCompanyModal from "./components/companies/EditCompanyModal";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

const App = () => {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
        <TargetBar />
        <div className='container' style={{ marginTop: "3rem" }}>
          <Header />
          <FuncBtn />
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
