import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
export default function Services() {
  return (
    <>
      <div className="mt-5 heading mb-5">
        <h1 className="text-center text-white ">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row ">
          <div className="col-10 mx-auto">
            <div className="row gy-4 gx-4">
              {Sdata.map((ele, index) => {
                return (
                  <Card key={index} title={ele.title} imgsrc={ele.imgsrc} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
