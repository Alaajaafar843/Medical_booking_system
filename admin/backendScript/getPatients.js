$(document).ready(function () {
  let listPateints = $("#lastPatients");
  $.ajax({
    url: "dashboardBackend/getAll.php",
    type: "get",
    dataType: "json",
    data: {
      limit: 5,
      type: "Patient",
    },
    success: function (response) {
      console.log(response);
      response.forEach((element) => {
        listPateints.append(
          `<li>
        ` +
            element.First_name +
            `
        <span>
          <a href="" onclick="del(${element.id} , 'Patient')">
            <i class="fa fa-trash" aria-hidden="true"></i>
          </a>
          <a href="Edit_dr.html?id=` +
            element.id +
            `">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </a>
        </span>
      </li>
      `
        );
      });
    },
    error: function (request, data, error) {
      console.log(request);
    },
  });
});
$(document).ready(function () {
  let listDrs = $("#listDoctors");
  $.ajax({
    url: "dashboardBackend/getAll.php",
    type: "get",
    dataType: "json",
    data: {
      limit: 5,
      type: "Doctor",
    },
    success: function (response) {
      console.log(response);
      response.forEach((element) => {
        listDrs.append(
          `<li>
        ` +
            element.Fname +
            `
        <span>
          <a href="" onclick="del(${element.id} , 'Doctor')">
            <i class="fa fa-trash" aria-hidden="true"></i>
          </a>
          <a href="Edit_dr.html?id=` +
            element.id +
            `">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </a>
        </span>
      </li>
      `
        );
      });
    },
    error: function (request, data, error) {
      console.log(request);
    },
  });
});

function del(id, type) {
  $.ajax({
    url: "dashboardBackend/delete.php",
    type: "post",
    dataType: "json",
    data: {
      id: id,
      type: type,
    },
    success: function (response) {
      console.log(response);
    },
    error: function (request, data, error) {
      console.log(request.responseText);
    },
  });
}
