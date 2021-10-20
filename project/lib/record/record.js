import { importPresentation } from '../importFile/importPPT.js';

/* globals MediaRecorder */
var mediaRecorder;
var recordedBlobs;

const codecPreferences = document.querySelector('#codecPreferences');
const errorMsgElement = document.querySelector('span#errorMsg');
const recordedVideo = document.querySelector('#recorded');
const stopRecordButton = document.querySelector('button#stop-record');
const downloadButton = document.querySelector('button#download');

const recordInProgress = document.querySelector('div#record-in-progress');
const downloadRecordFormat = document.querySelector('div#download-record-format');

// start buttons
const startRecordPPT = document.querySelector('img#button-start-PPT');
const startRecordLO = document.querySelector('img#button-start-LO');
const startRecordAR = document.querySelector('img#button-start-AR');

startRecordPPT.addEventListener('click', async () => {
  if (startRecordPPT.disabled) {
    alert("Un enregistrement est déjà en cours");
    return;
  } else {
    startButtonDisabled();
    downloadRecordFormat.disabled = true;
  }

  // alert("Sélectionner le diapo que vous voulez présenter")
  if (importPresentation() === "") { // No file imported
    startButtonEnabled();
    alert("Aucun fichier sélectionné, veullez recommencer")
  } else await parameters(); // Continue program (confirmation message)
});

startRecordLO.addEventListener('click', async () => {
  if (startRecordLO.disabled) {
    alert("Un enregistrement est déjà en cours");
    return;
  } else startButtonDisabled();
  await parameters();
});
startRecordAR.addEventListener('click', async () => {
  if (startRecordAR.disabled) {
    alert("Un enregistrement est déjà en cours");
    return;
  }
  else startButtonDisabled();
  await parameters();
});

async function parameters() {
  if (window.confirm("Confirmer pour lancer la caméra et l'enregistrement")) {
  } else {
    alert("Arrêt de l'enregistrement");
    return;
  }
  const hasEchoCancellation = document.querySelector('#echoCancellation').checked;
  const constraints = {
    audio: {
      echoCancellation: {exact: hasEchoCancellation}
    },
    video: {
      width: 1280, height: 720
    }
  };
  console.log('Using media constraints:', constraints);
  await init(constraints);
  recordInProgress.hidden = false;
  startRecording();
};

// event stop record
stopRecordButton.addEventListener('click', () => {
    stopRecording();
    downloadButton.disabled = false;
    codecPreferences.disabled = false;
    recordInProgress.hidden = true;
    downloadRecordFormat.disabled = false;
    startButtonEnabled();
});

function stopRecording() {
  mediaRecorder.stop();
  const gumVideo = document.querySelector('video#gum');
  gumVideo.srcObject = null;
  stopRecordButton.disabled = true;
  closeWebcamConnection();
}
function closeWebcamConnection(){
  stream.getTracks().forEach(function(track) {
    track.stop();
  })
}

downloadButton.addEventListener('click', () => {
  const blob = new Blob(recordedBlobs, {type: 'video/webm'});
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = 'test.webm';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 100);
});

// save video in array recordedBlobs
function handleDataAvailable(event) {
  console.log('handleDataAvailable', event);
  if (event.data && event.data.size > 0) {
    recordedBlobs.push(event.data);
  }
}

function getSupportedMimeTypes() {
  const possibleTypes = [
    'video/webm;codecs=vp9,opus',
    'video/webm;codecs=vp8,opus',
    'video/webm;codecs=h264,opus',
    'video/mp4;codecs=h264,aac',
  ];
  return possibleTypes.filter(mimeType => {
    return MediaRecorder.isTypeSupported(mimeType);
  });
}

async function init(constraints) {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleSuccess(stream);
  } catch (e) {
    console.error('navigator.getUserMedia error:', e);
    errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
  }
}

function startRecording() {
  recordedBlobs = [];
  const mimeType = codecPreferences.options[codecPreferences.selectedIndex].value;
  const options = {mimeType};

  try {
    mediaRecorder = new MediaRecorder(window.stream, options);
  } catch (e) {
    console.error('Exception while creating MediaRecorder:', e);
    errorMsgElement.innerHTML = `Exception while creating MediaRecorder: ${JSON.stringify(e)}`;
    return;
  }

  console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
  downloadButton.disabled = true;
  codecPreferences.disabled = true;
  mediaRecorder.onstop = (event) => {
    console.log('Recorder stopped: ', event);
    console.log('Recorded Blobs: ', recordedBlobs);
  };
  mediaRecorder.ondataavailable = handleDataAvailable;
  mediaRecorder.start();
  console.log('MediaRecorder started', mediaRecorder);
}

function handleSuccess(stream) {
  stopRecordButton.disabled = false;
  console.log('getUserMedia() got stream:', stream);
  window.stream = stream;

  const gumVideo = document.querySelector('video#gum');
  gumVideo.srcObject = stream;

  getSupportedMimeTypes().forEach(mimeType => {
    const option = document.createElement('option');
    option.value = mimeType;
    option.innerText = option.value;
    codecPreferences.appendChild(option);
  });
  codecPreferences.disabled = false;
}

// deactivate/activate start button
function startButtonDisabled(){
  startRecordPPT.disabled = true;
  startRecordLO.disabled = true;
  startRecordAR.disabled = true;
}
function startButtonEnabled(){
  startRecordPPT.disabled = false;
  startRecordLO.disabled = false;
  startRecordAR.disabled = false;
}