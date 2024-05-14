var jwt = require("jsonwebtoken");
const JWT_SECRET = "tanmaygain";

const fetchUser = (req, res, next) => {
  const token = req.header("awt-token");
  if (!token) {
    res.status(401).send({ error: "please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "please authenticate using a valid token" });
  }
};

module.exports = fetchUser;
