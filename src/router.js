const handler = require("./handler");
const cookie = require("cookie");

const router = (request, response) => {
  const endpoint = request.url;
  let extension = endpoint.split(".")[1];

  const method = request.method;

  if (method === "GET") {
    if (endpoint === "/" || endpoint === "/index.html") {
      handler.homeHandler(response);
    } else if (endpoint === "/blog/posts/jamstack-conf-2019-recap.html") {
      response.writeHead(301, {
        Location: "/posts/jamstack-conf-2019-recap.html"
      });
      response.end();
    } else if (endpoint === "/blog/all-posts") {
      handler.allPostsHandler(request, response);
    } else if (endpoint === "/blog/posts") {
      handler.postsJSONHandler(response);
    } else if (endpoint === "/blog/recent-posts") {
      handler.recentPostsHandler(response);
    } else if (endpoint === "/blog/main-images") {
      handler.mainImagesHandler(response);
    } else if (endpoint === "/blog/comments") {
      console.log("xhr request working");
      handler.getCommentsHandler(request, response);
    } else if (endpoint === "/blog/author") {
      handler.getAuthorHandler(request, response, endpoint);
    } else if (endpoint.includes("/blog/tags?q=")) {
      console.log("Tag request reached the router");
      console.log("The request URL is: ", request.url);
      // return;
      handler.getTagsHandler(request, response);
    } else if (endpoint === "/blog/login") {
      // console.log("BOASTY", request.headers.referer)
      handler.loginPageHandler(response);
    } else if (endpoint === "/blog/logout") {
      handler.logoutHandler(response);
    } else if (endpoint === "/create/account") {
      handler.createAccountPageHandler(response);
    } else if (endpoint === "/blog/new") {
      handler.newPostHandler(request, response);
    } else if (endpoint === "/blog/image-manager") {
      handler.imageManagerPageHandler(request, response);
    } else if (endpoint === "/blog/check-login-status") {
      // let jwt = cookie.parse(request.headers.cookie).jwt;
      // if (jwt !== undefined) {
      // console.log("hai mark");
      // return;
      handler.checkLoginStatusHandler(request, response);
      // }
      // else {
      //   response.end("false")
      // }
    } else if (endpoint === "/projects") {
      handler.getProjectsHandler(request, response);
    } else if (endpoint === "/mangos") {
      handler.getMangosHandler(request, response);
    }
    // else if (endpoint.includes("/scripts")) {
    //   handler.domScriptsHandler(response, endpoint, extension);
    // }
    else if (endpoint.includes("/blog/confirm-email")) {
      // console.log("BOASTY", request.headers.referer)
      // console.log("PROGRESS!!!");
      // console.log(request.url);
      handler.confirmEmailHandler(request, endpoint, response);
    } else if (endpoint.includes("/sign-s3")) {
      console.log("AWS request reached the router");
      // console.log("BAM", request);
      // return;
      handler.awsSignatureHandler(request, endpoint, response);
    } else if (endpoint.includes("/posts/") && endpoint.includes(".html")) {
      console.log("Creating temp blog post file on local filesystem...");
      handler.specificPostHandler(request, response, endpoint);
      // console.log(request.headers.referer.split("/")[4])
      // console.log("BAM", request);
      // return;
      // handler.awsSignatureHandler(request, endpoint, response);
    }

    // else if (endpoint.includes("/meme8-640x360px.jpeg")) {
    //   console.log("WAHEY");
    //   return;
    // }
    else {
      // let extension;
      // if (endpoint.includes(".min.css")) {
      //   extension = endpoint.split(".")[2];
      //   console.log(extension, "here ya go");
      //   return;
      // } else {
      //   extension = endpoint.split(".")[1];
      // }
      handler.publicHandler(response, endpoint, extension);
    }
  }

  if (method === "POST") {
    if (endpoint === "/contact/send") {
      handler.contactFormHandler(request, response);
    } else if (endpoint === "/create/post") {
      let jwt = cookie.parse(request.headers.cookie).jwt;
      // console.log(request.url)
      // return;
      handler.createPostHandler(request, response, jwt);
    } else if (endpoint === "/create/image") {
      let jwt = cookie.parse(request.headers.cookie).jwt;
      // console.log(request.url)
      // return;
      handler.uploadImageHandler(request, response, jwt);
    } else if (endpoint === "/create/account") {
      handler.createAccountSubmitHandler(request, response);
    } else if (endpoint === "/blog/login") {
      // let evt = cookie.parse(request.headers.cookie).evt;
      handler.loginSubmitHandler(request, response);
    } else if (endpoint.includes("/create/comment")) {
      let jwt = cookie.parse(request.headers.cookie).jwt;
      handler.commentSubmitHandler(request, response, jwt);
      // console.log(response);
    }
  }
};

module.exports = router;
