import React from 'react'

const Footer = () => (
  <React.Fragment>
    {/* footer*/}
    <div className="height-emulator fl-wrap" style={{ height: '600px' }} />
    <footer className="main-footer fixed-footer">
      {/*footer-inner*/}
      <div className="footer-inner fl-wrap">
        <div className="container">
          <div className="partcile-dec" data-parcount="90" />
          <div className="row">
            <div className="col-md-2">
              <div className="footer-title fl-wrap">
                <span>TopShot</span>
              </div>
            </div>
            <div className="col-md-5">
              <div className="footer-header fl-wrap">
                <span>01.</span>Last Twitts
              </div>
              <div className="footer-box fl-wrap">
                <div
                  className="twitter-swiper-container fl-wrap"
                  id="twitts-container"
                />
                <a href="#" className="btn float-btn trsp-btn">
                  Follow
                </a>
              </div>
            </div>
            <div className="col-md-5">
              <div className="footer-header fl-wrap">
                <span>02.</span> Get an Invitation / Contacts
              </div>
              {/* footer-box*/}
              <div className="footer-box fl-wrap">
                <p>
                  If you would like to get an invite to participate in the
                  shooting tournaments, sedn us your email, and we'll send you
                  the instructions.
                </p>
                <div className="subcribe-form fl-wrap">
                  <form id="subscribe" className="fl-wrap">
                    <input
                      className="enteremail"
                      name="email"
                      id="subscribe-email"
                      placeholder="email"
                      spellcheck="false"
                      type="text"
                    />
                    <button
                      type="submit"
                      id="subscribe-button"
                      className="subscribe-button"
                    >
                      <i className="fal fa-paper-plane" /> Send{' '}
                    </button>
                    <label
                      for="subscribe-email"
                      className="subscribe-message"
                    />
                  </form>
                </div>
                {/* footer-contacts*/}
                <div className="footer-contacts fl-wrap">
                  <ul>
                    <li>
                      <i className="fal fa-phone" />
                      <span>Phone :</span>
                      <a href="#">+489756412322</a>
                    </li>
                    <li>
                      <i className="fal fa-envelope" />
                      <span>Email :</span>
                      <a href="#">support@topshot.com</a>
                    </li>
                    <li>
                      <i className="fal fa-map-marker" />
                      <span>Address</span>
                      <a href="#">USA 27TH Brooklyn NY</a>
                    </li>
                  </ul>
                </div>
                {/* footer end */}
                {/* footer-socilal */}
                <div className="footer-socilal fl-wrap">
                  <ul>
                    <li>
                      <a href="#" target="_blank">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* footer-socilal end */}
              </div>
              {/* footer-box end*/}
            </div>
          </div>
        </div>
      </div>
      {/*footer-inne endr*/}
      {/*subfooter*/}
      <div className="subfooter fl-wrap">
        <div className="container">
          {/* policy-box*/}
          <div className="policy-box">
            <span>&#169; TopShot 2018 / All rights reserved. </span>
          </div>
          {/* policy-box end*/}
          <a href="#" className="to-top color-bg">
            <i className="fal fa-angle-up" />
            <span />
          </a>
        </div>
      </div>
      {/*subfooter end*/}
    </footer>
    {/* footer end*/}
  </React.Fragment>
)

export default Footer
