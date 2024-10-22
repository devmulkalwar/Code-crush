import React from "react";

const About = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src="https://placehold.co/600x400/EEE/31343C"
              alt="About Us"
              className="img-fluid rounded shadow-sm"
            />
          </div>

          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h2 className="text-uppercase">About Us</h2>
            <p className="text-muted">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit nulla, quam ut temporibus error placeat nobis reprehenderit rerum dignissimos iure eum dicta voluptatum non nemo quibusdam ipsam sapiente aliquid quo!
            </p>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae aspernatur iusto vitae veniam impedit possimus excepturi, tempore quia quo quis enim veritatis corrupti in omnis alias labore optio hic!
            </p>
            <a href="#" className="btn btn-primary mt-3">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
