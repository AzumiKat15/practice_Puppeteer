const puppeteer = require('puppeteer')

xdescribe('Interactuando con elemntos', () => {

    it('Debe abrir', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null//expanda al tam de la ventana
           

        })

        const page = await browser.newPage()
        await page.goto('https://demo.guru99.com/test/simple_context_menu.html')

        //Con esta instruccion le damos aceptar a los alerts que nos salgan en la pagina
        page.on('dialog', async (dialog) => {
            await dialog.accept()
           })

        //click derecho, la siente intrucción pasa una configuración {propiedad booton que le de al derecho lenta 500milesegundos}
         await page.click('#authentication > span', { button: 'right', delay:500})
         new Promise(r => setTimeout(r, 5000))

        //Doble click

        await newFunction()
        new Promise(r => setTimeout(r, 5000))



         await page.goto('https://devexpress.github.io/testcafe/example/')
         //escribe  en el identificador input name
         await page.type('#developer-name', 'Tsuki', { delay: 100 })
         await new Promise(r => setTimeout(r, 3000));
        // await page.click('#windows')
       //checkbot de la pagina 
         await page.click('#remote-testing')
         await page.click('#tried-test-cafe')
         await page.select('#preferred-interface','JavaScript API')
        await page.type('#comments', 'Esto es un comentario', { delay: 100 })
        await page.click('#submit-button')
       

      await new Promise(r => setTimeout(r, 3000));

        await browser.close()



        async function newFunction() {
            await page.click('#authentication > button', { clickCount: 2, delay: 500 })
        }
    }, 350000)
})

//await page.waitForTimeout(3000) reemplace con await new Promise(r => setTimeout(r, 3000));
