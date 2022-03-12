import React from "react";
import { connect } from "react-redux";
import * as actions from '../actions'

const Counter = (props) => {
const {counter, inc, dec, rnd} = props

  return (
    <div className="container">
      <h2>{counter}</h2>
      <button className="btn btn-danger btn-lg" onClick={dec}>dec</button>
      <button className="btn btn-success btn-lg" onClick={inc}>inc</button>
      <button className="btn btn-success btn-lg" onClick={rnd}>random</button>
    </div>
  );
};

const mapStateToProps= (state)=>{
  return {
    counter: state
  }}


export default connect(mapStateToProps, actions)(Counter) ;
