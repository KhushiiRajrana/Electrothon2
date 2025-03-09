import "../styles/Home.css"

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to NGONexus</h1>
        <p>Connecting NGOs and volunteers for a better world</p>
        <div className="cta-buttons">
          <button className="cta-button primary">Get Started</button>
          <button className="cta-button secondary">Learn More</button>
        </div>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <div className="feature-icon">
            <i className="icon-connect"></i>
          </div>
          <h3>Connect</h3>
          <p>Find NGOs that match your interests and skills</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <i className="icon-volunteer"></i>
          </div>
          <h3>Volunteer</h3>
          <p>Contribute your time and skills to meaningful causes</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <i className="icon-impact"></i>
          </div>
          <h3>Make an Impact</h3>
          <p>See the difference your contributions make</p>
        </div>
      </div>
    </div>
  )
}

export default Home

