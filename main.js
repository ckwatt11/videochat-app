/* Main Javascript logic for interacting with and handling the UI .*/

// All Agora SDK event listeners must be at the top level. 


let client = AgoraRTC.createClient({mode:'rtc', codec:"vp8"}); 
let remoteClient = ({mode: 'rtc', codec: "vp8"});

let hostId = "";
let isScrSharing = false; 
 
var cameraResolution = '600_4'; // quality of user's camera stream : 800 x 600 (?)
var screenResolution = '600_2'; // quality of other streams on user's screen 

var appId = "";
var channelId = 'ckwatt11-webchat';

let localTracks = {};
