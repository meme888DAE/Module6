/* This is everything except but the pop ups alerts */

 var numberOfYears = 12; // interger
 var measurement = 13; // float
 var myName = "Ms. Taylor"; // string 

 console.log (365+1);
 console.log (numberOfYears);
 console.log (measurement);
 console.log ("My Name is " +myName);
 console.log (numberOfYears + "---"+ measurement );
 console.log (numberOfYears - measurement );
 console.log (numberOfYears / measurement );
 console.log (numberOfYears * measurement );

 // If Statements 

 if ( 2 > 4 ) {
    console.log ( "Yes, 4 is greater than 2, that condition is True");
 } else {
    console.log ("No, that condition is False" );
 }

 // Else if and Else Else Statements 

 var luckyNumber = 28;

 if (luckyNumber > 30 ) {
        console.log ("Yes, number is greater than 30");
 } else if ( luckyNumber < 30){
        console.log ( "No, number is not greater than 30");

 } else {
        console.log ("Something went wrong, the number is neither greater than 30 nor less than 30");
 }

 // More If Statements 

 var unluckyNumber = 15;

 if (unluckyNumber == 15) {
        console.log (" Unlucky Number is equal to 15 ");

 } else { 
        console.log ("Unlucky Number is not equal to 15");
 }

// logical operators
// AND Logical Operator 

var gateFee = 100;
var ageLimit = 18;
var userAge =17; 
var userMoney = 99; 

if (userAge >= ageLimit && userMoney >= gateFee){
        console.log( "You will be accepted at the party");

        } else { 
            console.log (" Unfortuantely, you can not be accepted at the party");
        }

// Or Logical Operator 

var luckyNumber = 25;
var userNumber = 980;

if ( userNumber < luckyNumber || userNumber > luckyNumber) {
        console.log ("You did not win this time");
} else {
        console.log (" Whoopy --You Won. Congratulations!!");
}

// Not Logical Operator 
var luckyNumber = 56;
var userNumber = 25;

if ( userNumber != luckyNumber){
        console.log ("You are not lucky, you did not win");
    
} else {
        console.log (" You Won!!");
}

// tracking something to see if or not is true - Not Logical Operator 

var Fast = false; 
    console.log (!fast);


    // Use of an Array - while & for  loops - put in # 1 so it does not run infinitly
    while (1 <1) {
        console.log ("This condition is still true");
    }

    var userNumber = 1;

    while (1 < 1){
        console.log ("Still true"); 
        userNumber =userNumber + 1;
    }

    var userNumber = 1; 

    while (userNumber <2){
        console.log (userNumber);
        userNumber = userNumber +1;
    }

    var startPoint;
    for( startPoint= 1; startPoint < 2; startPoint++){
        console.log("Current value of startPoint is " + startPoint);
    }
// continue example
 var startPoint;
    for ( startPoint= 1; startPoint < 3; startPoint++){
        if( startPoint ==5){
            continue;
        }
        console.log("Current value of startPoint is " + startPoint);
    }
    console.log("End of the entire");

  // break example
 var startPoint;
 for ( startPoint= 1; startPoint < 3; startPoint++){
     if( startPoint ==5){
         break;
     }
     console.log("Current value of startPoint is " + startPoint);
 }
 console.log("End of the entire");  

 // simple functions 

 function greet() {
        console.log ("Good morning");
    
 }

 // function with name 

 function greet( name ){
        console.log("Good morning" + name);
 }
 // calling the function 

 function greet( name ){
    console.log("Good morning" + name);
}
 greet("Mickey");
 greet( "Mouse");


 // functions that return information 

 function add( number1, number2) {
        var result = number1 +number2
        return result;
 }
 var answer = add (2, 3 );
    console.log (answer);

    // DOM 

    var mainContentDiv =document.getElementsById("mainContent")

    console.log("Node type:" +mainContentDiv.nodeType);
    console.log("Inner HTML:" +mainContentDiv.innerHTML);
    console.log("Child nodes:"+mainContentDiv.childNodes);

    // grabbing elements by tag name = Array ( list of different values)

    var allListItems = document.getElementsByTagName( "li");
    
        console.log (allListItems.childNodes);

    // tell us the inner html of the node which was grabbed 
    document.getElementById( "mainTitle")
        console.log(h2Node.innerHTML);

     // change elements and append 
     
      var newListItem = document.createElement("li");
      var entireUnorderedList =document.getElementById("mainSiteList");

      newListItem.innerHTML = "List 6";

    entireUnorderedList.appendChild( newListItem);
        console.log(entireUnorderedList.innerHTML)


        // creating a text node 

        var newListItem = document.createElement("li");
        var entireUnorderedList =document.getElementById("mainSiteList");
        var newListText = document.createTextNode("List item number 6");

        newListText.appendChild( newListText);

        entireUnorderedList.appendChild( newListItem);
        console.log(entireUnorderedList.innerHTML)

        