#!/usr/bin/env node
// Epiroc SRM release signer. Node.js 18+; keep the Owner private key offline.
// Usage: node sign-release.js <release.html> <version> <public-download-URL> <release-notes> [private-key.pem]
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');
const [,, file, version, downloadUrl, ...tail] = process.argv;
if (!file || !version || !downloadUrl) { console.error('Usage: node sign-release.js <release.html> <version> <public-download-URL> <release-notes> [private-key.pem]'); process.exit(2); }
if (!/^https:\/\//i.test(downloadUrl)) { console.error('The release URL must use HTTPS.'); process.exit(2); }
const keyPath = tail.length && tail[tail.length - 1].toLowerCase().endsWith('.pem') ? tail.pop() : path.join(__dirname, 'OWNER_PRIVATE_KEY.pem');
const notes = tail.join(' ');
if (!fs.existsSync(keyPath)) { console.error('Owner private key not found:', keyPath); process.exit(2); }
const bytes = fs.readFileSync(file);
const sha256 = crypto.createHash('sha256').update(bytes).digest('hex');
const manifest = { format: 'EPIROC-SRM-RELEASE', version: String(version), issuedAt: new Date().toISOString(), downloadUrl, sha256, releaseNotes: notes };
const payload = JSON.stringify([manifest.format, manifest.version, manifest.issuedAt, manifest.downloadUrl, manifest.sha256, manifest.releaseNotes || '']);
manifest.signature = crypto.sign('sha256', Buffer.from(payload), { key: fs.readFileSync(keyPath), dsaEncoding: 'ieee-p1363' }).toString('base64');
const output = path.join(path.dirname(file), 'manifest.json');
fs.writeFileSync(output, JSON.stringify(manifest, null, 2) + '\n');
console.log('Signed manifest written:', output, '\nVersion:', manifest.version, '\nSHA-256:', sha256, '\nKeep the Owner private key offline; never upload it to GitHub.');
