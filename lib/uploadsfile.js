const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const SFILE_URL = 'https://sfile.mobi';
const EMAIL = global.Email; // Ganti dengan email kamu
const PASSWORD = global.Pass; // Ganti dengan password kamu

const directory = path.join(__dirname, '../database/filehc');

// Fungsi untuk merename file dengan menambahkan timestamp di belakang nama
function renameFile(filename) {
  const fileExtension = path.extname(filename);
  const fileNameWithoutExt = path.basename(filename, fileExtension);

  // Menambahkan timestamp di belakang nama file sebelum ekstensi
  const newFileName = `${fileNameWithoutExt}_${Date.now()}${fileExtension}`;
  const oldFilePath = path.join(directory, filename);
  const newFilePath = path.join(directory, newFileName);

  fs.renameSync(oldFilePath, newFilePath);
  console.log(`[SFILE] ✅ File berhasil di-rename menjadi: ${newFileName}`);

  return newFileName; // Kembalikan nama file yang baru
}

async function uploadFile(filename) {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  try {
    console.log(`[SFILE] ➔ Login ke Sfile.mobi...`);
    await page.goto(`${SFILE_URL}/login.php`, { waitUntil: 'domcontentloaded' });
    await page.type('input[name="mail"]', EMAIL);
    await page.type('input[name="pass"]', PASSWORD);
    await page.click('input[name="LogIn"]');

    // Tunggu halaman login success
    await page.waitForFunction(
      `window.location.href === "${SFILE_URL}/user/"`,
      { timeout: 60000 }
    );
    console.log(`[SFILE] ✅ Login berhasil!`);

    // Akses halaman upload
    await page.goto(`${SFILE_URL}/upload`, { waitUntil: 'domcontentloaded' });

    // Tunggu tombol browse
    await page.waitForSelector('#upbrowse');
    const browseButton = await page.$('#upbrowse');
    await browseButton.click();

    // Tunggu input file muncul
    const fileInput = await page.waitForSelector('input[type="file"]');

    let filePath = path.join(directory, filename);
    if (!fs.existsSync(filePath)) {
      console.error(`[SFILE] ❌ File tidak ditemukan: ${filename}`);
      await browser.close();
      return null;
    }

    // Rename file sebelum upload
    const newFilename = renameFile(filename);
    filePath = path.join(directory, newFilename); // Update path dengan nama file yang baru

    // Upload file
    await fileInput.uploadFile(filePath);
    console.log(`[SFILE] ✅ File di-upload: ${newFilename}`);

    // Tunggu file ditambahkan di list
    await page.waitForFunction(
      `document.getElementById("uplist").innerHTML.includes("${newFilename}")`,
      { timeout: 60000 }
    );
    console.log(`[SFILE] ✅ File masuk daftar upload`);

    // Klik tombol Upload
    const uploadButton = await page.$('#upLoad');
    await uploadButton.click();
    console.log(`[SFILE] ✅ Tombol upload di-klik`);

    // Tunggu link download muncul
    await page.waitForSelector('input[type="text"]', { timeout: 60000 });

    const downloadLink = await page.$eval('input[type="text"]', el => el.value);
    console.log(`[SFILE] 🔗 Link download: ${downloadLink}`);

    // Menghapus file yang telah berhasil di-upload
    fs.unlinkSync(filePath);
    console.log(`[SFILE] ✅ File berhasil dihapus setelah upload.`);

    await browser.close();
    return downloadLink;

  } catch (error) {
    console.error(`[SFILE] ❌ Error upload ${filename}:`, error.message);
    await browser.close();
    return null;
  }
}

module.exports = { uploadFile };
