import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteCompany, setCurrent } from "../../actions/companyActions";
import "./Company.css";

import M from "materialize-css/dist/js/materialize.min.js";

const Company = ({ company, deleteCompany, setCurrent }) => {
  const onDelete = () => {
    deleteCompany(company.id);
    M.toast({ html: "Company Deleted" });
  };

  return (
    <li
      className='collection-item important modal-trigger'
      href='#edit-company-modal'
      onClick={() => setCurrent(company)}>
      <div
        className={`card-panel ${
          company.Status === "Researching"
            ? "blue"
            : company.Status === "Declined"
            ? "red"
            : "green"
        }`}>
        <a className='white-text' href="/#">
          {company.Name + "   "}
          <span className='white-text'>Revenue: {company.Revenue}</span>
        </a>
        <br />
        <span className='grey-text sub-information'>
          <span className='white-text'>Status: {company.Status}</span>
          {"  "}
          <span className='white-text'>Location: {company.Location}</span>
        </span>
        <a
          href='#!'
          onClick={onDelete}
          className='secondary-content delete-icon'>
          <i className='material-icons grey-text small'>delete</i>
        </a>
      </div>
    </li>
  );
};

Company.propTypes = {
  company: PropTypes.object.isRequired,
  deleteCompany: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteCompany, setCurrent })(Company);
