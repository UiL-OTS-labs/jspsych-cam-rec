////////////////
// GLOBALS
///////////////

// ACCESS_KEY needs to be used for server setup (data store)
const ACCESS_KEY = '00000000-0000-0000-0000-000000000000';

// Defaults for buttons
const NEXT_BUTTON_TEXT = "Volgende";
const OK_BUTTON_TEXT = "Okay";
const YES_BUTTON_TEXT = "Ja";
const NO_BUTTON_TEXT = "Nee";
const TRUE_BUTTON_TEXT = "Waar";
const FALSE_BUTTON_TEXT = "Onwaar";
const PLAY_AGAIN_BUTTON_TEXT = "Speel opnieuw af";

const AUDIO_CHECK_PROMPT_TEXT_LOOP = `
    Pas het test-geluid aan naar een volume die voor u en uw kind prettig is. U kunt het test-geluid opnieuw afspelen indien gewenst.
    <br>
    <br>
    Klik op ‘Volgende’ als uw geluid op een prettig volume staat, en u verder wilt gaan naar de lay-out van het scherm.
    `

// Default restrictions of minimal browser dimensions
const MIN_WIDTH = 800; //will become wider...
const MIN_HEIGHT = 600;

// Bail out string for mobiles
const BAIL_OUT_MOBILE_TEXT = "Dit experiment mag alleen worden uitgevoerd op een desktop of laptop!`"

// Default ITI
const DEFAULT_ITI = 500;

// Task specific meat Presentation Time (PT) Mean
const BASELINE_MU_PT = 1950;
const PAIRED_MU_PT = 9950;
const GRABBER_MU_PT = 2450;

