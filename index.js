import puppeteer from "puppeteer";
import fs from "fs/promises"

// async function openWebPage() {
//    const browser = await puppeteer.launch({
//     headless: 'false',
//     slowMo: 400
//    })
//    const page = await browser.newPage()
// await page.goto('https://example.com')
// await browser.close()

// }

// async function captureScreenShoot() {
//     const browser = await puppeteer.launch({
//      headless: 'false',
//      slowMo: 400
//     })
//     const page = await browser.newPage()
//  await page.goto('https://example.com')
//  await page.screenshot({path: 'example.png'})
//  await browser.close()
 
//  }

//  captureScreenShoot() 
// openWebPage()

// async function navigateWebPage() {
//     const browser = await puppeteer.launch({
//      headless: 'false',
//      slowMo: 400
//     })
//     const page = await browser.newPage()
//  await page.goto('https://quotes.toscrape.com')
//  await page.click('a[href = "/login"]')
//  await new Promise(r=>setTimeout(r,3000))


//  await browser.close()
 
//  }

//  navigateWebPage()
//  async function getDataFromPage() {
//     const browser = await puppeteer.launch({
//      headless: 'false',
//      slowMo: 400
//     })
//     const page = await browser.newPage()
//  await page.goto('https://example.com')
// const result = await page.evaluate(()=>{
//     const title = document.querySelector('h1').innerText
//     const description = document.querySelector('p').innerText
//     const more = document.querySelector('a').innerText

//     return {
//         title,
//         description,
//         more
//     }
// })
// console.log(result);


//  await browser.close()
 
//  }

//  getDataFromPage()

 

 async function handleDynamicWebPage() {
    const browser = await puppeteer.launch({
     headless: 'false',
     slowMo: 600
    })
    const page = await browser.newPage()
 await page.goto('https://quotes.toscrape.com')
const result = await page.evaluate(()=>{
    const quotes = document.querySelectorAll('.quote')
    const data = [...quotes].map(quote=>{

       const quoteText =  quote.querySelector('.text').innerText
       const author =  quote.querySelector('.author').innerText
       const tags =  [...quote.querySelectorAll('.tag')].map(tag =>tag.innerText)
return{
    quoteText,
    author,
    tags
}


    });
    return data
 
});
await fs.writeFile('quotes.Json',JSON.stringify(result, null , 2))

 await browser.close()
 
 }

 handleDynamicWebPage()
