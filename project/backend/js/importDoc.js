import {PPTX} from 'pptxFile';


const startRecordPPT = document.querySelector('img#button-start-PPT');

startRecordLO.addEventListener('click', async () => {
    if (startRecordPPT.disabled) { alert("Un enregistrement est déjà en cours."); return; };
    startRecordPPT.disabled = true;
    PPTX();
    await parameters();
  });

