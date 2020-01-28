import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";
import { addCompany } from "../../actions/companyActions";

const AddCompanyModal = ({ addCompany }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [revenue, setRevenue] = useState(0);
  const [location, setLocation] = useState("");

  const onSubmit = () => {
    if (name === "" || status === "" || revenue === null || location === "") {
      M.toast({ html: "Please enter all required field!" });
    } else {
      const newCompany = {
        Name: name,
        Status: status,
        Revenue: revenue,
        Location: location,
      };

      addCompany(newCompany);
      M.toast({ html: "Company Added!" });

      // Clear Fields
      setName("");
      setStatus("");
      setRevenue(0);
      setLocation("");
    }
  };

  return (
    <div id='add-company-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Add Company</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='name'
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder='Company Name (i.e. SpaceX Inc.)'
            />
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='status'
              value={status}
              onChange={e => setStatus(e.target.value)}
              placeholder='Assessment Status'
            />
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='revenue'
              onChange={e => setRevenue(Number(e.target.value))}
              placeholder='Annual Revenue'
            />
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='location'
              value={location}
              onChange={e => setLocation(e.target.value)}
              placeholder='Location'
            />
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'>
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

AddCompanyModal.propTypes = {
  addCompany: PropTypes.func.isRequired,
};

export default connect(null, { addCompany })(AddCompanyModal);
