const uploadButton = document.querySelector('button#upload');

// Django streamupload app URL goes here
const upload_url = 'https://web-binary-data.tst.lab.hum.uu.nl/ingest/file/'

uploadButton.addEventListener('click', () => {
    const blob = new Blob(recordedBlobs, {type: 'video/webm'});
    var tokenInput = document.querySelector('input#upload_token');
    console.log(tokenInput.value);
    var formdata = new FormData();
    formdata.append('token', tokenInput.value);
    formdata.append('blob', blob, 'video.webm' );
    console.log(formdata);
    var request = new XMLHttpRequest();
    request.open(
        "POST",
        upload_url,
    )
    request.send(formdata)
});
