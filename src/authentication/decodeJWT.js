const jwt = require("jsonwebtoken");
require("env2")("./config.env");

const decodeJSONWebToken = (token) => {
  console.log("NO 1")
  return new Promise((resolve, reject) => {

    const secret = process.env.SECRET;
    const decodedToken = jwt.verify(token, secret);

    resolve(decodedToken.user_id)

//     (err, token) => {
//       if (err) {
//         reject(err);
//       }
//       else {
//     resolve(token.user_id);
//   }
// }

  }
)

// callback(comment, post_id, userID);
}

module.exports = decodeJSONWebToken;