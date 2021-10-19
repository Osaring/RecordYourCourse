export const PPTX = require('node-pptx');
let pptx = new PPTX.Composer();
 
await pptx.compose(pres => {
  pres.addSlide(slide => {
    slide.addText(text => {
      text.value('Hello World');
    });
  });
});
 
await pptx.save(`./hello-world.pptx`);
