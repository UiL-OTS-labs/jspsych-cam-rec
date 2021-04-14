/*
 * In this file the instructions are defined that are used throughout
 * the experiment.
 * Make sure when editing this file, the file is stored with
 * utf8 text encoding.
 */


// GENERIC TESTS/CHECKS

//screen 1
const GENERIC_CHECK = `
    <h3>Om te kunnen deelnemen aan het onderzoek is het volgende belangrijk:</h3>
    <br>
    <li>Voer het onderzoek uit op en laptop of desktop computer, <i>niet</i> op een telefoon of tablet.</li>
    <li>Zorg ervoor dat uw toetsenbord werkt.</li>
    <li>Zorg ervoor dat u een werkende muis of touchpad heeft.</li>
    <li>Zorg ervoor dat het geluid in uw browser werkt en dat uw volume aan staat.</li>
    <br>
    <br>
    <strong>Maximaliseer uw browserscherm voordat u verder gaat!</strong>
    <br>
    <br>
    <p>U krijgt eerst verschillende instructies. Pas als alles correct staat ingesteld, hoeft u uw kind 
    te betrekken bij het onderzoek. Er wordt u verteld wanneer u uw kind actief moet gaan betrekken bij 
    het onderzoek.
    <br>
    <br>
    Klik op ‘volgende’ als u aan de bovenstaande punten voldoet, en verder wilt gaan naar de 
    toestemmingsverklaring.</p>
    `;

const PERSONAL_CODE_PRE_TEXT = `
    <h2>Persoonlijke code</h2>
    <p>Voer hier uw persoonlijke code in die u heeft ontvangen in de mail.
    <br>
    <br>
    Het is belangrijk dat u dit correct invoert, zodat u ook achteraf kunt beslissen om toch niet mee te willen 
    doen aan het onderzoek, en uw webcam-opname verwijderd kan worden.</p>
    `;

const PERSONAL_CODE_TEXT = `
    <strong>Persoonlijke code:</strong> 
    `;

// const PERSONAL_CODE_CHOICE_HTML =`
//     <div class="survey">

//     <label for="personal_code">Persoonlijke code: </label>
//     <input type="text" id="personal_code" name="personal_code"
//         pattern="\p{L}+{1,314}$" placeholder="Dutch" required><span class="validity"></span>
//     <br>
//     <br>
//     </div>
//     `

const PERSONAL_CODE_CHOICE_HTML =`
    <div class="survey">

    <label for="personal_code">Persoonlijke code: </label>
    <input type="text" id="personal_code" name="personal_code"
        pattern="[a-zA-Z0-9]{8,8}" placeholder="a2c4e6g8" required><span class="validity"></span>
    <br>
    <br>
    </div>
    `

const PERSONAL_CODE_POST_TEXT = `
    Klik op ‘volgende’ als u aan de persoonlijke code correct heeft ingevuld, en verder wilt gaan naar de opstelling instructies.
    `;

// HTML plugin survey block: questions are in the HTML constant
let personal_code_multi_html_block = {
    type: 'survey-html-form',
    preamble: CONSENT_HTML_STYLE_UU + PERSONAL_CODE_PRE_TEXT,
    html: PERSONAL_CODE_CHOICE_HTML,
    on_finish: function(data){
        var personal_code_html_responses = data.responses;
        data.personal_code_response = personal_code_html_responses;
    }
};

const PRE_LAYOUT_MESSAGE =`
    <h3> Screen layout</h3>
    <br>
    <br>
    <p> Next, we'll check if the entire layout for the experiment will fit on your screen. 
    After clicking OK, you'll see a (3 rows by 5 column) table. 
    This table should be entirely visible in your browser window without scrolling. 
    If this is not possible, please visit this experiment using a different device (with a larger screen). 
    Note that in most browsers, you can use the key combinations <kbd>CTRL</kbd> + <kbd>-</kbd> and/or <kbd>CTRL</kbd>+
    <kbd>+</kbd> to make elements smaller (-) or larger(+), so don't give up too fast!</p>
    <br>
    <br>
    Click okay to proceed!</p>
    `
    
