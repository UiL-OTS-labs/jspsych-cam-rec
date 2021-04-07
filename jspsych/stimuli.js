////////////////
// STIMULI
///////////////

// Item types
const GRABBER = "GRABBER";

const BASELINE = "BASELINE";
const PAIRED_SUCCESION = "PAIRED_SUCCESION";
const PREFERENTIAL_LOOK = "PREFERENTIAL_LOOK";

// Subtypes Image /Sound
const SIMPLER = "SIMPLER";
const COMPLEX = "COMPLEX";

const SOUND_1 = "SOUND_1";
const SOUND_2 = "SOUND_2";

const GREY_HEX = "#a09c99";
const GREY_RGB = "rgba(160,156,153,255)"

// Baseline items 1

const BASELINE_1 = [
    {
        id: 1, 
        item_type: BASELINE, 
        sound_fn: "./sounds/1.wav",
        image_fn: "./video/circle_complex_static_small", 
        side: 1
    },
    {
        id: 2, 
        item_type: BASELINE, 
        sound_fn: "./sounds/1.wav",
        image_fn: "./video/circle_simple_static_small",
        side: 0
    },
    {
        id: 3, 
        item_type: BASELINE, 
        sound_fn: "./sounds/2.wav",
        image_fn: "./video/circle_simple_static_small", 
        side: 1
    },
    {
        id: 4, 
        item_type: BASELINE, 
        sound_fn: "./sounds/2.wav",
        image_fn: "./video/circle_complex_static_small",
        side: 0
    },

];


const PAIRED_ALL = [
    {
        id: 1, 
        item_type: PAIRED_SUCCESION, 
        sound_fn: "./sounds/5.wav",
        image_fn: "./video/circle_simple_static_small",
        side: 1 
    },
    {
        id: 2, 
        item_type: PAIRED_SUCCESION, 
        sound_fn: "./sounds/5.wav",
        image_fn: "./video/circle_simple_move",
        side: 0
    },
    {
        id: 3, 
        item_type: PAIRED_SUCCESION, 
        sound_fn: "./sounds/5.wav",
        image_fn: "./video/circle_simple_move",
        side: 1 
    },
    {
        id: 4, 
        item_type: PAIRED_SUCCESION, 
        sound_fn: "./sounds/5.wav",
        image_fn: "./video/circle_simple_static_small",
        side: 0
    },
    {
        id: 5, 
        item_type: PAIRED_SUCCESION, 
        sound_fn: "./sounds/5.wav",
        image_fn: "./video/circle_complex_static_small",
        side: 1 
    },
    {
        id: 6, 
        item_type: PAIRED_SUCCESION, 
        sound_fn: "./sounds/5.wav",
        image_fn: "./video/circle_complex_move",
        side: 0
    },
    {
        id: 7, 
        item_type: PAIRED_SUCCESION, 
        sound_fn: "./sounds/5.wav",
        image_fn: "./video/circle_complex_move",
        side: 1 
    },
    {
        id: 8, 
        item_type: PAIRED_SUCCESION, 
        sound_fn: "./sounds/5.wav",
        image_fn: "./video/circle_complex_static_small",
        side: 0
    },
    {
        id: 9, 
        item_type: PAIRED_SUCCESION, 
        sound_fn: "./sounds/5.wav",
        image_fn: "./video/circle_simple_static_small",
        side: 1 
    },
    {
        id: 10, 
        item_type: PAIRED_SUCCESION, 
        sound_fn: "./sounds/5.wav",
        image_fn: "./video/circle_simple_move",
        side: 0
    },
    {
        id: 11, 
        item_type: PAIRED_SUCCESION, 
        sound_fn: "./sounds/5.wav",
        image_fn: "./video/circle_complex_move",
        side: 1 
    },
    {
        id: 12, 
        item_type: PAIRED_SUCCESION, 
        sound_fn: "./sounds/5.wav",
        image_fn: "./video/circle_complex_static_small",
        side: 0
    },
    {
        id: 13, 
        item_type: PAIRED_SUCCESION, 
        sound_fn: "./sounds/5.wav",
        image_fn: "./video/circle_simple_static_small",
        side: 1 
    },
    {
        id: 14, 
        item_type: PAIRED_SUCCESION, 
        sound_fn: "./sounds/5.wav",
        image_fn: "./video/circle_complex_move",
        side: 0
    },
    {
        id: 15, 
        item_type: PAIRED_SUCCESION, 
        sound_fn: "./sounds/5.wav",
        image_fn: "./video/circle_complex_move",
        side: 1 
    },
    {
        id: 16, 
        item_type: PAIRED_SUCCESION, 
        sound_fn: "./sounds/5.wav",
        image_fn: "./video/circle_complex_static_small",
        side: 0
    }
];

