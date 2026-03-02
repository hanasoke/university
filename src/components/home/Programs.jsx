import useFetch from "../../hooks/useFetch"
import { fetchPrograms } from "../../services/api"

export default function Programs() {
  const { data: programs, loading, error } = useFetch(fetchPrograms)

  if (loading) {
    return <p className="text-center py-5">Loading programs...</p>
  }

  if (error) {
    return <p className="text-danger text-center">{error}</p>
  }

  return (
    <section id="programs" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Academic Programs</h2>
        </div>

        <div className="row g-4">
          {programs.map(program => (
            <div className="col-lg-4 col-md-6" key={program.id}>
              <div className="feature-card h-100 p-5 text-center rounded-4">
                <i
                  className={`bi ${program.icon} display-4 text-primary mb-4 d-block`}
                ></i>
                <h4 className="fw-bold">{program.title}</h4>
                <p>{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}