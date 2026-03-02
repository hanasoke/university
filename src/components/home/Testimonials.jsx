import profile1 from '../../assets/img/profile-1.jpg'
import profile2 from '../../assets/img/profile-2.jpg'

const testimonials = [
  {
    img: profile1,
    name: "Hanas Bayu Pratama",
    major: "Computer Science '25",
    text: "Prestige University transformed my career."
  },
  {
    img: profile2,
    name: "Ajeng Utami",
    major: "Business '24",
    text: "Best decision of my life."
  }
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-light">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {testimonials.map((t, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className="card testimonial-card p-4 shadow-sm h-100">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={t.img}
                    className="rounded-circle me-3"
                    width="60"
                    height="60"
                    alt={t.name}
                  />
                  <div>
                    <h6 className="fw-bold mb-0">{t.name}</h6>
                    <small className="text-muted">{t.major}</small>
                  </div>
                </div>
                <p>"{t.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}