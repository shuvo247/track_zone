import React from "react";
import "./main.css";
function Main() {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="row">

            <div className="col-lg-3">
              <div className="clock-wrap">
              <button type="button" className="btn clock-btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">add clock</button>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                    <input type="text" className="form-control" id="recipient-name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message-text" className="col-form-label">Message:</label>
                    <textarea className="form-control" id="message-text" defaultValue={""} />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Send message</button>
              </div>
            </div>
          </div>
        </div>
                
                
               
               
                <div className="clock-list">
                  <div className="clock-content">
                    <h6>clock title</h6>
                    <h6>clock description</h6>
                  </div>
                  <div className="clock-info">
                    <h6>time zone:</h6>
                    <h6>current time</h6>
                  </div>
                  <button>delete clock</button>
                  <button>add event</button>
                </div>
                <div className="clock-list">
                  <div className="clock-content">
                    <h6>clock title</h6>
                    <h6>clock description</h6>
                  </div>
                  <div className="clock-info">
                    <h6>time zone:</h6>
                    <h6>current time</h6>
                  </div>
                  <button>delete clock</button>
                  <button>add event</button>
                </div>
                <div className="clock-list">
                  <div className="clock-content">
                    <h6>clock title</h6>
                    <h6>clock description</h6>
                  </div>
                  <div className="clock-info">
                    <h6>time zone:</h6>
                    <h6>current time</h6>
                  </div>
                  <button>delete clock</button>
                  <button>add event</button>
                </div>
                <div className="clock-list">
                  <div className="clock-content">
                    <h6>clock title</h6>
                    <h6>clock description</h6>
                  </div>
                  <div className="clock-info">
                    <h6>time zone:</h6>
                    <h6>current time</h6>
                  </div>
                  <button>delete clock</button>
                  <button>add event</button>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
                <div className="eventlist-wrap">
                <div className="row">
                <div className="col-lg-6">
                  <div className="event-list">
                    <div className="evnt-ontent">
                      <h4>event title</h4>
                      <h4>event description</h4>
                      <h4>event time between</h4>
                      <h4>
                        event <span>date</span> and <span>time</span>
                      </h4>
                    </div>
                    <div className="btn event-btn">
                      <button>edit</button>
                      <button>delete</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="event-list">
                    <div className="evnt-ontent">
                      <h4>event title</h4>
                      <h4>event description</h4>
                      <h4>event time between</h4>
                      <h4>
                        event <span>date</span> and <span>time</span>
                      </h4>
                    </div>
                    <div className="btn event-btn">
                      <button>edit</button>
                      <button>delete</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="event-list">
                    <div className="evnt-ontent">
                      <h4>event title</h4>
                      <h4>event description</h4>
                      <h4>event time between</h4>
                      <h4>
                        event <span>date</span> and <span>time</span>
                      </h4>
                    </div>
                    <div className="btn event-btn">
                      <button>edit</button>
                      <button>delete</button>
                    </div>
                   
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="event-list">
                    <div className="evnt-ontent">
                      <h4>event title</h4>
                      <h4>event description</h4>
                      <h4>event time between</h4>
                      <h4>
                        event <span>date</span> and <span>time</span>
                      </h4>
                    </div>
                    <div className="btn event-btn">
                      <button>edit</button>
                      <button>delete</button>
                    </div>
                  </div>
                </div>
              </div>
                </div>
              
            </div>
            <div className="col-lg-2">
              <div className="event-form">
                <form action="">
                  <div className="row">
                    <div className="col-lg-12">
                      <label>Event title</label>
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="Event title"
                      />
                    </div>
                    <div className="col-lg-12">
                      <label>event description</label>
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="event description"
                      />
                    </div>
                    <div className="col-lg-12">
                      <label>event date and time</label>
                      <input
                        required
                        type="time"
                        name="name"
                        placeholder="event time"
                      />
                      <input
                        required
                        type="date"
                        name="name"
                        placeholder="event date"
                      />
                    </div>
                    <div className="col-lg-12">
                      <div className="btn list-btn">
                        <button type="submit">submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
