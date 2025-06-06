const handleFilterChange = (setSearchParams, key, value) => {
  setSearchParams(prevParams => {
    const current = prevParams.get(key)?.split(',') || []

    const updated = current.includes(value)
      ? current.filter(v => v !== value) // remove if already selected
      : [...current, value] // add if not selected

    if (updated.length === 0) {
      prevParams.delete(key)
    } else {
      prevParams.set(key, updated.join(','))
    }

    return prevParams
  })
}

export default handleFilterChange