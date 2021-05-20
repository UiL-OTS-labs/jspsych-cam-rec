/*
 * In this file the instructions are defined that are used throughout
 * the experiment.
 * Make sure when editing this file, the file is stored with
 * utf8 text encoding.
 */

const BORDER_LIST_STYLE = `
    <style>
    ol{
        display:inline-block;
        border:1px solid #000;
        padding:20px;
    }
    </style>
    `;

// screen 1
const GENERIC_CHECK = `
    <h3>Om te kunnen deelnemen aan het onderzoek is het volgende belangrijk:</h3>

    <ol type="1">
        <li>Voer het onderzoek uit op een <strong>laptop</strong> of <strong>desktop computer</strong>, <i>niet</i> op een telefoon of tablet.</li>
        <li>Zorg ervoor dat uw <strong>toetsenbord</strong> werkt.</li>
        <li>Zorg ervoor dat u een werkende <strong>muis</strong> of touchpad heeft.</li>
        <li>Zorg ervoor dat het <strong>geluid</strong> in uw browser werkt en dat uw volume aan staat.</li>
        <li>Gebruik een beveiligd <strong>thuis</strong> (wifi) <strong>netwerk</strong>.</li>
    </ol>

    <h3>Maximaliseer uw browserscherm voordat u verder gaat!</h3>
    U krijgt eerst <strong>instructies</strong> hoe één en ander klaargezet moet en ingesteld moet worden. Pas <stronng>als alles klaar staat</strong> krijgt u het <strong>verzoek</strong> om uw <strong>kind voor het scherm te plaatsen</strong>. 
    <br>
    <br>
    Klik op 'volgende' als u aan de bovenstaande punten voldoet, en verder wilt gaan naar de toestemmingsverklaring.
    `;

//screen 5
const PERSONAL_CODE_PRE_TEXT = `
    <h2>Persoonlijke code</h2>
    <p>Voer hier uw persoonlijke code in die u heeft ontvangen in de mail.
    <br>
    <br>
    Het is belangrijk dat u de persoonlijke code <strong>correct</strong> invoert, zodat u ook achteraf kunt beslissen om toch niet mee te doen aan het onderzoek.
    <br>
    <br>
    Alleen met een correcte persoonlijke code kunnen wij uw webcam-opname op uw verzoek verwijderen. <strong>Bewaar</strong> uw persoonlijke code dus goed <strong>*</strong>.
    </p>
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
    * <sub>Zie informatiebrief voor meer informatie.</sub>
    <br>
    <br>
    `;

// screen 6 & 7 & 8
const CAREGIVER_INSTRUCTION_1 = `
    <h1> Instructies opstelling (1/3) </h1>
    <h6>Idealiter ziet uw opstelling er uit zoals in de <strong>groene</strong> voorbeelden van deze afbeeldingen:</h6>
    <img src="./images/setup-ok-1.png" style="width: 300px"></img>
    <img src="./images/setup-ok-2.png" style="width: 300px"></img>
    <img src="./images/setup-nok-3.png" style="width: 300px"></img>
    `

const CAREGIVER_INSTRUCTION_2 = `
    <h1> Instructies opstelling (2/3) </h1>
    <ol type="1">
        <li> De kinderstoel staat op ongeveer een (volwassen) armlengte afstand van het scherm, zodat er ongeveer <strong>60 centimeter</strong> tussen uw kind en het scherm zit.</li>
        <li> De webcam is <strong>bovenin, in het midden</strong> van het scherm geplaatst.</li>
        <li> De webcam is gericht op <strong>hoofdhoogte</strong> van uw kind. Indien uw kind hoger zit, plaats dan bijvoorbeeld enkele boeken onder de laptop, zodat de webcam op hoofdhoogte van uw kind staat. </li>
        '<img src="./images/screens.png" style="width: 400px; height: 100"></img>
        <li> Er is <strong>voldoende (dag)licht</strong> in de omgeving zodat de ogen van uw kind goed zichtbaar zijn in de webcambeelden.</li>
    </ol>
    <div>
        <ul class="bullet-open">
            <li> Indien dit <i>niet</i> het geval is, plaatst u een <strong>lamp hoog achter het scherm</strong>, zodat er <strong>geen schaduw</strong> van uw scherm op het gezicht van uw kind valt.</li>
            <li> Zorg ervoor dat er <strong>niet te veel licht <i>achter</i> uw kind</strong> vandaan komt om tegenlicht te voorkomen; zet uw kind dus idealiter niet met diens rug naar een raam.</li>
        </ul>
    </div>
    `;


