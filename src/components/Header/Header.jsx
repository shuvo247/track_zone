import React from "react";
import "./header.css"
function Header() {
  return (
    <>
            <h2 className="project-name text-center">Track zone</h2>
      <div className="header">
        <div className="container">
          <div className="row">
          </div>
          <div className="row d-flex">
            <div className="col-lg-4">
              <div className="user-profile">
                <img src="https://picsum.photos/60/60" alt="user-img" />
                <h2 className="user-name">Demo User</h2>
                <p>demo time zoon</p>
              </div>
            </div>            
            <div className="col-lg-8">
              <div className="clock ">
                <div className="time d-flex">
                  <div className="hour"><p>02:</p></div>
                  <div className="minute"><p>22:</p></div>
                  <div className="secound"><p>56</p></div>
                </div>
                <div className="date d-flex">
                    <div className="day"><p>02/</p></div>
                    <div className="month"><p>06/</p></div>
                    <div className="year"><p>2022</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
