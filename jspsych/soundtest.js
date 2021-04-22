// //////////////
// // soundtest
// //////////// 

// // audio test procedure

// let test_audio_looped = {
//     post_trial_gap: DEFAULT_ITI,
//     timeline:
//         [
//             {
//                 type: 'audio-button-response',
//                 stimulus: './sounds/testtune.mp3',
//                 choices: [PLAY_AGAIN_BUTTON_TEXT, NEXT_BUTTON_TEXT],
//                 prompt: function(){
//                     return "<div class='instruction' >" +
//                         '<p>' + AUDIO_CHECK_PROMPT_TEXT_LOOP + '</p></div>'
//                 }
//             }
//         ],
//     loop_function: function(data){
//         if (data.values()[0].button_pressed == 0){
//             return true; // loop again!
//         } else {
//             return false; // continue
//         }
//     },
//     on_finish: function(data) {
//         data.audio_checked = true;
//     }
// };