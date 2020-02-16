'use strict';

const chromium = require('chrome-aws-lambda');

module.exports.convert = async (event, context) => {

  let browser = null;
  try {
    const { url } = event.queryStringParameters;

    browser = await chromium.puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
        headless: chromium.headless,
      });

    let page = await browser.newPage();

    await page.goto( url || 'https://www.pennymacusa.com/', {
      waitUntil: ["networkidle0", "load", "domcontentloaded"]
    });

    const pdf = await page.pdf();

    return {
        statusCode: 200,
        isBase64Encoded: true,
        headers: {
          'Content-type': 'application/pdf',
          'accept-ranges': 'bytes',
        },
        body: pdf.toString('base64')
      };
    } catch (error) {
    return context.fail(error);
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }
};
