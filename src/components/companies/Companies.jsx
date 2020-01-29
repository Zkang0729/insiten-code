import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Preloader from "../layout/Preloader";
import Company from "./Company";
import { getAllCompany } from "../../actions/companyActions";

import "./Companies.css";

const Companies = ({
  company: { loading, companies, search, sortedCompanies },
  getAllCompany,
}) => {
  useEffect(() => {
    getAllCompany();
    // eslint-disable-next-line
  }, []);

  if (loading || companies === null) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>Company List</h4>
      </li>
      {!loading && !search && companies.length === 0 ? (
        <p className='center'>No companies to show...</p>
      ) : search ? (
        sortedCompanies.map(com => <Company company={com} key={com.id} />)
      ) : (
        companies.map(comp => <Company company={comp} key={comp.id} />)
      )}
    </ul>
  );
};

Companies.propTypes = {
  sortedCompanies: PropTypes.array.isRequired,
  getAllCompany: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  company: state.company,
});

export default connect(mapStateToProps, { getAllCompany })(Companies);