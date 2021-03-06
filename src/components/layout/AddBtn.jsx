import React from "react";
import { connect } from "react-redux";
import { ltsSort, stlSort } from "../../actions/companyActions";

const AddBtn = ({ ltsSort, stlSort }) => {
  return (
    <div className='fixed-action-btn'>
      <a className='btn-floating btn-large blue darken-2'>
        <i className='large material-icons'>menu</i>
      </a>
      <ul>
        <li>
          <a className='btn-floating yellow darken-1' onClick={ltsSort}>
            <i className='material-icons' style={chevronUp}>
              chevron_left
            </i>
          </a>
        </li>
        <li>
          <a className='btn-floating yellow darken-1' onClick={stlSort}>
            <i className='material-icons' style={chevronDown}>
              chevron_left
            </i>
          </a>
        </li>
        <li>
          <a
            href='#add-company-modal'
            className='btn-floating red modal-trigger'>
            <i className='large material-icons'>add</i>
          </a>
        </li>
        <li>
          <a className='blue btn-floating modal-trigger' href='#status-modal'>
            <i className='large material-icons'>info</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

const chevronUp = {
  transform: "rotate(90deg)",
};

const chevronDown = {
  transform: "rotate(-90deg)",
};

export default connect(null, { stlSort, ltsSort })(AddBtn);
