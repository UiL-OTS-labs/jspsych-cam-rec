const uploadButton = document.querySelector('button#download');
const tokenInput = document.querySelector('input#upload_token');

// Django streamupload app URL goes here
const upload_url = 'http://localhost:8000/ingest/file/'


// this function does not work yet, it's been a while since I did raw JS
// - Michael
uploadButton.addEventListener('click', () => {
    const blob = new Blob(recordedBlobs, {type: 'video/webm'});
    var fd = new FormData();
    formdata.append('token', tokenInput.value);
    formdata.append('blob', blob, 'video.webm' );
    var request = XMLHttpRequest.open(
        "POST",
        upload_url,
    )
    request.send()
});
