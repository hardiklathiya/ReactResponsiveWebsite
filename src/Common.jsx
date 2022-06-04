import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Home(props) {
  return (
      <>
    <section id="header" className='header d-flex align-items-center'>
    <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-10 mx-auto">
                <div className="row">
                <div className="col-md-6 pt-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1 className='text-white'>{props.name} <strong className='text-primary'>Hardik Lathiya</strong></h1>
                     <h2 className="my-3 text-white">
                        We are the team of talented developer making website
                    </h2>
                    <div className="mt-3 mb-3">
                        <NavLink className="getStarted" to={props.visit}>{props.button}</NavLink>
                    </div>
                </div>
            
            <div className="col-lg-6 order-1 mt-5 order-lg-2 header-img">
    <img src={props.imgsrc} alt=""  className="img-fluid animated"/>
            </div>
            </div>
            </div>
        </div>
    </div>
    </section>
      </>

  )
}
