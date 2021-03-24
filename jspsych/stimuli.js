////////////////
// STIMULI
///////////////

// Item types
const GRABBER = "GRABBER";

const BASELINE = "BASELINE";
const PAIRED_SUCCESION = "PAIRED_SUCCESION";

// Subtypes Image /Sound
const SIMPLER = "SIMPLER";
const COMPLEX = "COMPLEX";

const SOUND_1 = "SOUND_1";
const SOUND_2 = "SOUND_2";


// Baseline items 1


const BASELINE_1 = [
    {
        id: 1, 
        item_type: BASELINE, 
        sound_fn: "./sounds/testtune.mp3",
        image_fn_left: "./images/complex1.png",
        image_fn_right: "./images/complex1.png"
    },
    {
        id: 2, 
        item_type: BASELINE, 
        sound_fn: "./sounds/testtune.mp3",
        image_fn_left: "./images/simple1.png",
        image_fn_right: "./images/simple2.png",
    }
];


// Paired succesion items
//side can be 0 or 1 (0: left, 1: right)
const PAIRED_1 = [
    {
        id: 1, 
        item_type: PAIRED_SUCCESION, 
        sound_fn: "./sounds/testtune.mp3",
        image_fn: "./images/simple1.png",
        side: 0 
    },
    {
        id: 2, 
        item_type: PAIRED_SUCCESION, 
        sound_fn: "./sounds/testtune.mp3",
        image_fn: "./images/simple1.png",
        side: 1
    }
];

const PAIRED_2 = [
    {
        id: 1, 
        item_type: PAIRED_SUCCESION, 
        sound_fn: "./sounds/testtune.mp3",
        image_fn: "./images/simple1.png",
        side: 0 
    },
    {
        id: 2, 
        item_type: PAIRED_SUCCESION, 
        sound_fn: "./sounds/testtune.mp3",
        image_fn: "./images/simple1.png",
        side: 1
    }
];


// var image_size = [200,200] // pixels

// let pattern = [
//     [0,0,0,0,0],
//     [jsPsych.timelineVariable('image_fn_left'), 0,0,0, jsPsych.timelineVariable('image_fn_right')],
//     [0,0,0,0,0]
// ];


// table layout
GRID_HTML_LEFT_RIGHT = `<div id="jspsych-vsl-grid-scene-dummy" css="display: none;">
    <table id="jspsych-vsl-grid-scene table" style="border-collapse: collapse; margin-left: auto; margin-right: auto;">
    <tr id="jspsych-vsl-grid-scene-table-row-0" css="height: 200px;">
    <td id="jspsych-vsl-grid-scene-table-0-0" style="padding: 20px 20px; border: 1px solid white;">
    <div id="jspsych-vsl-grid-scene-table-cell-0-0" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-0-1" style="padding: 20px 20px; border: 1px solid white;">
    <div id="jspsych-vsl-grid-scene-table-cell-0-1" style="width: 200px; height: 200px;"></div>
    </td><td id="jspsych-vsl-grid-scene-table-0-2" style="padding: 20px 20px; border: 1px solid white;">
    <div id="jspsych-vsl-grid-scene-table-cell-0-2" style="width: 200px; height: 200px;">
    </div></td><td id="jspsych-vsl-grid-scene-table-0-3" style="padding: 20px 20px; border: 1px solid white;">
    <div id="jspsych-vsl-grid-scene-table-cell-0-3" style="width: 200px; height: 200px;"></div>
    </td><td id="jspsych-vsl-grid-scene-table-0-4" style="padding: 20px 20px; border: 1px solid white;">
    <div id="jspsych-vsl-grid-scene-table-cell-0-4" style="width: 200px; height: 200px;"></div>
    </td></tr><tr id="jspsych-vsl-grid-scene-table-row-1" css="height: 200px;">
    <td id="jspsych-vsl-grid-scene-table-1-0" style="padding: 20px 20px; border: 1px solid white;">
    <div id="jspsych-vsl-grid-scene-table-cell-1-0" style="width: 200px; height: 200px;">
    <img src="./images/left.png" style="width: 200px; height: 200"></img></div>
    </td><td id="jspsych-vsl-grid-scene-table-1-1" style="padding: 20px 20px; border: 1px solid white;">
    <div id="jspsych-vsl-grid-scene-table-cell-1-1" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-1-2" style="padding: 20px 20px; border: 1px solid white;">
    <div id="jspsych-vsl-grid-scene-table-cell-1-2" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-1-3" style="padding: 20px 20px; border: 1px solid white;">
    <div id="jspsych-vsl-grid-scene-table-cell-1-3" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-1-4" style="padding: 20px 20px; border: 1px solid white;">
    <div id="jspsych-vsl-grid-scene-table-cell-1-4" style="width: 200px; height: 200px;">
    <img src="./images/right.png" style="width: 200px; height: 200"></img></div>
    </td></tr><tr id="jspsych-vsl-grid-scene-table-row-2" css="height: 200px;">
    <td id="jspsych-vsl-grid-scene-table-2-0" style="padding: 20px 20px; border: 1px solid white;">
    <div id="jspsych-vsl-grid-scene-table-cell-2-0" style="width: 200px; height: 200px;"></div>
    </td><td id="jspsych-vsl-grid-scene-table-2-1" style="padding: 20px 20px; border: 1px solid white;">
    <div id="jspsych-vsl-grid-scene-table-cell-2-1" style="width: 200px; height: 200px;"></div>
    </td><td id="jspsych-vsl-grid-scene-table-2-2" style="padding: 20px 20px; border: 1px solid white;">
    <div id="jspsych-vsl-grid-scene-table-cell-2-2" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-2-3" style="padding: 20px 20px; border: 1px solid white;">
    <div id="jspsych-vsl-grid-scene-table-cell-2-3" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-2-4" style="padding: 20px 20px; border: 1px solid white;">
    <div id="jspsych-vsl-grid-scene-table-cell-2-4" style="width: 200px; height: 200px;"></div>
    </td></tr></table></div>`


