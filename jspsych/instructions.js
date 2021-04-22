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
    button_label: NEXT_BUTTON_TEXT,
    html: PERSONAL_CODE_CHOICE_HTML,
    on_finish: function(data){
        var personal_code_html_responses = data.responses;
        data.personal_code_response = personal_code_html_responses;
    }
};

//audio test

let test_audio_looped = {
    post_trial_gap: DEFAULT_ITI,
    timeline:
        [
            {
                type: 'audio-button-response',
                stimulus: './sounds/testtune.mp3',
                choices: [PLAY_AGAIN_BUTTON_TEXT, NEXT_BUTTON_TEXT],
                prompt: function(){
                    return "<div class='instruction' >" + 
                    '<img src="./images/speakersound.png" style="width: 100px; height: 100"></img>' +
                    '<p>' + AUDIO_CHECK_PROMPT_TEXT_LOOP + '</p></div>'
                }
            }
        ],
    loop_function: function(data){
        if (data.values()[0].button_pressed == 0){
            return true; // loop again!
        } else {
            return false; // continue
        }
    },
    on_finish: function(data) {
        data.audio_checked = true;
    }
};

const CAREGIVER_INSTRUCTION_PRE_IMAGE_MESSAGE = `
    <h3>Idealiter ziet de opstelling van uw laptop of computer er uit zoals op deze afbeeldingen.</h3>
    `

const CAREGIVER_INSTRUCTION_POST_IMAGE_MESSAGE = `
    <ul class="bullet-closed">
    <li>De kinderstoel staat op ongeveer een (volwassen) armlengte afstand van het scherm, zodat er
        ongeveer <strong>60 centimeter</strong> tussen uw kind en het scherm zit.</li> 
    <li>De <i>webcam</i> is <strong>bovenin, in het midden van het scherm</strong> geplaatst.</li>
    <li>De webcam is gericht op <strong>hoofdhoogte</strong> van uw kind. Indien uw kind hoger zit, plaats dan 
        bijvoorbeeld enkele boeken onder de laptop, zodat de laptop op hoofdhoogte van uw kind staat.</li> 
    <li>Er is <strong>voldoende (dag)licht</strong> in de omgeving zodat de ogen van uw kind goed zichtbaar zijn.
    <ul class"bullet-open">
        <li>Indien dit <i>niet</i> het geval is, plaatst u een <strong>lamp hoog achter het scherm</strong>, zodat 
        er <strong>geen schaduw</strong> van uw scherm op het gezicht van uw kind valt.</li>
    </ul>
    </li>
    <li>Zorg ervoor dat er niet te veel licht <i>achter</i> uw kind vandaan komt, om <strong>tegenlicht te voorkomen</strong>. 
        Zet de kinderstoel dus idealiter niet voor een raam.</li>
    <li>Zorg voor zo <strong>min mogelijk afleiding</strong>.</li>
    <li>Zet <i>telefoon, tv, radio</i>, en <strong>alle andere apparatuur die kan storen</strong> <i>uit of op stil</i>, zodat
        er gedurende het onderzoek <i>zo min mogelijk</i> auditieve of visuele <i>afleiding</i> is in de omgeving.</li> 
    <li>Blijf <strong>achter uw kind</strong> staan of zitten en <i>kijk naar beneden</i> gedurende het onderzoek.
    <ul class="bullet-open">
        <li>Om het kijkgedrag van uw kind niet te beïnvloeden is het van belang dat u achter uw kind 
            blijft, zodat uw kind maximale aandacht heeft voor het scherm en niet wordt afgeleid.</li>
        <li>Tevens vragen wij van u om naar beneden te kijken (zodat u niet naar het scherm kijkt), 
            <i>niet te praten over het scherm of wat u hoort, en niet te wijzen</i> naar het scherm.</li>
    </ul>
    </li>
    </ul>
`;

const CAREGIVER_INSTRUCTION_SOOTHING = `<h2>Wanneer te stoppen?</h2>
    Als uw kind erg afgeleid is kunt u uw kind geruststellen. Let wel op dat u niet met uw kind praat over of wijst naar 
    het scherm. Als uw kind niet gerust te stellen is op een dergelijke wijze, dan kunt u het onderzoek stoppen.
    `;

const CAREGIVER_VALIDATE_SETUP_STATEMENT = `
    <strong>Ik heb de aanwijzingen over de opstelling zo goed mogelijk opgevolgd en begrijp wat er van mij verwacht wordt
     tijdens het onderzoek.</strong>
     `;

