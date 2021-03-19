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
// const BASELINE_1 = [
//     {
//         id: 1, 
//         item_type: BASELINE, 
//         sound_fn: "./sounds/testtune.mp3",
//         image_fn_left: "./images/simple1.png",
//         image_fn_right: "./images/simple2.png"
//     },
//     {
//         id: 2, 
//         item_type: BASELINE, 
//         sound_fn: "./sounds/testtune.mp3",
//         image_fn_left: "./images/complex1.png",
//         image_fn_right: "./images/complex2.png"
//     }
// ];

const BASELINE_1 = [
    {
        id: 1, 
        item_type: BASELINE, 
        sound_fn: "./sounds/testtune.mp3",
        image_fn_left: "./images/circle_complex_movement.gif",
        image_fn_right: "./images/circle_complex_movement.gif"
    },
    {
        id: 2, 
        item_type: BASELINE, 
        sound_fn: "./sounds/testtune.mp3",
        image_fn_left: "./images/circle_simple_movement.gif",
        image_fn_right: "./images/circle_simple_movement.gif"
    }
];

// // baseline items 2
// const BASELINE_2 = [
//     {
//         id: 1, 
//         item_type: BASELINE, 
//         sound_fn: "./sounds/testtune.mp3",
//         image_fn_left: "./images/simple2.png",
//         image_fn_right: "./images/complex2.png"  
//     },
//     {
//         id: 2, 
//         item_type: BASELINE, 
//         sound_fn: "./sounds/testtune.mp3",
//         image_fn_left: "./images/complex1.png",
//         image_fn_right: "./images/simple1.png"    
//     }
// ];

// Paired succesion items
const PAIRED_1 = [
    {
        id: 1, 
        item_type: PAIRED_SUCCESION, 
        sound_fn: "./sounds/testtune.mp3",
        image_fn_left: "./images/simple1.png",
        image_fn_right: "./images/complex1.png"
    },
    {
        id: 2, 
        item_type: PAIRED_SUCCESION, 
        sound_fn: "./sounds/testtune.mp3",
        image_fn_left: "./images/complex3.png",
        image_fn_right: "./images/simple3.png"   
    }
];

// const PAIRED_2 = [
//     {
//         id: 1, 
//         item_type: PAIRED_SUCCESION, 
//         sound_fn: "./sounds/testtune.mp3",
//         image_fn_left: "./images/simple3.png",
//         image_fn_right: "./images/complex3.png"  
//     },
//     {
//         id: 2, 
//         item_type: PAIRED_SUCCESION, 
//         sound_fn: "./sounds/testtune.mp3",
//         image_fn_left: "./images/comlex1.png",
//         image_fn_right: "./images/simple1.png",    
//     }
// ];


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

