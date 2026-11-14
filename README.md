# Epiroc Service Report Manager — Official Signed Releases

Owner-controlled distribution repository for the offline Epiroc Service Report Manager.

## Security
- Releases are approved and signed by the Owner.
- The public verification key is published in `keys/OWNER_PUBLIC_KEY.pem`.
- The Owner private signing key must NEVER be committed, uploaded, attached to an issue, or stored in GitHub Actions.
- Each release manifest carries an ECDSA P-256 signature and SHA-256 digest of the exact application file.
- Client applications verify the signature and digest before offering an update.
- Updates are notification-only: users approve download and installation.
- The application remains usable offline.

## Repository layout
```
/
  README.md
  manifest.json                 # publish only after signing a release
  Epiroc_Service_Report_Manager_Offline_vX_Y.html
  keys/OWNER_PUBLIC_KEY.pem
  tools/sign-release.js
  docs/RELEASE_PROCESS.md
```

## Current status
- Repository created and Owner-controlled release documentation committed.
- Public verification key and offline signing utility committed.
- The v3.5 HTML application and signed manifest are NOT yet published.
- GitHub Pages is NOT yet enabled.
- Repository name currently includes a leading hyphen; recommended final name: `epiroc-srm-updates`.

## Owner release checklist
1. Review and test the release HTML.
2. Upload the exact HTML release file.
3. Calculate SHA-256 and sign the canonical manifest using the Owner private key on the Owner's trusted computer.
4. Verify the signature locally with the embedded public key.
5. Publish the signed manifest.
6. Confirm GitHub Pages URLs return the expected files.
7. Test from a separate installation, including a tampered-file rejection test.

Never publish private keys, customer reports, fleet records, access packages, passwords or personal data in this repository.

See [docs/RELEASE_PROCESS.md](docs/RELEASE_PROCESS.md) for the release procedure.
