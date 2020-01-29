import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllCompany } from "../../actions/companyActions";

const StatusModal = ({ companies, getAllCompany }) => {
  useEffect(() => {
    getAllCompany();
    //eslint-disable-next-line
  }, []);

  return (
    <div id='status-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h2>
          Approved:{" "}
          {companies.filter(company => company.Status === "Approved").length}
        </h2>
        <h2>
          Researching:{" "}
          {companies.filter(company => company.Status === "Researching").length}
        </h2>
        <h2>
          Declined:{" "}
          {companies.filter(company => company.Status === "Declined").length}
        </h2>
      </div>
    </div>
  );
};

StatusModal.propTypes = {
  companies: PropTypes.array.isRequired,
  getAllCompany: PropTypes.func.isRequired,
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

const mapStateToProps = state => ({
  companies: state.company.companies,
});

export default connect(mapStateToProps, { getAllCompany })(StatusModal);
