$(document).ready(function () {
                $("#idCountry").change(function () {
                    var countryID = $(this).val()
                    $.ajax({
                        type: "GET",
                        url: "getCountryDetails.php",
                        data: "id=" + countryID,
                        cache: false,
                        dataType: "JSON",
                        success: function (response) {
                            var message = "";
                            
                             message += "<tbody><tr><td>" + response.population + "</td><td>"
                                    + response.obese + "</td></tr></tbody>";
                            
//                            $(".studentid").html(response.student_id);
//                            $(".firstname").html(response.first_name);
//                            $(".lastname").html(response.last_name);
                            

                            $("#obeseTable").html(message);
                        },
                        error: function (obj, textStatus, errorThrown) {
                            console.log("Error " + textStatus + ": " + errorThrown);
                        }
                    });
                });
            });
            
  
