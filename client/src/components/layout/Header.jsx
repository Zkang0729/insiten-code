import React from "react";
import { connect } from "react-redux";
import { ltsSort, stlSort } from "../../actions/companyActions";

const Header = ({ ltsSort, stlSort }) => {
  return (
    <li className='collection-header'>
      <nav>
        <div class='nav-wrapper blue'>
          <ul id='nav-mobile' class='left hide-on-med-and-down'>
            <li>
              <a
                className='btn-floating yellow darken-1'
                onClick={ltsSort}
                href='/#'>
                <i className='material-icons' style={chevronUp}>
                  chevron_left
                </i>
              </a>
            </li>
            <li>
              <a
                className='btn-floating yellow darken-1'
                onClick={stlSort}
                href='/#'>
                <i className='material-icons' style={chevronDown}>
                  chevron_left
                </i>
              </a>
            </li>
          </ul>
          <a href='/#' class='brand-logo center'>
            Company List
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <a
                href='#add-company-modal'
                className='btn-floating red modal-trigger'>
                <i className='large material-icons'>add</i>
              </a>
            </li>
            <li>
              <a
                className='blue btn-floating modal-trigger'
                href='#status-modal'>
                <i className='large material-icons'>info</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </li>
  );
};

const chevronUp = {
  transform: "rotate(90deg)",
};

const chevronDown = {
  transform: "rotate(-90deg)",
};

export default connect(null, { stlSort, ltsSort })(Header);
