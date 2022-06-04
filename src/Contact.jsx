import React, { useState } from "react";

export default function Contact() {
  const [data, setData] = useState({
    fullName: "",
    mobileNo: "",
    email: "",
    message: "",
  });
  const  InputEvent= (event) => {
    // console.log(e.target.value);
    const {name,value}=event.target;
    setData((preVal)=>{
      return {...preVal,
        [name]:value}
    })
    
  };
  const submitInfo = (e) => {
    e.preventDefault();
    alert(`My name is ${data.fullName},My Mobile number is ${data.mobileNo},My email address is ${data.email} and this is my for you '${data.message}'`)
  };
  return (
    <>
      <div className="my-3 heading_div">
        <h1 className="my-3 text-center text-white heading">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={submitInfo}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  className="form-control input_style"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Fullname"
                  onChange={InputEvent}
                  name="fullName"
                  value={data.fullName}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Mobile No.
                </label>
                <input
                  type="tel"
                  className="form-control input_style"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Mobile number"
                  onChange={InputEvent}
                  name="mobileNo"
                  value={data.mobileNo}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control input_style"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  onChange={InputEvent}
                  value={data.email}
                  name="email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control input_style"
                  id="exampleFormControlTextarea1"
                  onChange={InputEvent}
                  rows="3"
                  value={data.message}
                  name="message"
                ></textarea>
              </div>
              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