const CAREGIVER_INSTRUCTION_3 = `  
    <h1> Instructies opstelling (3/3) </h1>
    <ol type="1">
        <li> Zorg voor zo <strong>min mogelijk afleiding</strong>. </li> 
            <div>
                <ul class="bullet-open">
                    <li> Zet uw telefoon, tv, radio, en alle andere apparatuur die kan storen <strong>uit</strong> of op <strong>stil</strong>, zodat er gedurende het onderzoek zo min mogelijk geluiden of andere afleiding is in de omgeving.
                </ul>
            </div>
        <li> Blijf <strong>zelf achter uw kind</strong> staan of zitten en kijk naar beneden gedurende het onderzoek.</li>
            <div>
                <ul class="bullet-open">
                    <li>Om het kijkgedrag van uw kind niet te beïnvloeden is het van belang dat u <strong>achter</strong> uw kind blijft, zodat uw kind maximale aandacht heeft voor het scherm en niet wordt afgeleid.</li>
                    <li>Verder vragen wij u om naar <strong>beneden</strong> te kijken (zodat u niet naar het scherm kijkt), <strong>niet</strong> te <strong>praten</strong> over het scherm of wat u hoort, en <strong>niet</strong> te <strong>wijzen</strong> naar het scherm.</li>
                </ul>
            </div>
    </ol>
`;

const CAREGIVER_INSTRUCTION_4 = `
    <h1>Wanneer te stoppen?</h1>
    <p>Als uw kind erg onrustig is kunt u uw kind <strong>geruststellen</strong>. Let wel op dat u <strong>niet</strong> met uw kind <strong>praat</strong> over of <strong>wijst</strong> naar het <strong>scherm</strong>.
    <br>
    <br> 
    <strong>Als uw kind niet gerust te stellen is, kunt u uw kind uit de kinderstoel halen.</strong>
    <br>
    <br>
    <strong>Let op</strong>:  Wij vragen u de webcamopname te stoppen maar de opname <strong>wel</strong> te <strong>uploaden</strong>. Alle kleine beetjes helpen. Ook is het belangrijk om na het taakje op ‘volgende’ te blijven klikken en het <strong>onderzoek volledig af te ronden</strong>.
    </p> 
`;

//screen 9
const CAREGIVER_VALIDATE_SETUP_STATEMENT = `
    Ik heb de aanwijzingen over de opstelling zo goed mogelijk opgevolgd en begrijp wat er van mij verwacht wordt tijdens het onderzoek.
     `;

const SETUP_REFERENCE_NAME = "setup";

const IF_REQUIRED_FEEDBACK_MESSAGE_SETUP = `
    Vink het vakje naast ' ${ CAREGIVER_VALIDATE_SETUP_STATEMENT } ' aan om door te gaan.
    `;

//screen 10
const AUDIO_CHECK_PROMPT_TEXT_LOOP = `
    Pas het test-geluid aan naar een volume die voor u en uw kind prettig is. U kunt het test-geluid opnieuw afspelen indien gewenst.
    <br>
    <br>
    Zorg ervoor dat het geluid <strong>niet te zacht</strong> staat, anders wordt het geluid niet opgenomen door de webcam.
    <br>
    <br>
    Klik op ‘Volgende’ als uw geluid op een prettig volume staat, en u verder wilt gaan naar de lay-out van het scherm.
    `;

