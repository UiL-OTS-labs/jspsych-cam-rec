/*
 * In this file the instructions are defined that are used throughout
 * the experiment.
 * Make sure when editing this file, the file is stored with
 * utf8 text encoding.
 */


// GENERIC TESTS/CHECKS
const GENERIC_CHECK = `
    <h3>In order to participate, please make sure that you:</h3>
    <br>
    <ul>
    <li>Run this on a Laptop or Desktop computer, <b>not</b> on a phone or a tablet!</li>
    <li>Have a <b>real keyboard</b> working.</li><li>Have a <b>mouse</b> and/or 
    <b>trackpad</b> that works.</li>
    <li>Have your browser's audio enabled and your volume on.</li>
    </ul>
    <h3>Please <i>maximize</i> your browser window before you continue!</h3>
    <br>
    <p>Click below if you are ready to proceed</p>
    `;
    
const PRE_REC_MESSAGE =`
    <h3> Thank you for having your child participating in this study!</h3>
    <br>
    <br>
    <p> Please click <a href="../webrtc/index.html" target="_blank"> this link</a> in a new tab 
        and follow the instructions there. When you are done, please switch back to this tab and
        click okay to proceed!</p>
    `


const POST_REC_MESSAGE =
    "Thank you!"

const DEBRIEF_MESSAGE = `
    <h1>End of the experiment</h1>
    <br>
    <br>
    <h2>Thank you for participating!</h2>
    `;

const DEBRIEF_MESSAGE_DURATION = 3000;