GRID_HTML_CENTER = `<div id="jspsych-vsl-grid-scene-dummy" css="display: none;">
    <table id="jspsych-vsl-grid-scene table" style="border-collapse: collapse; margin-left: auto; margin-right: auto;">
    <tr id="jspsych-vsl-grid-scene-table-row-0" css="height: 200px;">
    <td id="jspsych-vsl-grid-scene-table-0-0" style="padding: 20px 20px; border: 1px solid white;">
    <div id="jspsych-vsl-grid-scene-table-cell-0-0" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-0-1" style="padding: 20px 20px; border: 1px solid white;">
    <div id="jspsych-vsl-grid-scene-table-cell-0-1" style="width: 200px; height: 200px;"></div>
    </td><td id="jspsych-vsl-grid-scene-table-0-2" style="padding: 20px 20px; border: 1px solid white;">
    <div id="jspsych-vsl-grid-scene-table-cell-0-2" style="width: 200px; height: 200px;">
    </div></td><td id="jspsych-vsl-grid-scene-table-0-3" style="padding: 20px 20px; border: 1px solid white;">
    <div id="jspsych-vsl-grid-scene-table-cell-0-3" style="width: 200px; height: 200px;"></div>
    </td><td id="jspsych-vsl-grid-scene-table-0-4" style="padding: 20px 20px; border: 1px solid white;">
    <div id="jspsych-vsl-grid-scene-table-cell-0-4" style="width: 200px; height: 200px;"></div>
    </td></tr><tr id="jspsych-vsl-grid-scene-table-row-1" css="height: 200px;">
    <td id="jspsych-vsl-grid-scene-table-1-0" style="padding: 20px 20px; border: 1px solid white;">
    <div id="jspsych-vsl-grid-scene-table-cell-1-0" style="width: 200px; height: 200px;">
    <img src="./images/left.png" style="width: 200px; height: 200"></img></div>
    </td><td id="jspsych-vsl-grid-scene-table-1-1" style="padding: 20px 20px; border: 1px solid white;">
    <div id="jspsych-vsl-grid-scene-table-cell-1-1" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-1-2" style="padding: 20px 20px; border: 1px solid white;">
    <div id="jspsych-vsl-grid-scene-table-cell-1-2" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-1-3" style="padding: 20px 20px; border: 1px solid white;">
    <div id="jspsych-vsl-grid-scene-table-cell-1-3" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-1-4" style="padding: 20px 20px; border: 1px solid white;">
    <div id="jspsych-vsl-grid-scene-table-cell-1-4" style="width: 200px; height: 200px;">
    <img src="./images/right.png" style="width: 200px; height: 200"></img></div>
    </td></tr><tr id="jspsych-vsl-grid-scene-table-row-2" css="height: 200px;">
    <td id="jspsych-vsl-grid-scene-table-2-0" style="padding: 20px 20px; border: 1px solid white;">
    <div id="jspsych-vsl-grid-scene-table-cell-2-0" style="width: 200px; height: 200px;"></div>
    </td><td id="jspsych-vsl-grid-scene-table-2-1" style="padding: 20px 20px; border: 1px solid white;">
    <div id="jspsych-vsl-grid-scene-table-cell-2-1" style="width: 200px; height: 200px;"></div>
    </td><td id="jspsych-vsl-grid-scene-table-2-2" style="padding: 20px 20px; border: 1px solid white;">
    <div id="jspsych-vsl-grid-scene-table-cell-2-2" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-2-3" style="padding: 20px 20px; border: 1px solid white;">
    <div id="jspsych-vsl-grid-scene-table-cell-2-3" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-2-4" style="padding: 20px 20px; border: 1px solid white;">
    <div id="jspsych-vsl-grid-scene-table-cell-2-4" style="width: 200px; height: 200px;"></div>
    </td></tr></table></div>`

// const PAIRED_ITEMS = [
//     {list_name: LISTS[0], table: PAIRED_1},
//     {list_name: LISTS[1], table: PAIRED_2}
// ];


function getBaselineItems() {
    return {list_name : "baseline one", table : BASELINE_1};
}

function getPairedItems() {
    return {list_name : "paired one", table : PAIRED_1};
}