//screen 11
const PRE_LAYOUT_MESSAGE =`
    <h3> Scherm layout</h3>
    <p> Het is belangrijk dat het <i>hele onderzoek vanaf nu op uw scherm past</i>. Daarom ziet u nadat u op ‘Oké’ klikt een tabel van 
    <i>drie (3) rijen</i> en <i>vijf (5) kolommen</i>. 
    <figure>
        <img src="./images/layout-three.png" style="width: 800px"><figcaption><i>Met links ('goed') de best passende tabel layout.</i></figcaption></figure>' 
    <ul>
    <li>De hele tabel moet — liefst <strong>zo groot mogelijk passend</strong> — zichtbaar zijn in uw browser scherm zonder dat u hoeft 
    te scrollen.</li>
    <li>Indien dit niet mogelijk is, zoom dan voldoende uit totdat de tabel scherm-vullend zichtbaar is.</li> 
    <li>Dit 'zoomen' kunt u doen door de <kbd>CTRL</kbd> toets ingedrukt te houden <sub>(Mac OSX gebruikers gebruiken de <kbd>CMD</kbd> 
    toets!)</sub> en vervolgens op de plus (<kbd>+</kbd>) of min (<kbd>-</kbd>) toets te drukken op uw toetsenbord, óf door de 
    <kbd>CTRL</kbd>/<kbd>CMD</kbd> toets ingedrukt te houden en te scrollen met uw muis.</li>
    </ul> 
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

const GRID_HTML_LAYOUT_BARE = `<div id="jspsych-vsl-grid-scene-dummy" css="display: none;">
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
    <div id="jspsych-vsl-grid-scene-table-cell-1-2" style="width: 200px; height: 200px;"></div></td>
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
  
const PRE_REC_MESSAGE_TABS = `
    <h1>Belangrijk:</h1>
    Straks zult u naar een nieuw tabblad worden geleid, waar u uw webcam aan kunt zetten en de webcam-opname kunt starten.
    <ol type="1">
        <li> Klik op <strong>"Zet camera aan"</strong> om het beeld weer te geven;</li>
        <li> Test of uw webcam werkt en of er <strong>voldoende licht</strong> is;</li>
        <li> Maak aanpassingen indien nodig;</li>
        <li> Zet <strong>vervolgens uw kind in de kinderstoel</strong>, richt de webcam of het scherm zo dat het <strong>gezicht</strong> van uw kind <strong>zichtbaar</strong> is;</li>
        <li> Indien stap 1 tot 4 gelukt zijn start u de webcam-opname door op <strong>"Begin opname"</strong> te klikken.</li>
    </ol>
    <img src="./images/tabs.png" style="width: 600px;"></img>
    <br>
    <br>
    Nadat u uw webcam-opname heeft gestart laat u het webcam-tabblad open staan en klikt u op het huidige tabblad, om terug te komen op deze pagina (uw webcam-opname blijft dus op de achtergrond doorlopen, <strong>sluit geen van beide tabbladen!</strong>).
`;

const PRE_REC_MESSAGE_CHECKBOX = BORDER_LIST_STYLE + `
    Klik <a href="../webrtc/index.html"  style="color: tomato" target="_blank"> <strong>deze link</strong> </a> om de webcam-opname te starten.
    <br>
    <br>
    Herhaling stappen:
    <br>
    <ol>
        <i><sub><li> Klik op <strong>"Zet camera aan"</strong> om het beeld weer te geven;</li>
        <li> Test of uw webcam werkt en of er <strong>voldoende licht</strong> is;</li>
        <li> Maak aanpassingen indien nodig;</li>
        <li> Zet <strong>vervolgens uw kind in de kinderstoel</strong>, richt de webcam of het scherm zo dat het <strong>gezicht</strong> van uw kind <strong>zichtbaar</strong> is;</li>
        <li> Indien stap 1 tot 4 gelukt zijn start u de webcam-opname door op <strong>"Begin opname"</strong> te klikken.</li></sub></i>
    </ol>
    <br>
    <br>
    Klik op "Volgende"  nadat u de webcam-opname heeft gestart, om het taakje voor uw kind te starten. U heeft dan nog <strong>10 seconden</strong> om positie in te nemen en de <strong>muis</strong> in een <strong>hoek van het scherm</strong> te plaatsen. 
    <br>
    <br>
    Zodra u na de start van het onderzoek langer dan 15 seconden geen geluid meer hoort is de taak voor uw kind afgerond.
     `;

const REC_STARTED_STATEMENT = `Ik heb de webcam-opname gestart.`;

const REC_REFERENCE_NAME = "recording";

