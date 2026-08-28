import React from "react";
import "./Acknowledgment.css";

const Acknowledgement = () => {
  return (
    <section className="ack-container">
      {/* Heading */}
      <div className="heading-wrapper">
        <h1 className="main-heading">
          Acknowled<span className="heading-accent">gement</span>
        </h1>
        <div className="heading-underline"></div>
      </div>

      {/* Content Card */}
      <div className="content-card m-auto">
        {/* Appreciation Section */}
        <div className="section-wrapper">
          <div className="section-header">
            <div className="icon-wrapper">🙏</div>
            <h2 className="section-title">Expression of Gratitude</h2>
          </div>
          <p className="content-text">
            The development team would like to express sincere gratitude for the
            support and permission granted to implement this web application in
            a practical, real-world setting.
          </p>

          <p className="content-text">
            The encouragement and approval received played a vital role in
            enabling the successful deployment of this system and its adoption
            for broader use.
          </p>
          {/* <p className="content-text ">
            The developer team would like to express sincere gratitude to
            Department committee, for the support and granting permission to
            implement this web application on a practical basis within the
            department.
          </p>

          <p className="content-text">
            The encouragement and approval provided by the present Head of the
            Department played a vital role in enabling the real-world deployment
            of this system and its adoption for departmental use.
          </p> */}
        </div>

        {/* Contribution Section */}
        {/* <div className="section-wrapper">
          <div className="section-header">
            <div className="icon-wrapper">⚙️</div>
            <h2 className="section-title">Departmental Impact</h2>
          </div>

          <p className="content-text">
            The web application facilitates smooth and efficient booking of
            departmental equipment by clearly displaying slot availability,
            equipment functional status, and notification alerts to avoid
            unnecessary delays.
          </p>

          <p className="content-text">
            Previously, students were required to obtain physical signatures
            from their guides, which was a time-consuming process. This workflow
            has now been automated, making the process faster, paperless, and
            technically efficient.
          </p>
        </div> */}

        {/* Benefits Section */}
        {/* <div className="section-wrapper">
          <div className="section-header">
            <div className="icon-wrapper">🌱</div>
            <h2 className="section-title">Outcome & Benefits</h2>
          </div>

          <div className="benefits-grid">
            <div className="benefit-item">
              <span className="benefit-icon">📄</span>
              <span className="benefit-text">Reduces Paper Usage</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">⏳</span>
              <span className="benefit-text">Eliminates Delays</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🔔</span>
              <span className="benefit-text">Improves Transparency</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">💻</span>
              <span className="benefit-text">Enhances Technical Efficiency</span>
            </div>
          </div>
        </div> */}

        {/* Closing Note */}
        <div className="quote-section">
          <div className="quote-mark">"</div>
          <blockquote className="inspirational-quote">
            Technology is best when it brings people together and simplifies
            processes
          </blockquote>
          <cite className="quote-author"> — Matt Mullenweg</cite>
        </div>
      </div>
    </section>
  );
};

export default Acknowledgement;
