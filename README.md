# jspsych-cam-rec
Online Baby Observation Experiment using [jsPysch](httpL//www.jspsych.org and customised [WebRTC]https://webrtc.org/) video tools

# Goals
This project aims to bring baby behavior observation (and scoring) to the web.  
This project contains several folders and many files:

- Folder `jspsych` contains a [jsPsych](https://www.jspsych.org) web experiment with sparse stimuli.
- Folder `webrtc` contains basic code for streaming video.
- Folder `osweb` contains preliminary (R&D )exports for the experiment, as made with OpenSesame.

## webRTC (video)
In fact, the code in the folder started out as just a copy from this example:
https://github.com/webrtc/samples/tree/gh-pages/src/content/getusermedia/record/js

# Development status, relations and scope
- [This how-to](https://uilots-labs.wp.hum.uu.nl/how-to/online-experimenting/) describes the basic flow for creating a web experiment with jsPsych, given UiL OTS affiliation and the use of our custom jsPsych experiment _Data Store_.
- The following [general template/boilerplate documentation](https://github.com/UiL-OTS-labs/jspsych-uil-template-docs) may also be of help to get a sense of how UiL OTS developers have chosen to organise code/functionality in a _modular_ way. 
  - Note that at this time, we do not (as of yet) have a standard 'template' or 'boilerplate' for the experimental task. In fact, this codebase's folder 'jspsych' may evolve to become a 'template' experiment for presenting (sparse, moving/static) stimuli, and the related [stream recorder](https://github.com/UiL-OTS-labs/streamupload/) will probably evolve as a robust complementary application to be able to score (infant) behavior.
  - Due to this heavy development and the additional complexity, the above mentioned 'UiL OTS how-to' for conducting web experiments will _not_ be identical for this repository. For instance: simply running the experiment locally by double-clicking the index.html file will probably not work, due to how many browsers deal with allowing to load and serve files from your PC/laptop without a web server and/or mixing http/https protocols. In short: you either need help from our technicial staff (or maybe a web-development-savvy friend can help you out to some extent), or you will need to invest quite a bit of time in things like using a local web server, general web-development & programming practices and learning to the 'terminal' (command line).
  - Some custom jsPsych-tools (like the [UiL Utililty library](https://github.com/UiL-OTS-labs/jspsych-uil-utils)) are developed and versioned/updated at shared location(s) in our data store. So, there's quite a lot of interdependency and possible source of error. Please be _very aware_ of this!
 
## Mimimal case for adapting/testing integrated functionality: Python development webserver (local development) 
While piloting and adapting things from this current combination of experiment and video streaming example, you will need some sort of local web-server to test things. This [python http server](https://pythonbasics.org/webserver/) example may be of help. You will have to know or learn some other things, like how to use the terminal. Note that, by default, the python http server binds to `http://0.0.0.0:8000`, but some browsers don't allow http (vs https), unless it is served from 'localhost' (127.0.0.1), so for developers, while testing locally, use this command to serve the experiment:
```
python3 -m http.server -b localhost 
```
Otherwise, you'll get _at least_ an error from `navigator.mediaDevices` when using the stream recorder's fucntionality (in folder webRTC -- and referenced in the jsPsych experiment's pages that deal with the video recording).

## Binary data upload application
See related project: [streamupload](https://github.com/UiL-OTS-labs/streamupload/)

A proof of concept webcam video uploader is included in `/WebRTC/`. It communicates with `gw-c-lab-web-binary-data-tst.im.hum.uu.nl` to retrieve experiment _tokens_ and upload binary (video) data. Experiment tokens are semi-secret keys embedded in the experiment which serve two purposes:

1. They act as a security measure to prevent anyone from dumping massive files on the binary data store.
2. They categorize the data allowing researchers to find recordings of participants from a certain study and condition.

A token has to be created manually and should be both descriptive and hard to guess. For example: `2021-Phonemes-control-ue5Ubi`, which tells us which experiment and condition we're dealing with without making it trivial to figure out. They shouldn't have to ever be typed by hand, so random strings are fine.

In the default `/WebRTC/index.html`, there is a input field to paste a token into during testing. But when running a finalized experiment, the input field can be changed to a hidden field easily by experimenters to eliminate this step. See `index_hidden_token.html` for such a template (remember to change the token manually: `change_token_here`).

Tokens can be made by only some people of the UiL-OTS lab staff. Get in touch using the UiL OTS lab website if you would like to run a pilot. We recommend using one token per experimental condition, but using one token per participant or per experiment as a whole is also possible.

# Links

## Media API
https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia

## Sound library
https://www.luftrum.com/free-field-recordings/
