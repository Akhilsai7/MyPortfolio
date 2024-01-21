$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('body,html').animate({
      scrollTop: $(hash).offset().top
      }, 1200, function(){
      window.location.hash = hash;
     });
     } 
    });
});

var width = $(window).width(); 

window.onscroll = function(){
if ((width >= 900)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#middle").css("background-size","150% auto");
    }else{
        $("#middle").css("background-size","100% auto");        
    }
}
};

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1450);

document.getElementById('downloadButton').addEventListener('click', function() {
  var resumeUrl = 'AkhilBResume.pdf'; // Replace with the actual path to your resume file
  var link = document.createElement('a');
  link.href = resumeUrl;
  link.download = 'AkhilBResume.pdf'; // Specify the desired filename for the downloaded file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

function viewPDF() {
        // Get the container where the PDF will be embedded
        var pdfContainer = document.getElementById("pdfContainer");

        // Create an embed element
        var embedElement = document.createElement("embed");

        // Set the attributes for the embed element
        embedElement.src = "AkhilBResume.pdf"; 
        embedElement.type = "application/pdf";
        embedElement.width = "100%";
        embedElement.height = "600px";

        // Append the embed element to the PDF container
        pdfContainer.innerHTML = ''; // Clear existing content
        pdfContainer.appendChild(embedElement);
    }
