const handleError = (err, req, res, next) => {
  console.log(err.message);
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  res.status(status).send(message);
};

module.exports = handleError;
