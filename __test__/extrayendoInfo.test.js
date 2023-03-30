const puppeteer = require('puppeteer');


describe('Extrayendo informacion' , () => {
	it('extraer el titulo de la página y la url', async () => {

    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null
    })
   
        const page = await browser.newPage()
        await page.goto('http://platzi.com/', {waitUntil: 'networkidle0'});

        const titulo = await page.title();
        const url = await page.url();

        console.log('titulo', titulo);
        console.log('url', url);

        await browser.close();
	}, 30000);

	it('extraer la información de un elemento', async () => {

        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null
        })
       
            const page = await browser.newPage()
            await page.goto('http://platzi.com/', {waitUntil: 'networkidle0'});

           const images =  await page.$$eval('img', (imagenes)=> imagenes.length)
           console.log('images', images);

            await page.waitForSelector('#Header-v2 > nav.Nav-header.Nav-header-mobileCtas > section > button.Button.Button--medium.Button--sky.Button--primary.Nav-header-mobileCtas-actions--login')
            //corre el queryselector
          const nombreBoton =   await page.$$eval('#Header-v2 > nav.Nav-header.Nav-header-mobileCtas > section > button.Button.Button--medium.Button--sky.Button--primary.Nav-header-mobileCtas-actions--login', (button) => button.textContent)
           console.log('nombre de boton: ', nombreBoton)

         const[button] = await page.$x('//*[@id="Header-v2"]/nav[1]/section/button[2]')
         const propiedad = await button.getProperty('textContent' )
         const texto = await propiedad.jsonValue()

            console.log('Texto', texto)

            //segunda forma

           const texto2 = await page.evaluate((name)=> name.textContent,button )

           console.log('Texto', texto2)

           
            //tercera forma

            const button3 = await page.waitForXPath('//*[@id="Header-v2"]/nav[1]/section/button[2]')
            const texto3 = await page.evaluate((name)=> name.textContent,button3 )
            console.log('Texto', texto3)



            await browser.close();

        }, 30000);

          it('Contar los elementos de una página', ()=>{


          })

});

