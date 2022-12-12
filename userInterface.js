

// Code for setting up the UI of the application. 


// functions and event handlers for buttons and other controls. 

function toggleButtonColor(button){
    if (button.hasClass('fa-desktop')){ // if it's a screen share button
        button.toggleClass('btn-danger');
        $('screen-share-icon').toggleClass('fa-share-square').toggleClass('fa-times-circle')
    }
    else{
        button.toggleClass('btn-dark').toggleClass('btn-danger'); // mainly for the video and mic buttons. 
    }
}

function toggleCamera(stream){

    

}

function toggleMicrophone(stream) {  //

}

functiio 
    





export function initializeInterface(stream){

    // Initialize state logic for buttons w/ JQuery.

    buttons = ['#video-btn', '#screen-share-btn', '#mic-btn', '#exit-btn']; 

    for (btn in buttons){
        $(`'${btn}'`).prop("disabled", false);
    }



}