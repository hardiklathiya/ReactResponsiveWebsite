import React from "react";
import { NavLink } from "react-router-dom";

export default function Card(props) {
  let style={
    backgroundColor:"#09092c"
  }
  return (
    <div className="col-md-4 col-10 mx-auto col-sm-5">
      <div className="card  " style={style}>
        <img src={props.imgsrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-danger ">{props.title}</h5>
          <p className="card-text " style={{color:"silver"}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <NavLink to="" className="btn btn-primary">
            Read More
          </NavLink>
        </div>
      </div>
    </div>
  );
}
