//importar puppeteer
const puppeteer = require('puppeteer');
//escribi x para no lanzar esta prueba
xdescribe('Mi primer test en puppeteer', () => {

	//time out 
	//jest.setTimeout(100000)
	it('Debe abrir y cerrar el navegador', async () => {
		const browser = await puppeteer.launch({
				// headless: true hace que no se habara el navegador y que las pruebas sean
            // más rápidas, el headless: false siempre nos abre el navegador
			headless: false, // true no se observa 
			    // slowMo nos indica en cámara lenta
			slowMo: 0,
				// devtools por defecto es false, si es true nos abre el devtools en el navegador
			devtools: false,
				// defaultViewport es un objeto con als dimensioens del viewport
			// defaultViewport: {
			// 	width: 2100,
			// 	height: 1080,
			// 	},
				    // argumentos en forma de array de la prueba
				//	args: [
						// '--window-size=1920,1080', // tamaño de la ventana],
			// máximiza el viewport de la página al tamaño de la ventana
           defaultViewport:null
		});
		const page = await browser.newPage();
		await page.goto('https://github.com/');
        new Promise(r => setTimeout(r, 5000));
		await page.waitForSelector('img')
//recargar la pagina del navegador
		await page.reload();
		//navegar  a otro sitio
		await page.goto('https://platzi.com/');

		await page.waitForSelector('#Header-v2 > nav > div.Logo > div > a > div > figure:nth-child(1) > img')
		
		//navegar hacia atras

		await page.goBack()
		await page.goForward()
	//	await page.waitForSelector('img')

//abrir otra pagina

const page2 = await browser.newPage()
 await  page2.goto('https://google.com/')

		await browser.close();
	}, 30000);
});

