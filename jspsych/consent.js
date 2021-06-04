////////////////
// CONSENT
///////////////

// Using the multi select plugin.

// This one has an actual checkbox within jsPsych context. 
// And you can use the 'required = true' if you want to use it as a showstopper page. 
// Or (like demanded), it is now also possible to use additional conditional stuff, like proceeding 
// to the end page, probably.
// In this version, if you want things to look 'UU-legit', it takes a bunch of css within <style> tags

function getConsentData()
{
    let data = jsPsych.data.get().select('consent_choice_response');
    data = JSON.parse(data.values[0]);
    return data.consent;
}

function set_paragraph_text_to_small() {
    document.body.style.fontSize = "0.875em"
}

function set_paragraph_text_to_normal() {
    document.body.style.fontSize = "1em"
}

const CONSENT_HTML_STYLE_UU = `
    <style>
        body {
            background: rgb(246, 246, 246);
            font-family: "Open Sans","Frutiger",Helvetica,Arial,sans-serif;
            color: rgb(33, 37, 41);
            text-align: left !important;
        }

        p {
            line-height: 1.4; /* Override paragraph for better readability */
            text-align: left !important;
        }

        label {
            margin-bottom: 0;
        }

        h1, h2{
            font-size: 2rem;
            text-align: left !important;
        }

        h6 {
            font-size: 1.1rem;
            text-align: left !important;
        }

        li {
            text-align: left !important;
        }

        /* Input styles */

        form > table th {
            padding-left: 10px;
            vertical-align: middle;
        }

        input, textarea, select {
            border-radius: 0;
            border: 1px solid #d7d7d7;
            padding: 5px 10px;
            line-height: 20px;
            font-size: 16px;
        }

        input[type=submit], input[type=button], button, .button, .jspsych-btn {
            background: #000;
            color: #fff;
            border: none;
            font-weight: bold;
            font-size: 15px;
            padding: 0 20px;
            line-height: 42px;
            width: auto;
            min-width: auto;
            cursor: pointer;
            display: inline-block;
            border-radius: 0;
        }

        input[type="checkbox"], input[type="radio"]
        {
            width: auto;
        }

        button[type=submit], input[type=submit], .button-colored {
            background: #ffcd00;
            color: #000000;
        }

        button[type=submit].button-black, input[type=submit].button-black {
            background: #000;
            color: #fff;
        }

        button a, .button a,
        button a:hover, .button a:hover,
        a.button, a.button:hover {
            color: #fff;
            text-decoration: none;
        }

        .button-colored a,
        .button-colored a:hover,
        a.button-colored,
        a.button-colored:hover {
            color: #000;
        }

        /* Table styles */
        table thead th {
            border-bottom: 1px solid #ccc;
        }

        table tfoot th {
            border-top: 1px solid #ccc;
        }

        table tbody tr:nth-of-type(odd) {
            background: #eee;
        }

        table tbody tr:hover {
            background: #ddd;
        }

        table tbody tr.no-background:hover, table tbody tr.no-background {
            background: transparent;
        }

        table tbody td, table thead th, table tfoot th {
            padding: 6px 5px;
        }

        /* Link styles */
        a {
            color: rgb(33, 37, 41);
            text-decoration: underline;
            transition: 0.2s ease color;
        }

        a:hover {
            transition: 0.2s ease color;
            color: rgb(85, 85, 95);
        }

    </style>
    `;

const CONSENT_HTML_STYLE_UU_SMALL_PARAGRAPH_TEXT = `
    <style>
        body {
            background: rgb(246, 246, 246);
            font-family: "Open Sans","Frutiger",Helvetica,Arial,sans-serif;
            color: rgb(33, 37, 41);
            text-align: left !important;
        }

        p {
            line-height: 1.4; /* Override paragraph for better readability */
            text-align: left !important;
            font-size: 0.4em !important; 
        }

        label {
            margin-bottom: 0;
        }

        h1, h2{
            font-size: 2rem;
            text-align: left !important;
        }

        h6 {
            font-size: 0.8rem;
            text-align: left !important;
        }

        li {
            text-align: left !important;
        }

        /* Input styles */

        form > table th {
            padding-left: 10px;
            vertical-align: middle;
        }

        input, textarea, select {
            border-radius: 0;
            border: 1px solid #d7d7d7;
            padding: 5px 10px;
            line-height: 20px;
            font-size: 16px;
        }

        input[type=submit], input[type=button], button, .button, .jspsych-btn {
            background: #000;
            color: #fff;
            border: none;
            font-weight: bold;
            font-size: 15px;
            padding: 0 20px;
            line-height: 42px;
            width: auto;
            min-width: auto;
            cursor: pointer;
            display: inline-block;
            border-radius: 0;
        }

        input[type="checkbox"], input[type="radio"]
        {
            width: auto;
        }

        button[type=submit], input[type=submit], .button-colored {
            background: #ffcd00;
            color: #000000;
        }

        button[type=submit].button-black, input[type=submit].button-black {
            background: #000;
            color: #fff;
        }

        button a, .button a,
        button a:hover, .button a:hover,
        a.button, a.button:hover {
            color: #fff;
            text-decoration: none;
        }

        .button-colored a,
        .button-colored a:hover,
        a.button-colored,
        a.button-colored:hover {
            color: #000;
        }

        /* Table styles */
        table thead th {
            border-bottom: 1px solid #ccc;
        }

        table tfoot th {
            border-top: 1px solid #ccc;
        }

        table tbody tr:nth-of-type(odd) {
            background: #eee;
        }

        table tbody tr:hover {
            background: #ddd;
        }

        table tbody tr.no-background:hover, table tbody tr.no-background {
            background: transparent;
        }

        table tbody td, table thead th, table tfoot th {
            padding: 6px 5px;
        }

        /* Link styles */
        a {
            color: rgb(33, 37, 41);
            text-decoration: underline;
            transition: 0.2s ease color;
        }

        a:hover {
            transition: 0.2s ease color;
            color: rgb(85, 85, 95);
        }

    </style>
    `;

