const puppeteer = require('puppeteer')

describe('Tipos de espera', () => {

    it('Mostrar los tipos de espera', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,//expanda al tam de la ventana
            slowMo: 500
           
        })

        const page = await browser.newPage()
        //espera para la navegacion 2 coenxiones, 0 conexiones
        await page.goto('https://platzi.com', {waitUntil: 'networkidle2'})

      //espera explicita

       await new Promise(r => setTimeout(r, 3000));

      //Espera por un css selector

      await page.waitForSelector('#Header-v2 > nav > div.Logo > div > a > div > figure:nth-child(1) > img');

     //espera por un xpath selector 

     await page.waitForXPath('//*[@id="Header-v2"]/nav[1]/div[1]/div/a/div/figure/img');


     const page2 = await browser.newPage()

     await page2.goto('https://demoqa.com/modal-dialogs', {waitUntil: 'networkidle2'});
     //se espera un selector y se le pasa un objeto  este que sea visible no solo en el DOM sino visible    
    
       await page2.waitForSelector('#showSmallModal', {visible: true});

       //se espera un selector y se le pasa un objeto  es el oculto 
    
      // await page.waitForSelector('#showSmallModal', {hidden: true});

     
      //el click solo recive selector css
     // await page2.click('#showSmallModal');
      await new Promise(r => setTimeout(r, 5000));
      //otra forma de usar xpath

      const button =  await page2.waitForXPath('//*[@id="showSmallModal"]');

      await button.click();

      await new Promise(r => setTimeout(r, 5000));


      //espera por funcion 

      await page2.waitForFunction(()=> document.querySelector('#example-modal-sizes-title-sm').innerText === 'Small Modal');

      //ejemplo para observar el viewport

        const observaResize = page2.waitForFunction('window.innerWidth < 100')
        await page.setViewport({width: 50, height: 50});
        await observaResize

        await browser.close()

         

    }, 35000)
})