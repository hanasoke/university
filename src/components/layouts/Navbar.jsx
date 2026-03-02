export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold fs-3 text-dark" href="#">
          Pocinui University
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {["Home", "Programs", "Campus", "Apply"].map(item => (
              <li className="nav-item" key={item}>
                <a className="nav-link" href={`#${item.toLowerCase()}`}>
                  {item}
                </a>
              </li>
            ))}
            <li className="nav-item ms-3">
              <a className="btn btn-outline-primary px-3" href="#apply">
                Enroll Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}