const SETUP_REFERENCE_NAME = "setup";

const IF_REQUIRED_FEEDBACK_MESSAGE_SETUP = `
    Vink het vakje naast ' ${ CAREGIVER_VALIDATE_SETUP_STATEMENT } ' aan om door te gaan.
    `;

const AUDIO_CHECK_PROMPT_TEXT_LOOP = `
    Pas het test-geluid aan naar een volume die voor u en uw kind prettig is. U kunt het test-geluid opnieuw afspelen indien gewenst.
    <br>
    <br>
    Klik op ‘Volgende’ als uw geluid op een prettig volume staat, en u verder wilt gaan naar de lay-out van het scherm.
    `;

const PRE_LAYOUT_MESSAGE =`
    <h3> Scherm layout</h3>
    <br>
    <br>
    <p> Het is belangrijk dat het <i>hele onderzoek vanaf nu op uw scherm past</i>. Daarom ziet u nadat u op ‘Oké’ klikt een tabel van 
    <i>drie (3) rijen</i> en <i>vijf (5) kolommen</i>. 
    <ul>
    <li>De hele tabel moet -- liefst <i> zo groot mogelijk passend</i> --zichtbaar zijn in uw browser scherm zonder dat u hoeft 
    te scrollen.</li>
    <li>Indien dit niet mogelijk is, zoom dan voldoende uit totdat de tabel scherm-vullend zichtbaar is.</li> 
    <li>Dit 'zoomen' kunt u doen door de <kbd>CTRL</kbd> toets ingedrukt te houden <sub>(Mac OSX gebruikers gebruiken de <kbd>CMD</kbd> 
    toets!)</sub> en vervolgens op de plus (<kbd>+</kbd>) of min (<kbd>-</kbd>) toets te drukken op uw toetsenbord, óf door de 
    <kbd>CTRL</kbd>/<kbd>CMD</kbd> toets ingedrukt te houden en te scrollen met uw muis.</li>
    </ul> 
    <br>
    <br>
    Mocht het toch <i>niet mogelijk</i> zijn, gebruik dan een ander apparaat met een groter scherm.
    <br>
    <br> 
    Klik op ‘Oké’ om de tabel te tonen.</p>
    `;
    
const GRID_HTML_LAYOUT = `<div id="jspsych-vsl-grid-scene-dummy" css="display: none;">
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
    </div></td></tr></table></div>
    `;
  
const PRE_REC_MESSAGE = `
    <h3> Thank you for having your child participating in this study!</h3>
    <br>
    <br>
    <p> Please click <a href="../../webrtc/index.html" target="_blank"> this link</a> in a new tab 
        and follow the instructions there. When you are done, please switch back to this tab and
        click okay to proceed!</p>
    `;

const PRE_REC_MESSAGE_CHECKBOX = `
    Om de webcam-opname te starten klikt op onderstaand link. Er wordt vervolgens een nieuw tabblad geopend, waarop u uw webcam kan activeren. 
    <br>
    <br>
    <strong>Belangrijk</strong>: 
    <ul>
    <li>Test hier of uw webcam werkt en of er voldoende licht is.</li> 
    <li>Maak aanpassingen indien nodig.</li> 
    <li>Zet vervolgens uw kind in de kinderstoel, richt de webcam of het scherm zo dat het gezicht van uw kind zichtbaar is.</li>
    </ul>
    Indien dit is gelukt kunt u de webcam-opname starten.
    <br>
    <br>
    Nadat u uw webcam-opname heeft gestart laat u het webcam-tabblad open staan en klikt u op het huidige tabblad, om terug te komen op deze pagina (uw webcam-opname blijft dus op de achtergrond doorlopen, sluit geen van beide tabbladen!)

    <p> Klik <a href="../webrtc/index.html" target="_blank"> deze link </a>
        voor de nieuwe tab met de webcam-opname. 
    </p>
    `;

const REC_STARTED_STATEMENT = `
        Ik heb de webcam-opname gestart.
    `;

const REC_REFERENCE_NAME = "recording";

const IF_REQUIRED_FEEDBACK_MESSAGE_REC = `
    You must check the box next to ' ${ REC_STARTED_STATEMENT } ' in order to proceed with the experiment.
    `;

const POST_REC_MESSAGE = "Dank u wel voor uw deelname!"

const DEBRIEF_MESSAGE = `
    <h1>End of the experiment</h1>
    <br>
    <br>
    <h2>Thank you for participating!</h2>
    `;

const DEBRIEF_MESSAGE_DURATION = 3000;
