import React from 'react'
import { withSiteData } from 'react-static'
import LuchoImg from '../assets/images/lucho-m1.png'
import ProfilePic from '../assets/images/lucho-m1-2.jpg'
import Footer from '../components/footer'

export default withSiteData(() => (
  <div>
    {/*wrapper*/}
    <div id="wrapper" className="single-page-wrap">
      {/* Content*/}
      <div className="content">
        {/* section*/}
        <section
          className="parallax-section dark-bg sec-half parallax-sec-half-right"
          data-scrollax-parent="true"
        >
          <div
            className="bg par-elem"
            data-bg=""
            data-scrollax="properties: { translateY: '30%' }"
            style={{
              background: `url(${LuchoImg}) center no-repeat`,
            }}
          />
          <div className="overlay" />
          <div className="pattern-bg" />
          <div className="container">
            <div className="section-title">
              <h2>
                Our <span>Awesome</span> <br /> Team
              </h2>
              <p>
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text.
              </p>
              <div className="horizonral-subtitle">
                <span>Luchoster</span>
              </div>
            </div>
            <a href="#sec1" className="custom-scroll-link hero-start-link">
              <span>Let's Start</span> <i className="fal fa-long-arrow-down" />
            </a>
          </div>
        </section>
        {/* section end*/}
        {/* section end*/}
        {/* section*/}
        <section data-scrollax-parent="true" id="sec1">
          <div
            className="section-subtitle"
            data-scrollax="properties: { translateY: '-250px' }"
            style={{ fontSize: '210px', textAlign: 'right' }}
          >
            {' '}
            <span>//</span> Lucho Suarez
          </div>
          <div className="container">
            <div className="row mar-bottom">
              <div className="col-md-5">
                <div className="collage-image fl-wrap">
                  <div
                    className="collage-image-title"
                    data-scrollax="properties: { translateY: '150px' }"
                  >
                    Lucho
                  </div>
                  <img src={ProfilePic} className="respimg" alt="" />
                </div>
              </div>
              <div className="col-md-7">
                <div className="main-about fl-wrap">
                  <h5>Title</h5>
                  <h2>Lucho Suarez</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                    Donec a consectetur nulla. Nulla posuere sapien vitae lectus
                    suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat.
                    Curabitur convallis fringilla diam sed aliquam. Sed tempor
                    iaculis massa faucibus feugiat. In fermentum facilisis
                    massa, a consequat purus viverra.
                  </p>
                  <p>
                    Aliquam erat volutpat. Curabitur convallis fringilla diam
                    sed aliquam. Sed tempor iaculis massa faucibus feugiat. In
                    fermentum facilisis massa, a consequat purus viverra.
                  </p>
                  <div className="bold-title fl-wrap">Skills</div>
                  <div className="fw-skills fl-wrap">
                    <div className="skillbar-box animaper">
                      {/* skill 1*/}
                      <div className="custom-skillbar-title">
                        <span>AR-15</span>
                      </div>
                      <div className="skill-bar-percent">95%</div>
                      <div className="skillbar-bg" data-percent="95%">
                        <div className="custom-skillbar" />
                      </div>
                      {/* skill 2*/}
                      <div className="custom-skillbar-title">
                        <span>Handgun</span>
                      </div>
                      <div className="skill-bar-percent">65%</div>
                      <div className="skillbar-bg" data-percent="65%">
                        <div className="custom-skillbar" />
                      </div>
                      {/* skill 3*/}
                      <div className="custom-skillbar-title">
                        <span>Shotgun</span>
                      </div>
                      <div className="skill-bar-percent">75%</div>
                      <div className="skillbar-bg" data-percent="75%">
                        <div className="custom-skillbar" />
                      </div>
                    </div>
                  </div>
                  <div className="team-single-social fl-wrap">
                    <span>Follow : </span>
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
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-parallax-module"
            data-position-top="90"
            data-position-left="25"
            data-scrollax="properties: { translateY: '-250px' }"
          />
          <div
            className="bg-parallax-module"
            data-position-top="70"
            data-position-left="70"
            data-scrollax="properties: { translateY: '150px' }"
          />
          <div className="sec-lines" />
        </section>
        {/* section end*/}
      </div>
      {/* Content end */}
      <Footer />
    </div>
    {/*   content end */}
  </div>
))
