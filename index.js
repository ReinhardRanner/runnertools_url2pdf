const express = require('express');
const puppeteer = require('puppeteer');
const { PassThrough } = require('stream');

const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
    const url = req.query.url;
    
    if (!url) {
        return res.status(400).send('URL is required');
    }

    try {
        const browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: 'networkidle2' });
        const pdfBuffer = await page.pdf({ format: 'A4' });
        await browser.close();

        const pdfStream = new PassThrough();
        pdfStream.end(pdfBuffer);

        res.setHeader('Content-Type', 'application/pdf');
        pdfStream.pipe(res);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while generating the PDF');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
