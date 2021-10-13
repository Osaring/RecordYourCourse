const PPTX = require('node-pptx');
let pptx = new PPTX.Composer();
 
await pptx.compose(pres => {
  pres.addSlide(slide => {
    slide.addText(text => {
      text.value('Hello World');
    });
  });
});
 
await pptx.save(`./hello-world.pptx`);
/
await pres.addSlide(slide => {
    // declarative way of adding an object
    slide.addText(text => {
      text
        .value('Hello World!')
        .x(100)
        .y(50)
        .fontFace('Alien Encounters')
        .fontSize(20)
        .textColor('CC0000')
        .textWrap('none')
        .textAlign('left')
        .textVerticalAlign('center')
        .line({ color: '0000FF', dashType: 'dash', width: 1.0 })
        .margin(0);
    });
  });