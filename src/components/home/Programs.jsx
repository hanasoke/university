const programs = [
  {
    icon: "bi-laptop",
    title: "Computer Science",
    desc: "Master cutting-edge technologies and AI."
  },
  {
    icon: "bi-briefcase",
    title: "Business Administration",
    desc: "Develop leadership skills for global success."
  },
  {
    icon: "bi-mortarboard",
    title: "Engineering",
    desc: "Innovate and build the future."
  }
]

export default function Programs() {
  return (
    <section id="programs" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Academic Programs</h2>
        </div>

        <div className="row g-4">
          {programs.map((p, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className="feature-card h-100 p-5 text-center rounded-4">
                <i className={`bi ${p.icon} display-4 text-primary mb-4 d-block`}></i>
                <h4 className="fw-bold">{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}