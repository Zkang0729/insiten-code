import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllCompany } from "../../actions/companyActions";
import M from "materialize-css/dist/js/materialize.min.js";

const StatusModal = ({ companies, getAllCompany }) => {
  useEffect(() => {
    getAllCompany();
    //eslint-disable-next-line
  });

  return (
    <div id='status-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
          
      </div>
    </div>
  );
};

StautsModal.propTypes = {
  companies: PropTypes.object,
  isRequired,
  getAllCompany: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  companies: state.company.companies,
});

export default connect(mapStateToProps, { getAllCompany })(StatusModal);
