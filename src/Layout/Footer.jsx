import React from "react";

const Footer = () => {
  return (
    <section class="position-relative pt-20 bg-white overflow-hidden">
      <div
        class="position-absolute top-0 start-0 h-100 w-100"
        // style="background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);"
      ></div>
      <div class="position-relative container pb-12" style={{ zIndex: "1" }}>
        <div class="row g-16">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="mw-md-xs">
              <div class="d-flex mb-4">
                <img
                  class="img-fluid"
                  src="flex-assets/logos/flex-dark-green.svg"
                  alt=""
                />
              </div>
              <p class="fs-10 fw-medium text-secondary">
                Launch your own Software As A Service Application with Flex
                Solutions.
              </p>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-2">
            <div class="mw-md-xs">
              <h3 class="font-heading mb-5 fs-10">Product</h3>
              <ul class="nav flex-column">
                <li class="nav-item mb-4">
                  <a class="nav-link p-0 fs-11 link-secondary" href="/">
                    Features
                  </a>
                </li>
                <li class="nav-item mb-4">
                  <a class="nav-link p-0 fs-11 link-secondary" href="/">
                    Solutions
                  </a>
                </li>
                <li class="nav-item mb-4">
                  <a class="nav-link p-0 fs-11 link-secondary" href="/">
                    Pricing
                  </a>
                </li>
                <li class="nav-item mb-4">
                  <a class="nav-link p-0 fs-11 link-secondary" href="/">
                    Tutorials
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link p-0 fs-11 link-secondary" href="/">
                    Updates
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-2">
            <div class="mw-md-xs">
              <h3 class="font-heading mb-5 fs-10">Remaining</h3>
              <ul class="nav flex-column">
                <li class="nav-item mb-4">
                  <a class="nav-link p-0 fs-11 link-secondary" href="/">
                    Blog
                  </a>
                </li>
                <li class="nav-item mb-4">
                  <a class="nav-link p-0 fs-11 link-secondary" href="/">
                    Newsletter
                  </a>
                </li>
                <li class="nav-item mb-4">
                  {/* <a class="nav-link p-0 fs-11 link-secondary" href="/"> */}
                  Help Centre
                  {/* </a> */}
                </li>
                <li class="nav-item mb-4">
                  <a class="nav-link p-0 fs-11 link-secondary" href="/">
                    Careers
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link p-0 fs-11 link-secondary" href="/">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="mw-md-sm">
              <h3 class="font-heading mb-5 fs-10">Newsletter</h3>
              <div class="row g-4 justify-content-center">
                <div class="col">
                  <div class="form-group">
                    <input
                      class="form-control text-secondary-dark p-3 shadow"
                      id="footerInput8-1"
                      type="email"
                      aria-describedby="emailHelp"
                      value="support@shuffle.dev"
                      placeholder="Enter email"
                    />
                  </div>
                </div>
                <div class="col-12 col-lg-auto">
                  <button
                    class="btn btn-lg btn-success fs-11 w-100 py-3 px-4 h-100 shadow"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="position-relative border-bottom border-light"
        style={{ zIndex: "1" }}
      ></div>
      <div class="position-relative container" style={{ zIndex: "1" }}>
        <p class="mb-0 pt-10 pb-16 fs-12 fw-medium text-center text-secondary-light">
          &copy; 2021 Flex. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
