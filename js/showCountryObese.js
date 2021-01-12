$(document).ready(function () {
                $("#idCountry").change(function () {
                    var countryID = $(this).val();
                    console.log(countryID);
                    $.ajax({
                        type: "GET",
                        url: "getCountryDetails.php",
                        data: "id=" + countryID,
                        cache: false,
                        dataType: "JSON",
                        success: function (response) {
                            console.log(response.population);
                            var message = "<thead></th><th>Population</th><th>obese</th></tr></thead>";
                            
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
            
  
