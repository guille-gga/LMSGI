const getCV = async () => {
  const resp = await fetch('cv.json')
  const data = await resp.json()
  return data
}
const cv = await getCV()