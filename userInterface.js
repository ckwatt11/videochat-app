// Code for setting up the UI of the application. 

function initializeInterface(vidStream){

    // Initialize state logic for buttons w/ JQuery.

    buttons = ['#video-btn', '#screen-share-btn', '#mic-btn', '#exit-btn']; 

    for (btn in buttons){
        $(`${btn}`).prop("disabled", false);
    }



}