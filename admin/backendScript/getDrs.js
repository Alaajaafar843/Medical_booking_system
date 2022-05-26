$(document).ready(function () {
  let table = $("#tab");

  $.ajax({
    url: "dashboardBackend/getAll.php",
    type: "get",
    dataType: "json",
    data: {
      type: "Doctor",
    },
    success: function (response) {
      console.log(response);
      response.forEach((element) => {
        table.append(
          `<tr>
            <td>` +
            element.id +
            `</td>
            <td>${element.Fname}</td>
            <td>${element.speciality}</td>
            <td>${element.Email}</td>
            <td>
              <span>
                <i class="fa fa-trash" aria-hidden="true"></i>
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
