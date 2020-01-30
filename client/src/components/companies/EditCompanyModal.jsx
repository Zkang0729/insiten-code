import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";
import { updateCompany } from "../../actions/companyActions";

const EditCompanyModal = ({ current, updateCompany }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [revenue, setRevenue] = useState(0);
  const [location, setLocation] = useState("");

  useEffect(() => {
    if (current) {
      setName(current.Name);
      setStatus(current.Status);
      setRevenue(current.Revenue);
      setLocation(current.Location);
    }
  }, [current]);

  const onSubmit = () => {
    if (name === "" || status === "" || revenue === null || location === "") {
      M.toast({ html: "Please enter all required field!" });
    } else {
      const updCompany = {
        _id: current._id,
        Name: name,
        Status: status,
        Revenue: revenue,
        Location: location,
      };

      updateCompany(updCompany);
      M.toast({ html: "Company updated!" });

      // Clear Fields
      setName("");
      setStatus("");
      setRevenue(0);
      setLocation("");
    }
  };

  return (
    <div id='edit-company-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Edit Company</h4>
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
              value={revenue}
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

EditCompanyModal.propTypes = {
  current: PropTypes.object,
  updateCompany: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  current: state.company.current,
});

export default connect(mapStateToProps, { updateCompany })(EditCompanyModal);
