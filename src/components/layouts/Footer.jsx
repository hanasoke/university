export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div class="container">
        <div class="row">
            <div class="col-lg-4 mb-4">
                <h5 class="fw-bold mb-3">Pocinui University</h5>
                <p>Shaping tomorrow's leaders through academic excellence and innovation.</p>
            </div>
            <div class="col-lg-2 col-md-6 mb-4">
                <h6 class="fw-bold mb-3">Programs</h6>
                <ul class="list-unstyled">
                    <li><a href="#" class="text-white-50 text-decoration-none">Undergraduate</a></li>
                    <li><a href="#" class="text-white-50 text-decoration-none">Graduate</a></li>
                    <li><a href="#" class="text-white-50 text-decoration-none">Online</a></li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-6 mb-4">
                <h6 class="fw-bold mb-3">Campus</h6>
                <ul class="list-unstyled">
                    <li><a href="#" class="text-white-50 text-decoration-none">Life</a></li>
                    <li><a href="#" class="text-white-50 text-decoration-none">Facilities</a></li>
                    <li><a href="#" class="text-white-50 text-decoration-none">Visit</a></li>
                </ul>
            </div>
            <div class="col-lg-4 mb-4">
                <h6 class="fw-bold mb-3">Contact</h6>
                <p><i class="bi bi-telephone me-2"></i>+62 858-1953-6158</p>
                <p><i class="bi bi-envelope me-2"></i>info@pocinui.ac.id</p>
            </div>
        </div>
        <hr class="my-4" />
        <div class="text-center">
            <p>&copy; 2026 Pocinui University. All rights reserved.</p>
        </div>
    </div>
    </footer>
  )
}