const PREF_ALL = [
    {
        id: 1, 
        item_type: PREFERENTIAL_LOOK, 
        sound_fn: "./sounds/testtune.mp3",
        image_fn_left: "./video/circle_simple_move",
        image_fn_right: "./video/circle_simple_static_small"
    },
    {
        id: 2, 
        item_type: PREFERENTIAL_LOOK, 
        sound_fn: "./sounds/testtune.mp3",
        image_fn_left: "./video/circle_simple_static_small",
        image_fn_right: "./video/circle_simple_move"
    }
];


// center HTML (images)
const GRABBER_1 = [
    {
        id: 1, 
        item_type: GRABBER, 
        sound_fn: "./sounds/4.wav",
        image_fn: "./video/clock-grabber"//grabber todo
    }
];

const GRABBER_2 = [
    {
        id: 1, 
        item_type: GRABBER, 
        sound_fn: "./sounds/7.wav",
        image_fn: "./video/clock-grabber"//grabber image todo
    }
];

// safekeeping this for new grids...

// var image_size = [200,200] // pixels

// let pattern_LR = [
//     [0,0,0,0,0],
//     ['./images/left.png', 0,0,0, './images/left.png'],
//     [0,0,0,0,0]
// ];

// let pattern_C = [
//     [0,0,0,0,0],
//     [0,0,'./images/center.png',0,0],
//     [0,0,0,0,0]
// ];

// var grid_stimulus = jsPsych.plugins['vsl-grid-scene'].generate_stimulus(pattern_C, image_size);
// console.log(grid_stimulus);


