const puppeteer = require('puppeteer');

async function convertToPDF() {
    const browser = await puppeteer.launch({headless : "new"});
    const page = await browser.newPage();

    // Set the content of the page to your HTML content
    await page.setContent(`
    <!DOCTYPE html>
    <html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div>
        <img src="C:/Users/Kaivan/Desktop/shalibhadra/img.jgp.jpeg" alt="Image Description">
        <h1 align="right">Shree Shalibhadra foundation</h1>
    </div>
    <hr>
    <center>
        payment recipt
    </center>
    <div class="oo">
        <p>Recipt no:1008</p>
        <p align="right">date:10.203.292</p>

    </div>
    <div>
        <h2>Name:Sahil Mahveer jagawat</h2>
    </div>
    <center>
        <table border="1" style="width:80%">
            <tr>
                <td>Sr.No</td>
                <td colspan="2">....Description.....</td>
                <td>Amount</td>
            </tr>
            <tr>
                <td>Cell 3</td>
                <td colspan="2">Cell 28</td>

                <td>Cell 30</td>
            </tr>
            <tr>
                <td>Cell 7</td>
                <td colspan="2">Cell 28</td>

                <td>Cell 30</td>
            </tr>
            <tr>
                <td>Cell 11</td>
                <td colspan="2">Cell 28</td>

                <td>Cell 30</td>
            </tr>
            <tr>
                <td>Cell 15</td>
                <td colspan="2">Cell 28</td>

                <td>Cell 30</td>
            </tr>
            <tr>
                <td>Cell 19</td>
                <td colspan="2">Cell 28</td>

                <td>Cell 30</td>
            </tr>
            <tr>
                <td>Cell 23</td>
                <td colspan="2">Cell 28</td>

                <td>Cell 30</td>
            </tr>
            <tr>
                <td>Cell 27</td>
                <td colspan="2">Cell 28</td>

                <td>Cell 30</td>
            </tr>
            <tr>
                <td>Cell 31</td>
                <td colspan="2">Cell 28</td>

                <td>Cell 30</td>
            </tr>
            <tr>
                <td>Cell 35</td>
                <td colspan="2">Cell 28</td>

                <td>Cell 30</td>
            </tr>
            <tr>
                <td>Cell 39</td>
                <td colspan="2">Cell 28</td>

                <td>Cell 30</td>
            </tr>
        </table>
    </center>
    <h3>Total amount:$111111</h3>
    <h3>Amount in word:1 billion dollars.</h3>
    <br>
    <br>
    <br>
    <hr>
    <p align="right">trustee Sign</p>
    <br><br><br>
    <center>
        Shree Shalibhadra foundation
    </center>
    <p>D-10,Room no 10...............................</p>
    // <script src="PDF.js"></script>
</body>
  </html>
    `);

    // Generate the PDF
    await page.pdf({ path: 'output.pdf', format: 'A4' });

    await browser.close();
}

convertToPDF();
