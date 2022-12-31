import './userInterface.js';
import { initializeInterface } from './userInterface.js';


/* Main Javascript logic for interacting with and handling the UI .*/

// All Agora SDK event listeners must be at the top level. 

//let appId = "";
//let 

let client = AgoraRTC.createClient({mode:'rtc', codec:"vp8"}); 
let remoteClient = ({mode: 'rtc', codec: "vp8"});
let chName = 'agora-video-chat';

let hostId = "";
let isScrSharing = false; 
 
var cameraResolution = '720p_2'; // quality of user's camera stream : 960 x 720 (?)
var screenResolution = '720p_2'; // quality of user's shared screen : 960  

var appId = "";
var channelId = 'ckwatt11-webchat';


let localTracks = {
    camera: {
        stream: {},
        id: ""
    },
    videoFeed: { // user's screen (shown to the rest of the chatroom)
        stream: {},
        id : ""
    }
    
};

let remoteTracks = {};

function initAndJoin(appId, tkn, channelName, uid){
    client.init(appId, function() {

        console.log("Agora Client Initialized!")
        joinRoom(chName, uid, tkn);
    }, function(err){
        console.log("Error: Agora client initialization unsuccessful: ", err);
    });
}    

function createFeed(userId){
    let room = AgoraRTC.createStream({ // by default, the host will have audio and video enabled, and screen (sharing) disabled
        streamID: userId,
        video: true,
        audio: true, 
        screen: false
    })

    room.setVideoProfile(cameraResolution);

    room.init(function(){
        room.play('host-video');
        console.log("Room established!");

        client.publish(room, function(err){
            console.log("Error. Couldn't create/join room! : ", err);
        });
        
        initializeInterface(room);
        localTracks.camera.stream = room; 

    }, function(err){
        console.log("Error: ", err)
    });

}


function joinRoom(uid, chnl, tkn){
    var tkn = genTkn();
    var uId = null;
    client.join(tkn, chnl, uid, function(uid){
        createFeed(uid);
        console.log(`${uid} has joined the Room!`)
        localTracks.camera.id = uid;
    }, function(err){
        console.log("Join Failed! :", err)
    }); 

}


function exitRoom(){

    client.leave(function() {
        console.log(`User ${uid} has left the Room.`);
    }, function(err){
        console.log("Could not leave room, ", err);
    });
    

}

function genTkn(){
    return null;
}