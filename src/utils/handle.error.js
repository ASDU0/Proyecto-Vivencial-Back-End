const handleError = (res, text, status) => {
  res.status(status)
  res.send({ message: text })
}

module.exports = handleError;