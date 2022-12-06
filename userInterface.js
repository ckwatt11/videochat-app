

// Code for setting up the UI of the application. 


// functions and event handlers for buttons and other controls. 

function toggleButton(button){{
    button.toggleClass('btn-dark').toggleClass('btn-danger'); // mainly for the (colors of) video and mic buttons. 
}

function toggleMicrophone(stream) {  //

}
    
}




function initializeInterface(stream){

    // Initialize state logic for buttons w/ JQuery.

    buttons = ['#video-btn', '#screen-share-btn', '#mic-btn', '#exit-btn']; 

    for (btn in buttons){
        $(`${btn}`).prop("disabled", false);
    }



}