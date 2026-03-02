import universityImg from '../assets/img/university.jpg'
// import profile1 from '../assets/img/profile-1.jpg'
// import profile2 from '../assets/img/profile-2.jpg'

export default function HomePage() {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3 text-dark" href="#">
            Prestige University
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="hero d-flex align-items-center text-white position-relative"
      >
        <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>

        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-3 fw-bold mb-4">
                Academic Excellence
              </h1>
              <p className="lead fs-4 mb-5">
                Join thousands of students shaping the future.
              </p>
            </div>

            <div className="col-lg-6">
              <img
                src={universityImg}
                className="img-fluid rounded-4 shadow-lg"
                alt="University Campus"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}