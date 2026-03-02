const API_BASE_URL = "http://localhost:3000"

export async function fetchPrograms() {
  const res = await fetch(`${API_BASE_URL}/programs`)
  if (!res.ok) throw new Error("Failed to fetch programs")
  return res.json()
}

export async function fetchTestimonials() {
  const res = await fetch(`${API_BASE_URL}/testimonials`)
  if (!res.ok) throw new Error("Failed to fetch testimonials")
  return res.json()
}