// // table layout
// GRID_HTML_LEFT_RIGHT = `<div id="jspsych-vsl-grid-scene-dummy" css="display: none;">
//     <table id="jspsych-vsl-grid-scene table" style="border-collapse: collapse; margin-left: auto; margin-right: auto;">
//     <tr id="jspsych-vsl-grid-scene-table-row-0" css="height: 200px;">
//     <td id="jspsych-vsl-grid-scene-table-0-0" style="padding: 20px 20px; border: 0px solid "#a0l;">
//     <div id="jspsych-vsl-grid-scene-table-cell-0-0" style="width: 200px; height: 200px;"></div></td>
//     <td id="jspsych-vsl-grid-scene-table-0-1" style="padding: 20px 20px; border: 0px solid "#a09c99";">
//     <div id="jspsych-vsl-grid-scene-table-cell-0-1" style="width: 200px; height: 200px;"></div>
//     </td><td id="jspsych-vsl-grid-scene-table-0-2" style="padding: 20px 20px; border: 0px solid "#a09c99";">
//     <div id="jspsych-vsl-grid-scene-table-cell-0-2" style="width: 200px; height: 200px;">
//     </div></td><td id="jspsych-vsl-grid-scene-table-0-3" style="padding: 20px 20px; border: 0px solid "#a09c99";">
//     <div id="jspsych-vsl-grid-scene-table-cell-0-3" style="width: 200px; height: 200px;"></div></td>
//     <td id="jspsych-vsl-grid-scene-table-0-4" style="padding: 20px 20px; border: 0px solid "#a09c99";">
//     <div id="jspsych-vsl-grid-scene-table-cell-0-4" style="width: 200px; height: 200px;"></div></td>
//     </tr><tr id="jspsych-vsl-grid-scene-table-row-1" css="height: 200px;">
//     <td id="jspsych-vsl-grid-scene-table-1-0" style="padding: 20px 20px; border: 0px solid "#a09c99";">
//     <div id="jspsych-vsl-grid-scene-table-cell-1-0" style="width: 200px; height: 200px;">
//     <img src="./images/left-grey.png" style="width: 200px; height: 200"></img></div>
//     </td><td id="jspsych-vsl-grid-scene-table-1-1" style="padding: 20px 20px; border: 0px solid "#a09c99";">
//     <div id="jspsych-vsl-grid-scene-table-cell-1-1" style="width: 200px; height: 200px;"></div></td>
//     <td id="jspsych-vsl-grid-scene-table-1-2" style="padding: 20px 20px; border: 0px solid "#a09c99";">
//     <div id="jspsych-vsl-grid-scene-table-cell-1-2" style="width: 200px; height: 200px;"></div></td>
//     <td id="jspsych-vsl-grid-scene-table-1-3" style="padding: 20px 20px; border: 0px solid "#a09c99";">
//     <div id="jspsych-vsl-grid-scene-table-cell-1-3" style="width: 200px; height: 200px;"></div></td>
//     <td id="jspsych-vsl-grid-scene-table-1-4" style="padding: 20px 20px; border: 0px solid "#a09c99";">
//     <div id="jspsych-vsl-grid-scene-table-cell-1-4" style="width: 200px; height: 200px;">
//     <img src="./images/right-grey.png" style="width: 200px; height: 200"></img></div>
//     </td></tr><tr id="jspsych-vsl-grid-scene-table-row-2" css="height: 200px;">
//     <td id="jspsych-vsl-grid-scene-table-2-0" style="padding: 20px 20px; border: 0px solid "#a09c99";">
//     <div id="jspsych-vsl-grid-scene-table-cell-2-0" style="width: 200px; height: 200px;"></div>
//     </td><td id="jspsych-vsl-grid-scene-table-2-1" style="padding: 20px 20px; border: 0px solid "#a09c99";">
//     <div id="jspsych-vsl-grid-scene-table-cell-2-1" style="width: 200px; height: 200px;"></div>
//     </td><td id="jspsych-vsl-grid-scene-table-2-2" style="padding: 20px 20px; border: 0px solid "#a09c99";">
//     <div id="jspsych-vsl-grid-scene-table-cell-2-2" style="width: 200px; height: 200px;"></div></td>
//     <td id="jspsych-vsl-grid-scene-table-2-3" style="padding: 20px 20px; border: 0px solid "#a09c99";">
//     <div id="jspsych-vsl-grid-scene-table-cell-2-3" style="width: 200px; height: 200px;"></div></td>
//     <td id="jspsych-vsl-grid-scene-table-2-4" style="padding: 20px 20px; border: 0px solid "#a09c99";">
//     <div id="jspsych-vsl-grid-scene-table-cell-2-4" style="width: 200px; height: 200px;"></div>
//     </td></tr></table></div>`