const CONSENT_PAGE_1 = `
    <h1>Toestemmingsverklaring voor deelname aan:</h1>
    <h2>“Online onderzoek naar het kijkgedrag van baby’s” (1/3)</h2>
    <h6>Ik, ouder of voogd van het kind dat deelneemt aan dit onderzoek, bevestig:</h6> 
    <ol type="1">
        <li> dat ik via de <strong>informatiebrief</strong> naar tevredenheid over het onderzoek ben ingelicht; </li>
        <li> dat ik in de gelegenheid ben gesteld om <strong>vragen</strong> over het onderzoek te stellen en dat mijn eventuele vragen naar tevredenheid zijn beantwoord;</li>
        <li> dat ik gelegenheid heb gehad om grondig <strong>na te denken</strong> over deelname van mijn kind aan het onderzoek;</li>
        <li> dat ik uit <strong>vrije wil</strong> samen met mijn kind deelneem.</li>
    </ol>
    `;

const CONSENT_PAGE_2 = `
    <h1>Toestemmingsverklaring voor deelname aan:</h1>
    <h2>“Online onderzoek naar het kijkgedrag van baby’s” (2/3)</h2>
    <h6>Ik, ouder of voogd van het kind dat deelneemt aan dit onderzoek, stem er mee in dat: </h6> 

    <ol type="1">
        <li> de verzamelde gegevens voor wetenschappelijke doelen worden verkregen en bewaard zoals in de informatiebrief vermeld staat; </li>
        <li> de verzamelde, gecodeerde/geanonimiseerde, onderzoeksgegevens door wetenschappers kunnen worden gedeeld en/of worden hergebruikt om eventueel andere onderzoeksvragen mee te beantwoorden; </li>
        <li> er voor wetenschappelijke doeleinden <strong>beeld- en geluidsopnamen</strong> worden gemaakt. Deze opnamen zullen <u>niet</u> met andere onderzoekers worden gedeeld dan diegenen die direct betrokken zijn bij dit onderzoek, tenzij u hier uitdrukkelijk toestemming voor geeft aan het einde van het onderzoek. </li>
    </ol>

    <h6>Ik begrijp dat: </h6>
    <ol type="1">
        <li> ik het recht heb om mijn toestemming voor het gebruik van de data van mijn kind in te trekken zoals vermeld staat in de informatiebrief.</li>
    </ol>
    `;

const CONSENT_PAGE_3 = `
    <h1>Toestemmingsverklaring voor deelname aan:</h1>
    <h2>“Online onderzoek naar het kijkgedrag van baby’s” (3/3)</h2>
    U kunt de informatie <i>nu nog herlezen</i> (gebruik "vorige"), maar als u hierna op 'volgende' klikt, dan kan dat niet meer.
    `;

const CONSENT_HTML_CHOICE = `
    <h1>Toestemmingsverklaring voor deelname aan:</h1>
    <h2>“Online onderzoek naar het kijkgedrag van baby’s”</h2>
    `
    
const DEBRIEF_MESSAGE_NO_CONSENT = `
    <h1>Einde experiment</h1>
    <br>
    <br>
    <h2>U heeft <i>geen</i> toestemming gegeven voor het gebruik van uw data.</h2>
    `;

const DEBRIEF_MESSAGE_NO_CONSENT_DURATION = 3300;

const CONSENT_STATEMENT = `
    Door dit hokje aan te vinken verklaart u de toestemmingsverklaring grondig te hebben gelezen en begrepen, en stemt u in met de deelname van uw kind aan het onderzoek.
    <br>
    <br>
    <h2>Indien u geen toestemming geeft wordt het onderzoek beëindigd.</h2>
    <br>
    <br>
    <h6>Klik op ‘volgende’ als u toestemming heeft gegeven, en verder wilt gaan naar de persoonlijke code.</h6>
    `;

const CONSENT_REFERENCE_NAME = 'consent';

const IF_REQUIRED_FEEDBACK_MESSAGE = `
        U moet het vinkje naast '${CONSENT_STATEMENT}' aanvinken om verder te gaan met het experiment.
        `;


