import $ from "jquery";
const Api = (url) => {
  $.ajax({
    headers: { "X-Auth-Token": "9b74c6594b444d4ebb334429755f6613" },
    url: url,
    dataType: "json",
    type: "GET",
  }).done(function (response) {
    // do something with the response, e.g. isolate the id of a linked resource
  });
};

export default Api;
