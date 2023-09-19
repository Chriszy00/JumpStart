import React from "react";
import "../../assets/css/style-membership.css";

const Membership = () => {
  return (
    <div className="container custom min-vh-100 custom-font-style">
      <div className="text-center">
        <div className="" role="tablist">
          <h2 className="pb-5 custom-font-style">Join Jumpstart, Be A Member Now!</h2>
        </div>
      </div>
      <div
        className="tab-content wow fadeIn"
        style={{ visibility: "visible", animationName: "fadeIn" }}
      >
        <div role="tabpanel" className="tab-pane fade show active " id="yearly">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 mb-30">
              <div className="price-item text-center popular">
                <div className="price-top custom-font-style">
                  <h4 className="custom-font-style">Premium</h4>
                  <h2 className="mb-0 custom-font-style">
                    <sup>$</sup>29.99
                  </h2>
                  <span className="text-capitalize custom-font-style">per month</span>
                </div>
                <div className="price-content custom-font-style">
                  <ul className="border-bottom mb-30 mt-md-4 pb-3 text-left">
                    <li>
                      <i className="zmdi zmdi-check mr-2"></i>
                      <span className="c-black">Eget erovtiu faucid</span>
                    </li>
                    <li>
                      <i className="zmdi zmdi-check mr-2"></i>
                      <span className="c-black">Cras justo odio</span>
                    </li>
                    <li>
                      <i className="zmdi zmdi-check mr-2"></i>
                      <span className="c-black">Morbi leo risus</span>
                    </li>
                    <li>
                      <i className="zmdi zmdi-close mr-2"></i>
                      <span>Porta consectetur ac</span>
                    </li>
                    <li>
                      <i className="zmdi zmdi-close mr-2"></i>
                      <span> Vestibulum at eros</span>
                    </li>
                    <li>
                      <i className="zmdi zmdi-close mr-2"></i>
                      <span>Adipisci atque beatae</span>
                    </li>
                  </ul>
                  <div className="d-flex flex-column align-items-center">
                    <a href="#a" className="btn btn-custom1 btn-light mb-2 w-100">
                      Apply Membership
                    </a>
                    <a
                      href="#a"
                      className="btn btn-outline-custom1 btn-light mb-2 w-100"
                    >
                      Renewal
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-30">
              <div className="price-item text-center">
                <div className="price-top">
                  <h4 className="custom-font-style">Business</h4>
                  <h2 className="mb-0 custom-font-style">
                    <sup>$</sup>69.99
                  </h2>
                  <span className="text-capitalize">per month</span>
                </div>
                <div className="price-content">
                  <ul className="border-bottom mb-30 mt-md-4 pb-3 text-left">
                    <li>
                      <i className="zmdi zmdi-check mr-2"></i>
                      <span className="c-black">Eget erovtiu faucid</span>
                    </li>
                    <li>
                      <i className="zmdi zmdi-check mr-2"></i>
                      <span className="c-black">Cras justo odio</span>
                    </li>
                    <li>
                      <i className="zmdi zmdi-check mr-2"></i>
                      <span className="c-black">Morbi leo risus</span>
                    </li>
                    <li>
                      <i className="zmdi zmdi-close mr-2"></i>
                      <span>Porta consectetur ac</span>
                    </li>
                    <li>
                      <i className="zmdi zmdi-close mr-2"></i>
                      <span> Vestibulum at eros</span>
                    </li>
                    <li>
                      <i className="zmdi zmdi-close mr-2"></i>
                      <span>Adipisci atque beatae</span>
                    </li>
                  </ul>
                  <div className="d-flex flex-column align-items-center">
                    <a href="#a" className="btn btn-custom2 btn-light mb-2 w-100">
                      Apply Membership
                    </a>
                    <a
                      href="#a"
                      className="btn btn-outline-custom2 btn-light mb-2 w-100"
                    >
                      Renewal
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
