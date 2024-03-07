import puppeteer from "puppeteer";
import { EMAIL } from "./email.mjs";
import { USERNAME } from "./name.mjs";
import path from 'path';

// ONLY PASTE APIKEY inside " ". that's all
const API_KEY = "free-api-acf68b62-041c-9087-3d88-1d049239ec9b";
const UID = "NO-NEED";

global.baseURL = 'https://generator.email';
global.baseURLstorj = 'https://eu1.storj.io';
// utility
const wait = (ms) => {
  return new Promise(res =>
      setTimeout(res, ms)
  )
}

// We're creating the a new directory inside current directory where the file will be downloaded
const downloadPath = path.resolve('./tmp');

const main = async () => {
  const pathToExtension = path.join(process.cwd(), './noCaptcha');
  for (let i = 0; i < USERNAME.length; i++) {
    for (let i = 0; i < USERNAME.length; i++) {
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      `--disable-extensions-except=${pathToExtension}`,
      `--load-extension=${pathToExtension}`,
    ],
  });
  const page = await browser.newPage();

 // const USERNAME = 'Yayan Tumena'
  //const EMAIL = 'carangul@stinkypoopoo.com'
  const PASSWORD = 'Ber217an!@#'
  const REPASSWORD = 'Ber217an!@#'
  const isi = 'default'
  const lompat = 'login'
  const daftar = 'signup'

  const client = await page.target().createCDPSession();
  await page.goto(baseURLstorj + '/' + daftar);

  // Set screen size
  await page.setViewport({width: 960, height: 550});

  console.log('Proses Buat Akun')
  await page.type('input[id="Full Name"]', USERNAME[i], {delay: 100});
  await page.type('input[id="Email Address"]', EMAIL[i], {delay: 100});
  await page.type('input[id="Password"]', PASSWORD, {delay: 100});
  await page.type('input[id="Retype Password"]', REPASSWORD, {delay: 100});
  
//======checkbox ceklist===========
  await wait(2 * 2000)
  const checkReg = await page.$('input[type="checkbox"]')
  await checkReg.evaluate(b => b.click());
  await wait(2 * 2000)

//======submit button==========
  await page.evaluate(() => {
    document.querySelector("#app > div > div > div.register-area__input-area > div > div.register-area__input-area__container__button.container").click();
});

  // console.log('Wait Solve Chaptcha.........')
  // await wait(5 * 2000)
  // await solveCaptcha(page, API_KEY, UID, "pro");
  // await wait(40 * 2000)
  console.log('Berhasil Registrasi....')
//============Konfirmasi Email====================
  await wait(10 * 2000)
  await page.goto(baseURL + '/' + EMAIL[i]);

  await wait(10 * 2000)
  await page.evaluate(() => {
    document.querySelector("#email-table > div.e7m.row.list-group-item > div.e7m.col-md-12.ma1 > div.e7m.mess_bodiyy > table > tbody > tr > td > div:nth-child(1) > div > div > div > div > div > div:nth-child(2) > div > p:nth-child(4)").click();
});
  await wait(10 * 2000)
  await page.evaluate(() => {
    document.querySelector("#email-table > div.e7m.row.list-group-item > div.e7m.col-md-12.ma1 > div.e7m.mess_bodiyy > table > tbody > tr > td > div:nth-child(1) > div > div > div > div > div > div:nth-child(2) > div > p:nth-child(4) > span > a").click();
});
  console.log('Konfirmasi Email Selesai....')
//==========Bagian Tersulit=================
  await wait(5 * 2000)
  await page.goto('https://eu1.storj.io/login');
  console.log('Mencoba Login Ulang')
  await page.type('input[id="Email Address"]', EMAIL[i], {delay: 100});
  await page.type('input[id="Password"]', PASSWORD, {delay: 100});

//======Login submit button==========
  await page.evaluate(() => {
    document.querySelector("#app > div > div.login-area__content-area > div > div.login-area__content-area__container__button.container").click();
});
  console.log('Login Berhasil!!!!')
//=====Generate pharse==========
  console.log('Generate Pharse....')
  await wait(5 * 2000)
  await page.evaluate(() => {
    document.querySelector("#app > div > div:nth-child(2) > div > div > div > div.modal > div.modal__buttons > div:nth-child(2)").click();
  });

  await wait(2 * 2000)
  await page.evaluate(() => {
    document.querySelector("#app > div > div:nth-child(2) > div > div > div > div.modal > div.modal__save-container > div.modal__save-container__check").click();
  });

  await wait(2 * 2000)
  await page.evaluate(() => {
    document.querySelector("#app > div > div:nth-child(2) > div > div > div > div.modal > div.modal__buttons > div:nth-child(2)").click();
  });

  await wait(2 * 2000)
  await page.evaluate(() => {
    document.querySelector("#app > div > div:nth-child(2) > div > div > div > div.modal > div.modal__buttons > div").click();
  });
    console.log('Generate Pharse Selesai')
