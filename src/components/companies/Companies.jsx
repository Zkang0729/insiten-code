import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Preloader from "../layout/Preloader";
import Company from "./Company";
import { getAllCompany } from "../../actions/companyActions";

import "./Companies.css";

const Companies = ({ company: { loading, companies }, getAllCompany }) => {
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
      {!loading && companies.length === 0 ? (
        <p className='center'>No companies to show...</p>
      ) : (
        companies.map(company => <Company company={company} key={company.id} />)
      )}
    </ul>
  );
};

Companies.propTypes = {
  company: PropTypes.object.isRequired,
  getAllCompany: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  company: state.company,
});

export default connect(mapStateToProps, { getAllCompany })(Companies);
