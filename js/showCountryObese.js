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
                            var message = "<thead></th><th>Population</th><th>obese</th></tr></thead>";
                            
                             message += "<tbody><tr><td>" + response.population + "</td><td>"
                                    + response.obese + "</td></tr></tbody>";
                            

                            $("#obeseTable").html(message);
                        },
                        error: function (obj, textStatus, errorThrown) {
                            console.log("Error " + textStatus + ": " + errorThrown);
                        }
                    });
                });
            });
            
  
