import useFetch from "../../hooks/useFetch"
import { fetchTestimonials } from "../../services/api"

export default function Testimonials() {
  const { data: testimonials, loading, error } =
    useFetch(fetchTestimonials)

  if (loading) {
    return <p className="text-center py-5">Loading testimonials...</p>
  }

  if (error) {
    return <p className="text-danger text-center">{error}</p>
  }

  return (
    <section className="section-padding bg-light">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {testimonials.map(t => (
            <div className="col-lg-3 col-md-6" key={t.id}>
              <div className="card testimonial-card p-4 shadow-sm h-100">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={t.avatar}
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
                <p>"{t.message}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}