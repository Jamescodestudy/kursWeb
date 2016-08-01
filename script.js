$(document).ready(function()
{
   $("#login").click(function(event)
   {
      event.preventDefault();
      var name = $("#name").val();
      var email = $("#email").val();
      var password = $("#password").val();
      $("#prawa").html(
         name + "<br>" + email + "<br>" + password
      );
   });

   // Animacja Strony
   $(".faceIn").hide().fadeIn(3000);

});