//========Create Bucket===================
  console.log('Membuat Bucket.....')
  await wait(5 * 2000)
  await page.evaluate(() => {
    document.querySelector("#app > div > div.dashboard__wrap > div > div.navigation-area.dashboard__wrap__main-area__navigation > div > div.navigation-area__container__wrap > a:nth-child(6) > div").click();
  });

  await wait(3 * 2000)
  await page.evaluate(() => {
    document.querySelector("#app > div > div:nth-child(2) > div > div > div > div.modal > div.modal__button-container > div:nth-child(2)").click();
  });
  console.log('Bucket Selesai Dibuat')
//========Create Akses Key===================
  console.log('Membuat Akses Key')
  await wait(5 * 2000)
  await page.evaluate(() => {
    document.querySelector("#app > div > div.dashboard__wrap > div > div.navigation-area.dashboard__wrap__main-area__navigation > div > div.navigation-area__container__wrap > a:nth-child(7) > div").click();
  });

  await wait(3 * 2000)
  await page.evaluate(() => {
    document.querySelector("#app > div > div.dashboard__wrap > div > div.dashboard__wrap__main-area__content-wrap > div > div.access-grants.dashboard__wrap__main-area__content-wrap__container__content > div.access-grants__flows-area > div.access-grants__flows-area__s3-credentials > div.access-grants__flows-area__button-container > div").click();
  });

  await page.type('input[class="create-access__fragment__wrap__input"]', isi, {delay: 100});

  await wait(2 * 2000)
  const check = await page.$('input[id="permissions__all-check"]')
  await check.evaluate(b => b.click());

  await wait(2 * 2000)
  await page.evaluate(() => {
    document.querySelector("#app > div > div.dashboard__wrap > div > div.dashboard__wrap__main-area__content-wrap > div > div.access-grants.dashboard__wrap__main-area__content-wrap__container__content > div.mask > div > div > div.create-access > div.create-access__buttons > div").click();
  });

  await wait(2 * 2000)
  await page.evaluate(() => {
    document.querySelector("#app > div > div.dashboard__wrap > div > div.dashboard__wrap__main-area__content-wrap > div > div.access-grants.dashboard__wrap__main-area__content-wrap__container__content > div.mask > div > div > div.info > div.info__buttons > div:nth-child(2)").click();
  });

  await wait(2 * 2000)
  const radio = await page.$('input[type="radio"]')
  await radio.evaluate(b => b.click());
  await wait(2 * 2000)

  await wait(2 * 2000)
  await page.evaluate(() => {
    document.querySelector("#app > div > div.dashboard__wrap > div > div.dashboard__wrap__main-area__content-wrap > div.dashboard__wrap__main-area__content-wrap__container > div.access-grants.dashboard__wrap__main-area__content-wrap__container__content > div.mask > div > div > div.encrypt > div.encrypt__footer-container.in-middle > div > div.encrypt__footer-container__buttons__copy-button.container.transparent").click();
  });

  await wait(2 * 2000)
  const checkTerm = await page.$('input[type="checkbox"]')
  await checkTerm.evaluate(b => b.click());
 
  console.log('Akses Key Dibuat')
  await wait(2 * 2000)
  await page.evaluate(() => {
    document.querySelector("#app > div > div.dashboard__wrap > div > div.dashboard__wrap__main-area__content-wrap > div > div.access-grants.dashboard__wrap__main-area__content-wrap__container__content > div.mask > div > div > div.encrypt > div.encrypt__footer-container.in-middle > div:nth-child(3) > div.encrypt__footer-container__buttons__download-button.container").click();
  });

  console.log('Download File')
  await wait(5 * 2000)
  // const client = await page.target().createCDPSession()
  // await client.send('Page.setDownloadBehavior', {
  //   behavior: 'allow',
  //   downloadPath: './tmp',
  // });
  await client.send('Page.setDownloadBehavior', {
    behavior: 'allow',
    downloadPath: downloadPath
});
  await page.evaluate(() => {
    document.querySelector("#app > div > div.dashboard__wrap > div > div.dashboard__wrap__main-area__content-wrap > div > div.access-grants.dashboard__wrap__main-area__content-wrap__container__content > div.mask > div > div > div.grants > div.grants__buttons > div").click();
  });

//===========logout==================
await wait(1 * 2000)
await page.evaluate(() => {
  document.querySelector("#app > div > div.dashboard__wrap > div > div.navigation-area.dashboard__wrap__main-area__navigation > div > div.account-area > div > div").click();
});
console.log('Berhasil Buat Akun')
await wait(1 * 2000)
await page.evaluate(() => {
  document.querySelector("#app > div > div.dashboard__wrap > div > div.navigation-area.dashboard__wrap__main-area__navigation > div > div.account-area > div.account-area__dropdown > div:nth-child(4)").click();
});
//====close browser========
  await browser.close();
}}
};
main();