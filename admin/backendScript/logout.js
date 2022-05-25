$("#logout").click(function () {
  $.ajax({
    url: "dashboardBackend/logout.php",
    type: "get",
    dataType: "json",
    success: function (response) {
      console.log(response);
      if (response == "destroyed") {
        window.location.href = "index.html";
        sessionStorage.clear();
      }
    },
    error: function (request, data, error) {
      console.log(request);
    },
  });
});
