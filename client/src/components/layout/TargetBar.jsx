import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  searchCompanies,
  targetRevenue,
  getAllCompany,
  setSearch,
  clearSearch,
} from "../../actions/companyActions";

import "./TargetBar.css";

const TargetBar = ({
  searchCompanies,
  targetRevenue,
  getAllCompany,
  setSearch,
  clearSearch,
}) => {
  useEffect(() => {
    getAllCompany();
    //eslint-disable-next-line
  }, []);

  const text = useRef("");
  const target = useRef("");

  const onChange = () => {
    searchCompanies(text.current.value);
  };

  const targetSearch = e => {
    setSearch();
    targetRevenue(Number(target.current.value));
    if (e.target.value === "") {
      clearSearch();
    }
  };

  return (
    <nav style={{ marginBottom: "30px" }} className='blue'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field searchBar'>
            <input
              id='search'
              type='search'
              placeholder="Type in a company's name or location"
              ref={text}
              onChange={onChange}
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
          <div className='input-field searchBar'>
            <input
              id='targetSearch'
              type='search'
              ref={target}
              placeholder='Type in a target revenue'
              onChange={targetSearch}
            />
            <label className='label-icon' htmlFor='targetSearch'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

TargetBar.propTypes = {
  searchCompanies: PropTypes.func.isRequired,
  targetRevenue: PropTypes.func.isRequired,
  getAllCompany: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
};

export default connect(null, {
  searchCompanies,
  targetRevenue,
  getAllCompany,
  setSearch,
  clearSearch,
})(TargetBar);