GRID_HTML_LAYOUT = `<div id="jspsych-vsl-grid-scene-dummy" css="display: none;">
    <table id="jspsych-vsl-grid-scene table" style="border-collapse: collapse; margin-left: auto; margin-right: auto;">
    <tr id="jspsych-vsl-grid-scene-table-row-0" css="height: 200px;">
    <td id="jspsych-vsl-grid-scene-table-0-0" style="padding: 20px 20px; border: 4px solid #555;">
    <div id="jspsych-vsl-grid-scene-table-cell-0-0" style="width: 200px; height: 200px;">
    </div></td><td id="jspsych-vsl-grid-scene-table-0-1" style="padding: 20px 20px; border: 4px solid #555;">
    <div id="jspsych-vsl-grid-scene-table-cell-0-1" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-0-2" style="padding: 20px 20px; border: 4px solid #555;">
    <div id="jspsych-vsl-grid-scene-table-cell-0-2" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-0-3" style="padding: 20px 20px; border: 4px solid #555;">
    <div id="jspsych-vsl-grid-scene-table-cell-0-3" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-0-4" style="padding: 20px 20px; border: 4px solid #555;">
    <div id="jspsych-vsl-grid-scene-table-cell-0-4" style="width: 200px; height: 200px;"></div></td></tr>
    <tr id="jspsych-vsl-grid-scene-table-row-1" css="height: 200px;">
    <td id="jspsych-vsl-grid-scene-table-1-0" style="padding: 20px 20px; border: 4px solid #555;">
    <div id="jspsych-vsl-grid-scene-table-cell-1-0" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-1-1" style="padding: 20px 20px; border: 4px solid #555;">
    <div id="jspsych-vsl-grid-scene-table-cell-1-1" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-1-2" style="padding: 20px 20px; border: 4px solid #555;">
    <div id="jspsych-vsl-grid-scene-table-cell-1-2" style="width: 200px; height: 200px;">
    <img src="./images/center.png" style="width: 200px; height: 200"></img></div></td>
    <td id="jspsych-vsl-grid-scene-table-1-3" style="padding: 20px 20px; border: 4px solid #555;">
    <div id="jspsych-vsl-grid-scene-table-cell-1-3" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-1-4" style="padding: 20px 20px; border: 4px solid #555;">
    <div id="jspsych-vsl-grid-scene-table-cell-1-4" style="width: 200px; height: 200px;"></div></td></tr>
    <tr id="jspsych-vsl-grid-scene-table-row-2" css="height: 200px;">
    <td id="jspsych-vsl-grid-scene-table-2-0" style="padding: 20px 20px; border: 4px solid #555;">
    <div id="jspsych-vsl-grid-scene-table-cell-2-0" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-2-1" style="padding: 20px 20px; border: 4px solid #555;">
    <div id="jspsych-vsl-grid-scene-table-cell-2-1" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-2-2" style="padding: 20px 20px; border: 4px solid #555;">
    <div id="jspsych-vsl-grid-scene-table-cell-2-2" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-2-3" style="padding: 20px 20px; border: 4px solid #555;">
    <div id="jspsych-vsl-grid-scene-table-cell-2-3" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-2-4" style="padding: 20px 20px; border: 4px solid #555;">
    <div id="jspsych-vsl-grid-scene-table-cell-2-4" style="width: 200px; height: 200px;">
    </div></td></tr></table></div>`
  
const PRE_REC_MESSAGE = `
    <h3> Thank you for having your child participating in this study!</h3>
    <br>
    <br>
    <p> Please click <a href="../../webrtc/index.html" target="_blank"> this link</a> in a new tab 
        and follow the instructions there. When you are done, please switch back to this tab and
        click okay to proceed!</p>
    `;

const PRE_REC_MESSAGE_CHECKBOX = `
    <h3> Thank you for having your child participating in this study!</h3>
    <br>
    <br>
    <p> Please click <a href="../../webrtc/index.html" target="_blank"> this link</a> in a new tab 
        and follow the instructions there. When you are done, please switch back to this tab. 
    </p>
    `;

const REC_STARTED_STATEMENT = `
    Yes, I have started the recording in the other tab.
    `;

const REC_REFERENCE_NAME = "recording";

const IF_REQUIRED_FEEDBACK_MESSAGE_REC = `
    You must check the box next to ' ${ REC_STARTED_STATEMENT } ' in order to proceed with the experiment.
    `;

const POST_REC_MESSAGE = "Thank you!"

const DEBRIEF_MESSAGE = `
    <h1>End of the experiment</h1>
    <br>
    <br>
    <h2>Thank you for participating!</h2>
    `;

const DEBRIEF_MESSAGE_DURATION = 3000;
