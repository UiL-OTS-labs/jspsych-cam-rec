const uploadButton = document.querySelector('button#upload');
const startButton = document.querySelector('button#start');


// Django streamupload app URL goes here
const upload_url = 'https://web-binary-data.tst.lab.hum.uu.nl/ingest/file/'

uploadButton.addEventListener('click', () => {
    
    uploadButton.textContent = 'Upload gestart'
    uploadButton.disabled = true
    
    // Set up variables
    const blob = new Blob(recordedBlobs, {type: 'video/webm'});
    var tokenInput = document.querySelector('input#upload_token');
    
    // Set up form data
    var formdata = new FormData();
    formdata.append('token', tokenInput.value);
    formdata.append('blob', blob, 'video.webm' );
    
    // POST form data
    var request = new XMLHttpRequest();
    request.open(
        "POST",
        upload_url,
    )
    request.send(formdata)
    
    request.onload = function(e) {
        console.log(e)
        text = 'Het uploaden is voltooid. Het wordt op prijs gesteld als u alsnog op "Opslaan" drukt om een eigen kopie van de opname te bewaren, als u dat nog niet gedaan hebt.'
        updateStatus(text)
        uploadButton.textContent = 'Uploaden'
        uploadButton.disabled = false
    }
    
});

const status_p = document.querySelector('p#status_paragraph');

function updateStatus(text='&nbsp') {
    status_p.innerHTML = text;
}

startButton.addEventListener('click', () => {
    
    // Change status message
    text = 'De camera staat aan, <strong>maar de opname is nog niet begonnen.</strong> Breng de deelnemer(s) zo goed mogelijk in beeld en druk vervolgens op "Begin opname".<br /> Daarna kunt u het experiment vervolgen.'
    updateStatus(text);
    
});

