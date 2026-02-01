const { chromium } = require("playwright");
const path = require("path");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // NOTE: Your file is named "Index.html" (capital I), so we use that exact name.
  const filePath = path.resolve(__dirname, "..", "Index.html");
  await page.goto(`file://${filePath}`, { waitUntil: "networkidle" });

  await page.pdf({
    path: path.resolve(__dirname, "..", "assets", "CLEAR-Execution-Framework.pdf"),
    format: "Letter",
    printBackground: true,
    margin: { top: "0.6in", right: "0.6in", bottom: "0.6in", left: "0.6in" }
  });

  await browser.close();
  console.log("PDF created: assets/CLEAR-Execution-Framework.pdf");
})();
