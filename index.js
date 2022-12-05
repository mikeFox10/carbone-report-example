const fs = require('fs');
const carbone = require('carbone');

// data object to inject
let data = {
  denunciante : 'John Wick',
  denunciado: 'John Wick 2',
  autoridadSancionadora: 'John Doe',
  fundamentacionDeLaDecision : `Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 

Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 

Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 



Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick




Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 




Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 



Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 



Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 


Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 



Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick




Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 


Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 


Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 


Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick
Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick Wick 


  `,
  sancion: ` sancion sancion sancion sancion sancion sancion sancion sancion Wick
  sancion sancion sancion sancion sancion sancion sancion sancion sancion sancion Wick


  sancion sancion sancion sancion sancion Wick

  sancion sancion sancion sancion sancion sancion sancion sancion sancion sancion sancion Wick
  sancion sancion sancion sancion sancion Wick

  `


};
/*
// options object is used to pass more parameters to carbone render function 
let options = {
  convertTo: 'pdf' //can be docx, txt, ...
}

carbone.render('./template.odt', data, options, (err, res) => {
    if (err) {
      return console.log(err);
    }
    // fs is used to create the PDF file from the render result
    fs.writeFileSync('./result.pdf', res);
    process.exit();
});
*/

let options = {
  convertTo: 'pdf' //can be docx, txt, ...
}


async function renderPDF() {
await carbone.render('./resolucionAdministrativaTemplate.odt', data, options, (err, res) => {
    if (err) {
      return console.log(err);
    }
    // fs is used to create the PDF file from the render result
    fs.writeFileSync('./result.pdf', res);
    console.log('finish')
});
console.log('terminado')  
return 'finidsss'
}


async function run() {
  const ee = await renderPDF()  
  console.log('1111 ',ee)
}

run()


