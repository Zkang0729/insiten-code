import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Preloader from "../layout/Preloader";
import Company from "./Company";
import { getAllCompany } from "../../actions/companyActions";

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
    <ul className='collection'>
      {!loading && !search && companies.length === 0 ? (
        <p className='center'>No companies to show...</p>
      ) : search ? (
        sortedCompanies.map(com => <Company company={com} key={com._id} />)
      ) : (
        companies.map(comp => <Company company={comp} key={comp._id} />)
      )}
    </ul>
  );
};

Companies.propTypes = {
  companies: PropTypes.array.isRequired,
  sortedCompanies: PropTypes.array,
  search: PropTypes.bool.isRequired,
  getAllCompany: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  company: state.company,
});

export default connect(mapStateToProps, { getAllCompany })(Companies);
