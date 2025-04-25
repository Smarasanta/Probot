const axios = require("axios");
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

async function generateGroupBanner(ppUrl, overlayPath = './Assets/Sabdo.jpg', savePath = './Assets/banner-thumbsa.jpg') {
    try {
        const [ppBuffer, overlayBuffer] = await Promise.all([
            axios.get(ppUrl, { responseType: 'arraybuffer' }).then(res => Buffer.from(res.data, 'binary')),
            fs.promises.readFile(overlayPath)
        ]);

        // Buat foto profil grup jadi bulat dengan masking alpha
        const circleMask = Buffer.from(
            `<svg><circle cx="150" cy="150" r="150"/></svg>`
        );

        const resizedPP = await sharp(ppBuffer)
            .resize(300, 300)
            .composite([{ input: circleMask, blend: 'dest-in' }])
            .png()
            .toBuffer();

        const background = await sharp(overlayBuffer)
            .resize(800, 450)
            .composite([
                { input: resizedPP, top: 75, left: 250 }
            ])
            .jpeg({ quality: 90 })
            .toBuffer();

        fs.writeFileSync(savePath, background);
        return savePath;
    } catch (err) {
        console.error("❌ Gagal membuat banner dengan overlay:", err.message);
        return null;
    }
}


module.exports = { generateGroupBanner };

