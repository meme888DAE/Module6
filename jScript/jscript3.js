
document.getElementsByClassName ('className')

var paragraph = document.getElementById("theOnlyParagraph");//Events Handlers
paragraph.onclick = function(){ // anonymous function 
 alert ( "You recently clicked on the paragraph ");
};

 

  // Set Time Out - runs only once 
   function runSale(){
      alert ("Enter to Win Scholarship" );
  }
  setTimeout( runSale, 2000)

  // Set Interval 
  function runSale(){
      alert ("Enter to Win Scholarship " );
  
  }
  setInterval(runSale, 5000)
      