// table layout
GRID_HTML_LEFT_RIGHT = `<div id="jspsych-vsl-grid-scene-dummy" css="display: none;">
    <table id="jspsych-vsl-grid-scene table" style="border-collapse: collapse; margin-left: auto; margin-right: auto;">
    <tr id="jspsych-vsl-grid-scene-table-row-0" css="height: 200px;">
    <td id="jspsych-vsl-grid-scene-table-0-0" style="padding: 20px 20px; border: 0px solid "#a0l;">
    <div id="jspsych-vsl-grid-scene-table-cell-0-0" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-0-1" style="padding: 20px 20px; border: 0px solid "#a09c99";">
    <div id="jspsych-vsl-grid-scene-table-cell-0-1" style="width: 200px; height: 200px;"></div>
    </td><td id="jspsych-vsl-grid-scene-table-0-2" style="padding: 20px 20px; border: 0px solid "#a09c99";">
    <div id="jspsych-vsl-grid-scene-table-cell-0-2" style="width: 200px; height: 200px;">
    </div></td><td id="jspsych-vsl-grid-scene-table-0-3" style="padding: 20px 20px; border: 0px solid "#a09c99";">
    <div id="jspsych-vsl-grid-scene-table-cell-0-3" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-0-4" style="padding: 20px 20px; border: 0px solid "#a09c99";">
    <div id="jspsych-vsl-grid-scene-table-cell-0-4" style="width: 200px; height: 200px;"></div></td>
    </tr><tr id="jspsych-vsl-grid-scene-table-row-1" css="height: 200px;">
    <td id="jspsych-vsl-grid-scene-table-1-0" style="padding: 20px 20px; border: 0px solid "#a09c99";">
    <div id="jspsych-vsl-grid-scene-table-cell-1-0" style="width: 200px; height: 200px;">
    <video autoplay="true" loop="true" width="200">
        <source src="./video/01_left.mp4" type="video/mp4">
        <source src="./video/01_left.webm" type="video/webm">
    
    ERROR!
    </video></div>
    </td><td id="jspsych-vsl-grid-scene-table-1-1" style="padding: 20px 20px; border: 0px solid "#a09c99";">
    <div id="jspsych-vsl-grid-scene-table-cell-1-1" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-1-2" style="padding: 20px 20px; border: 0px solid "#a09c99";">
    <div id="jspsych-vsl-grid-scene-table-cell-1-2" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-1-3" style="padding: 20px 20px; border: 0px solid "#a09c99";">
    <div id="jspsych-vsl-grid-scene-table-cell-1-3" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-1-4" style="padding: 20px 20px; border: 0px solid "#a09c99";">
    <div id="jspsych-vsl-grid-scene-table-cell-1-4" style="width: 200px; height: 200px;">
    <video autoplay="true" loop="true" width="200">
        <source src="./video/03_right.mp4" type="video/mp4">
        <source src="./video/03_right.webm" type="video/webm">
    
    ERROR!
    </video></div></div>
    </td></tr><tr id="jspsych-vsl-grid-scene-table-row-2" css="height: 200px;">
    <td id="jspsych-vsl-grid-scene-table-2-0" style="padding: 20px 20px; border: 0px solid "#a09c99";">
    <div id="jspsych-vsl-grid-scene-table-cell-2-0" style="width: 200px; height: 200px;"></div>
    </td><td id="jspsych-vsl-grid-scene-table-2-1" style="padding: 20px 20px; border: 0px solid "#a09c99";">
    <div id="jspsych-vsl-grid-scene-table-cell-2-1" style="width: 200px; height: 200px;"></div>
    </td><td id="jspsych-vsl-grid-scene-table-2-2" style="padding: 20px 20px; border: 0px solid "#a09c99";">
    <div id="jspsych-vsl-grid-scene-table-cell-2-2" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-2-3" style="padding: 20px 20px; border: 0px solid "#a09c99";">
    <div id="jspsych-vsl-grid-scene-table-cell-2-3" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-2-4" style="padding: 20px 20px; border: 0px solid "#a09c99";">
    <div id="jspsych-vsl-grid-scene-table-cell-2-4" style="width: 200px; height: 200px;"></div>
    </td></tr></table></div>`


