$(document).ready(function () {
  let table = $("#tab");

  $.ajax({
    url: "dashboardBackend/getAll.php",
    type: "get",
    dataType: "json",
    data: {
      type: "Patient",
    },
    success: function (response) {
      console.log(response);
      response.forEach((element) => {
        table.append(
          `<tr>
          <td>` +
            element.id +
            `</td>
          <td>${element.First_name}</td>
          <td>${element.Email}</td>
          <td>${element.dob}</td>
          <td>
            <span>
             <a href="" onclick="del(${element.id} , 'Patient')">
              <i class="fa fa-trash" aria-hidden="true"></i>
             </a>
            </span>
            <span>
              <i class="fa fa-bars" aria-hidden="true"></i>
            </span>
            <span>
              <a href="">
                <i class="fa fa-power-off" aria-hidden="true"></i>
              </a>
            </span>
          </td>
        </tr>`
        );
      });
    },
    error: function (request, data, error) {
      console.log(request.responseText);
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
