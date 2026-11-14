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

## Published release layout
```
/
  README.md
  manifest.json
  releases/
    Epiroc_Service_Report_Manager_Offline_v3_5.html
  keys/OWNER_PUBLIC_KEY.pem
  tools/sign-release.js
  docs/RELEASE_PROCESS.md
```

## Current status
- Repository is public: `johnbenyarko1-lab/epiroc-srm-updates`.
- Owner public verification key, signing utility and release instructions are published.
- Epiroc Service Report Manager v3.5 HTML and its signed manifest have been committed.
- The v3.5 manifest SHA-256 matches the local v3.5 HTML file.
- GitHub Pages deployment is shown as successful in the repository.
- End-to-end browser update verification and tampered-file rejection testing are still pending.

## Release checklist
1. Review and test the release HTML.
2. Upload the exact HTML release file.
3. Calculate SHA-256 and sign the canonical manifest using the Owner private key on the Owner's trusted computer.
4. Verify the signature locally with the embedded public key.
5. Publish the signed manifest.
6. Confirm GitHub Pages URLs return the expected files.
7. Test from a separate installation, including a tampered-file rejection test.

Never publish private keys, customer reports, fleet records, access packages, passwords or personal data in this repository.

See [docs/RELEASE_PROCESS.md](docs/RELEASE_PROCESS.md) for the release procedure.
