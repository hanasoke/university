import universityImg from '../../assets/img/university.jpg'

export default function CampusLive() {
    return(
    <section id="campus" class="section-padding position-relative overflow-hidden">
        <div class="container">
            <div class="row align-items-center g-5">
                <div class="col-lg-6">
                    <img src={universityImg} class="campus-img shadow-lg w-100" alt="Modern Campus" />
                </div>
                <div class="col-lg-6">
                    <h2 class="display-5 fw-bold mb-4">Campus Life</h2>
                    <div class="row g-4">
                        <div class="col-md-6">
                            <div class="d-flex align-items-start mb-4">
                                <i class="bi bi-building display-6 text-primary me-3 mt-1"></i>
                                <div>
                                    <h5 class="fw-bold">Modern Facilities</h5>
                                    <p>State-of-the-art labs, libraries, and sports complexes.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex align-items-start mb-4">
                                <i class="bi bi-people display-6 text-primary me-3 mt-1"></i>
                                <div>
                                    <h5 class="fw-bold">Student Community</h5>
                                    <p>200+ clubs, international exchange programs.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex align-items-start">
                                <i class="bi bi-calendar3 display-6 text-primary me-3 mt-1"></i>
                                <div>
                                    <h5 class="fw-bold">Events & Activities</h5>
                                    <p>Year-round cultural festivals and career fairs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}