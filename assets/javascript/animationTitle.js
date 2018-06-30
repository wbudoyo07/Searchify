console.log("animation title is working");

// our project name
var projectName=["N","A","M","E"];

$(document).ready(function(){
    //testing
    console.log(projectName.indexOf("N"));
    console.log(projectName[0]);
    console.log(projectName.length);

    //function that animation word from left side
    function animationFromLeft(){
        //iterate project name char
        for(i=0; i<projectName.length; i++){
            var newDiv= $("<div>");
            newDiv.attr("id","animationTitle-"+projectName[0]);
            // add class for animated fadeInLeftBig . we got this class from animation.css libary
            newDiv.addClass("animated fadeInLeftBig");
            newDiv.text(projectName[0] );
            $("#animationTitle").append(newDiv);

            //update the i by 1 so it will get the next character ex:N_M_
            i=i+1;
        }//end for


    }// end animationFromLeft

    //function that animation word from top side
    function animationFromTop(){
        // iterate the name . i  must be equal to 1  so it will start from index 1
        for(i=1;i<projectName.length; i++ ){
            var newDiv= $("<div>");
            newDiv.attr("id","animationTitle-"+projectName.charAt(i));
            newDiv.addClass("animated fadeInDownBig");
            newDiv.text(projectName.charAt(i));
            $("#animationTitle").append(newDiv);

            //update the i by 1 so it will get the next character ex: _A_E 
            i=i+1;

        }// end for

    }// end animationFromTop

    function animationLeft(){
        var newDiv=$("<div>");
        newDiv.attr("id","animationTitle-"+projectName[0]);
        newDiv.addClass("animated fadeInLeftBig");
        newDiv.text(projectName[0]);
        $("#animationTitle").append(newDiv);
        
    }
    // CALL FUNCTION
    // animationFromLeft();
    // animationFromTop();

    animationLeft();


})// end document.ready