GRID_HTML_CENTER = `<div id="jspsych-vsl-grid-scene-dummy" css="display: none;">
    <table id="jspsych-vsl-grid-scene table" style="border-collapse: collapse; margin-left: auto; margin-right: auto;">
    <tr id="jspsych-vsl-grid-scene-table-row-0" css="height: 200px;">
    <td id="jspsych-vsl-grid-scene-table-0-0" style="padding: 20px 20px; border: 0px "#a09c99";">
    <div id="jspsych-vsl-grid-scene-table-cell-0-0" style="width: 200px; height: 200px;">
    </div></td><td id="jspsych-vsl-grid-scene-table-0-1" style="padding: 20px 20px; border: 0px "#a09c99";">
    <div id="jspsych-vsl-grid-scene-table-cell-0-1" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-0-2" style="padding: 20px 20px; border: 0px "#a09c99";">
    <div id="jspsych-vsl-grid-scene-table-cell-0-2" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-0-3" style="padding: 20px 20px; border: 0px "#a09c99";">
    <div id="jspsych-vsl-grid-scene-table-cell-0-3" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-0-4" style="padding: 20px 20px; border: 0px "#a09c99";">
    <div id="jspsych-vsl-grid-scene-table-cell-0-4" style="width: 200px; height: 200px;"></div></td></tr>
    <tr id="jspsych-vsl-grid-scene-table-row-1" css="height: 200px;">
    <td id="jspsych-vsl-grid-scene-table-1-0" style="padding: 20px 20px; border: 0px "#a09c99";">
    <div id="jspsych-vsl-grid-scene-table-cell-1-0" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-1-1" style="padding: 20px 20px; border: 0px "#a09c99";">
    <div id="jspsych-vsl-grid-scene-table-cell-1-1" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-1-2" style="padding: 20px 20px; border: 0px "#a09c99";">
    <div id="jspsych-vsl-grid-scene-table-cell-1-2" style="width: 200px; height: 200px;">
        <video autoplay="true" loop="true" width="200">
        <source src="./video/02_center.mp4" type="video/mp4">
        <source src="./video/02_center.webm" type="video/webm">


    Sorry, your browser doesn't support embedded videos.
    </video></div></td>
    <td id="jspsych-vsl-grid-scene-table-1-3" style="padding: 20px 20px; border: 0px "#a09c99";">
    <div id="jspsych-vsl-grid-scene-table-cell-1-3" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-1-4" style="padding: 20px 20px; border: 0px "#a09c99";">
    <div id="jspsych-vsl-grid-scene-table-cell-1-4" style="width: 200px; height: 200px;"></div></td></tr>
    <tr id="jspsych-vsl-grid-scene-table-row-2" css="height: 200px;">
    <td id="jspsych-vsl-grid-scene-table-2-0" style="padding: 20px 20px; border: 0px "#a09c99";">
    <div id="jspsych-vsl-grid-scene-table-cell-2-0" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-2-1" style="padding: 20px 20px; border: 0px "#a09c99";">
    <div id="jspsych-vsl-grid-scene-table-cell-2-1" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-2-2" style="padding: 20px 20px; border: 0px "#a09c99";">
    <div id="jspsych-vsl-grid-scene-table-cell-2-2" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-2-3" style="padding: 20px 20px; border: 0px "#a09c99";">
    <div id="jspsych-vsl-grid-scene-table-cell-2-3" style="width: 200px; height: 200px;"></div></td>
    <td id="jspsych-vsl-grid-scene-table-2-4" style="padding: 20px 20px; border: 0px "#a09c99";">
    <div id="jspsych-vsl-grid-scene-table-cell-2-4" style="width: 200px; height: 200px;">
    </div></td></tr></table></div>`

// const PAIRED_ITEMS = [
//     {list_name: LISTS[0], table: PAIRED_1},
//     {list_name: LISTS[1], table: PAIRED_2}
// ];

// const VIDEO_HTML = `
//     <video autoplay="true" width="195">

//          <source src="./video/flower.mp4"
//             type="video/mp4">

//         Sorry, your browser doesn't support embedded videos.
//     </video>`;

function getBaselineItems() {
    return {list_name : "baseline one", table : BASELINE_1};
}

function getAllPairedItems() {
    return {list_name : "paired one", table : PAIRED_ALL};
}

function getAllPrefItems() {
    return {list_name : "pref one", table : PREF_ALL};
}

function getGrabberOneItems() {
    return {list_name : "grabber one", table : GRABBER_1};
}

function getGrabberTwoItems() {
    return {list_name : "grabber two", table : GRABBER_2};
}
