import React from 'react';
// import { Link } from "react-router-dom";
import logo from './logo.png';
// import background from './form/Login_Background.png';
// import { Paper, TextField, Button, makeStyles } from "@material-ui/core";
import { useState, /* useContext,*/ useEffect } from 'react';
import { withRouter } from 'react-router';
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
const Welcomepage = (props) => {
    const history = useHistory();
    const fun = () => {
      window.open("http://www.iqac-ggv.com/login","_self")
    }



  return (

    
    <>
      {
        <div
          style={{ background: "#B4322E" }}
          className="h-screen w-screen grid  grid-cols-7  "
        >
          <div className="  col-span-3 md:col-start-3 sm:col-start-1 border-black  ">
            <div
              style={{
                height: '70%',
              }}
              className="py-20 grid lg:justify-items-center  border-black rounded  w-full mt-40  "
            >
              <img
                style={{ height: '240px', width: '660px' }}
                className=" transform sm:scale-75  md:scale-75  lg:scale-100"
                src={logo}
                alt="Logo"
              />
              <h1 className=" font-medium mt   text-4xl text-grey-100">
                Welcome To
              </h1>
              <h1 className=" font-medium  text-grey-100 mb-6   text-5xl">IQAC-Portal</h1>
              {/* <Link
                to="/developmentTeam"
                className=" font-medium hover:text-gray-100 text-gray-100 mb-8   text-2xl"
              >
                Web Portal
              </Link> */}
                <button
                  onClick={fun}
                  className=" px-6 py-2  mt-2 shadow-md no-underline rounded bg-white text-indigo-600 font-sans font-semibold text-xl hover:border-indigo-400 border-white border  hover:text-white hover:bg-indigo-400 focus:outline-none active:shadow-none "
                >
                  Launch
                </button>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default withRouter(Welcomepage);
