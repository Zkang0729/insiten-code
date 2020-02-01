import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteCompany, setCurrent } from "../../actions/companyActions";
import "./Company.css";

import M from "materialize-css/dist/js/materialize.min.js";

const Company = ({ company, deleteCompany, setCurrent }) => {
  const onDelete = () => {
    deleteCompany(company._id);
    M.toast({ html: "Company Deleted" });
  };

  return (
    <li
      className='collection-item important'
      onClick={() => setCurrent(company)}>
      <div
        className={`card-panel modal-trigger flex ${
          company.Status === "Researching"
            ? "blue"
            : company.Status === "Declined"
            ? "red"
            : "green"
        }`}
        href='#edit-company-modal'>
        <a className='white-text' href='/#'>
          {company.Name + "   "}
          <span className='white-text revenue'>
            Revenue: ${new Intl.NumberFormat().format(company.Revenue)}
          </span>
        </a>
        <br />
        <span className='grey-text sub-information'>
          <span className='white-text stat'>Status: {company.Status}</span>
          {"  "}
          <span className='white-text location'>
            Location: {company.Location}
          </span>
        </span>
      </div>
      <a href='#!' onClick={onDelete} className='secondary-content delete-icon'>
        <i className='material-icons grey-text small'>delete</i>
      </a>
    </li>
  );
};

Company.propTypes = {
  company: PropTypes.object.isRequired,
  deleteCompany: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteCompany, setCurrent })(Company);
