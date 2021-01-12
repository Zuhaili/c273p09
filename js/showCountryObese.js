$(document).ready(function () {
                $("#idCountry").change(function () {
                    var countryID = $(this).val()
                    $.ajax({
                        type: "GET",
                        url: "https://c273p09.azurewebsites.net/getCountryDetails.php",
                        data: "id=" + countryID,
                        cache: false,
                        dataType: "JSON",
                        success: function (response) {
                            $(".studentid").html(response.student_id);
                            $(".obeseTable").html(response.population);
                            $(".obese").html(response.obese);
                        },
                        error: function (obj, textStatus, errorThrown) {
                            console.log("Error " + textStatus + ": " + errorThrown);
                        }
                    });
                });
            });
