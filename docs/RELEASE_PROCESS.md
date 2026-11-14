# Release process (Owner only)

## Security rules
- Keep OWNER_PRIVATE_KEY.pem offline in encrypted Owner-controlled storage.
- Never commit the private key, access packages, credentials, customer reports or machine records.
- Only publish HTML after testing it.
- Sign the exact final HTML bytes. Do not edit the HTML after signing.
- Publish the HTML first, then publish the signed manifest.
- The app verifies the ECDSA P-256 signature and SHA-256 digest before accepting the release.

## Initial v3.5 publication
1. Upload Epiroc_Service_Report_Manager_Offline_v3_5.html to the repository root.
2. Enable GitHub Pages from main / root.
3. Confirm the public Pages URL for the HTML.
4. On the Owner's trusted computer, run sign-release.js against that exact HTML file, version 3.5, and the final HTTPS Pages URL.
5. Upload the generated manifest.json to the repository root.
6. Configure that manifest URL in v3.5 using the Owner account.
7. Test from a second installation. Also test a modified HTML file and confirm it is rejected.

## Future releases
1. Build and test the next release.
2. Upload the new versioned HTML file.
3. Sign the exact file with the Owner private key.
4. Replace manifest.json only after signing.
5. Confirm update notification and verification from a separate installation.
6. User backs up records, downloads, verifies, and manually opens the new HTML.

## Sign command (Windows PowerShell)
```powershell
node .\sign-release.js .\Epiroc_Service_Report_Manager_Offline_v3_5.html 3.5 https://YOUR-ACCOUNT.github.io/REPOSITORY/Epiroc_Service_Report_Manager_Offline_v3_5.html "Initial signed release" .\OWNER_PRIVATE_KEY.pem
```

The command creates manifest.json beside the HTML. Replace YOUR-ACCOUNT and REPOSITORY with the final Pages address.
