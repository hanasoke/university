const stats = [
  { value: "50K+", label: "Students" },
  { value: "200+", label: "Programs" },
  { value: "95%", label: "Employability" },
  { value: "100+", label: "Awards" },
]

export default function Stats() {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row text-center g-4">
          {stats.map((item, i) => (
            <div className="col-md-3 col-6" key={i}>
              <div className="stats-card text-white p-4 rounded-4">
                <div className="display-1 fw-bold mb-2">
                  {item.value}
                </div>
                <div className="h5 fw-bold">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}