const IF_REQUIRED_FEEDBACK_MESSAGE_REC = `
    U moet ' ${ REC_STARTED_STATEMENT } ' aanvinken om door te gaan naar het experiment.
    `;

const POST_REC_MESSAGE = `
    <h2>De taak voor uw kind is afgelopen, maar <u>u</u> bent <u>nog niet</u> helemaal klaar!</h2>
    <strong>Belangrijk</strong>: Volg de volgende stappen op om het onderzoek succesvol af te ronden.
    <br>
    <br>
    Nadat u straks op het tabblad met uw <strong>webcam-opname</strong> klikt:
    <ol type="1">
        <li>Klikt u op "<strong>Stop opname</strong>".</li>
        <li>Vult u bij “token” uw <strong>persoonlijke code</strong> in.</li>
        <li>Klikt u vervolgens op "<strong>Uploaden</strong>".</li>
    </ol>
    Nadat u op uploaden heeft geklikt wordt uw <strong>webcam-opname verstuurd</strong> naar de beveiligde server van Universiteit Utrecht.
    <br>
    <br>
    U ziet een <strong>melding</strong> op het scherm zodra het <strong>uploaden</strong> is <strong>gelukt</strong>.
    <br>
    <br>
    Klik nu op het <strong>tabblad</strong> met uw <strong>webcam-opname</strong> en voer de stappen uit.
    <br>
    <br>
    Klik op ‘volgende’ als u uw webcam-opname heeft <strong>geüpload<strong>.
    `;

const EXTRA_CONSENT_PRE = `
    Uw keuze over onderstaande punten heeft <u>geen</u> enkele <u>invloed</u> op uw deelname aan het huidige onderzoek.
    <br>
    <br>
    <sub>(Velden met een <strong>*</strong> zijn verplicht.)<sub>
    `;

const EXTRA_CONSENT_AGREE = 'Ja, daar ga ik mee akkoord';
const EXTRA_CONSENT_DISAGREE = 'Nee, niet akkoord';

const EXTRA_CONSENT_Q1 = `
    <strong>1.</strong> Gaat u er mee akkoord dat het verzamelde <strong>audio- en videomateriaal</strong>, 
    <u>dit is dus niet anoniem</u>, van (u en) uw kind, gedeeld wordt met andere onderzoekers voor onderzoeksdoeleinden?
    `;

const EXTRA_CONSENT_Q2 = `
    <strong>2.</strong> Soms worden beeld- en/of geluidsopnames ook getoond in <strong>wetenschappelijke</strong> lezingen of <strong>lessen</strong>. Gaat u ermee akkoord dat het gemaakte audio- en/of videomateriaal gebruikt wordt voor deze doeleinden? 
    `;

const GIFT_MESSAGE = `
    <h2>Klik op <i>'Einde'</i> om het onderzoek af te ronden</h2> 
    Als dank voor uw deelname willen wij uw kind graag een cadeautje sturen. Hier hebben wij echter uw adresgegevens voor nodig. 
    <br>
    <br>
    Indien u een cadeautje wilt ontvangen, mail dan uw: <strong>straat, huisnummer, postcode, plaats, én uw unieke code</strong> naar:
    <br>
    <br>
    <strong>m.h.i.jansen@uu.nl</strong>
    <br>
    <br>
    Als u uw PC's standaard-email programma gebruikt, kunt u ook <a href="mailto:m.h.i.jansen@uu.nl?subject=Deelname%20Onderzoek&body=Mijn-adresgegevens-en-persoonlijke code:"><strong>deze E-mail-link</strong></a> gebruiken.
    <br>
    <br>
    Als u liever met uw telefoon de e-mail wilt versturen, kunt u deze QR code scannen:<br>
    <img src="./images/mailmaaike.png" style="width: 200px">    
    <br>
    <br>
    Klik op 'Einde' als u dit heeft gedaan, of als u geen cadeautje wilt ontvangen.
    `;

// don't mention closing the window in this frame, it may just leave you without data.
const DEBRIEF_MESSAGE = `
    <h1>Einde</h1>
    <br>
    <br>
    <h2>Bedankt voor jullie deelname!</h2>
    `;

const DEBRIEF_MESSAGE_DURATION = 1000;
