import React from 'react';
import ReactDOM from 'react-dom';
import{Comment} from 'react-bootstrap';

class Comments extends React.Component{
  render() {
    return(

    <div className="container mt-5">
        <div className="d-flex justify-content-center row">
            <div className="col-md-8">
                <div className="d-flex flex-column comment-section">
                    <div className="bg-white p-2">
                        <div className="d-flex flex-row user-info">
                        <img className="rounded-circle" src="/images/clogo.jpg" width="40"/>
                            <div className="d-flex flex-column justify-content-start ml-2">
                            <span className="d-block font-weight-bold name">Reef Resturant</span>
                            <span className="date text-black-50">Shared publicly - Jan 2020</span></div>
                        </div>
                        <div className="mt-2">
                            <p className="comment-text">שירות ואיכות טובה,מחירים זולים,פשוט כיף לקנות משם</p>
                        </div>
                    </div>
                    <div className="bg-white">
                        <div className="d-flex flex-row fs-12">
                            <div className="like p-2 cursor"><i class="fa fa-thumbs-o-up"></i>
                              <span className="ml-1">אהבתי</span>
                            </div>
                            <div className="like p-2 cursor"><i class="fa fa-commenting-o"></i>
                              <span className="ml-1">תגובה</span>
                            </div>
                            <div className="like p-2 cursor"><i class="fa fa-share"></i>
                              <span className="ml-1">שתף</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-light p-2">
                        <div className="d-flex flex-row align-items-start">
                          <img className="rounded-circle" src="/images/clogo.jpg" width="40"/>
                          <textarea className="form-control ml-1 shadow-none textarea"></textarea>
                        </div>
                        <div className="mt-2 text-right">
                          <button className="btn btn-primary btn-sm shadow-none" type="button">פרסם תגובה</button>
                          <button className="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">ביטול</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

      )
   }
}

export default Comments
