$(document).ready(function() {
    $("#button").click(function(){
     let city= $("#city").val();
     let url=`https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=${city}`
 
     let details=$(".details");
     let temp=$("#temp").val();

     $.ajax({
        url: url,
        method: "get",

        success: function(res){
            if(temp==1){
                 temp=res.current.temp_c
            }else if(temp==2){
                 temp=res.current.temp_f
            }
         console.log(res);
         details.html(`
         <p id="city-name" class="mr-3">City: ${res.location.name}</p>
         <p id="country-name">Country: ${res.location.country}</p>
         <p id="city-weather">Weather: <img src="${res.current.condition.icon}"> ${res.current.condition.text}</p>
         <p id="city-temp">Temperature: ${temp}</p>`)

        },
        error: function(error){
          console.log(error);
            details.html(`Please try again, incorrect input! Error status: ${error.status}`)
        }

     })
    })
  });


