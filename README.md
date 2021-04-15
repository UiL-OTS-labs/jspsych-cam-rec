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

## Binary data upload

A proof of concept webcam video uploader is included in `/WebRTC/`. It communicates with `gw-c-lab-web-binary-data-tst.im.hum.uu.nl` to retrieve experiment tokens and upload binary data. Experiment tokens are semi-secret keys embedded in the experiment which serve two purposes:

1. They act as a security measure to prevent anyone from dumping massive files on the binary data store.
2. They categorize the data allowing researchers to find recordings of participants from a certain study and condition.

A token has to be created manually and should be both descriptive and hard to guess. For example: `2021-Phonemes-control-ue5Ubi`, which tells us which experiment and condition we're dealing with without making it trivial to figure out. They shouldn't have to ever be typed by hand, so random strings are fine.

By default, there is a input field to paste a token into during testing. But when running a finalized experiment, the input field can be changed to a hidden field easily by experimenters to eliminate this step. See for `index_hidden_input.html` for such a template (remember to change the token manually).

Tokens can be made by J. van Elst and M. Villeneuve at the UiL-OTS labs, contact one of them if you would like to run a pilot.

# Other

## Front/rear?
https://www.digitalocean.com/community/tutorials/front-and-rear-camera-access-with-javascripts-getusermedia

## API
https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia

## Let op HTTPS!
https://stackoverflow.com/questions/60957829/navigator-mediadevices-is-undefined

