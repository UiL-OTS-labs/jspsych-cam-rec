# jspsych-cam-rec
Baby observation experiment development

# Goals
The ManyBabiesOnline project aims to bring baby behavior observation (and scoring) to the web.  
This project contains several folders and files:

- 'jspsych' contains a jsPsych web experiment
- 'webRTC' contains basic code for streaming video
- 'osweb' contains preliminary R&D exports for the experiment, made with OpenSesame. This is basically for safekeeping, the experiment will eventually run using jspsych code. 


## Preliminary links

https://dev.to/dalalrohit/live-stream-your-webcam-to-html-page-3ehf

https://webmobtuts.com/javascript/accessing-webcam-with-javascript-getusermedia/

https://medium.com/swlh/how-to-access-webcam-and-take-picture-with-javascript-b9116a983d78

## webRTC 
https://github.com/webrtc/samples/tree/gh-pages/src/content/getusermedia/record/js

## OBSninja
https://github.com/steveseguin/obsninja

## Start python dev webserver (local development)

By default, this python http servers binds to 0.0.0.0:8000, but some browsers don't allow http (vs https), unless it is served from 'localhost' (127.0.0.1), so for developers, while testing things, use this command:
```
python3 -m http.server -b localhost 
```
Otherwise, you'll get an error from  navigator.mediaDevices when using the streamgrabber/cam recorder page (in folder webRTC).

# Other

## Front/rear?
https://www.digitalocean.com/community/tutorials/front-and-rear-camera-access-with-javascripts-getusermedia

## API
https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia

## Let op HTTPS!
https://stackoverflow.com/questions/60957829/navigator-mediadevices-is-undefined

