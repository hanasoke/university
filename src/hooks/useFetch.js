import { useEffect, useState } from "react"

export default function useFetch(fetchFn) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchFn()
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [fetchFn])

  return { data, loading, error }
}