# Epiroc Service Report Manager — Official Signed Releases

Owner-controlled distribution repository for the offline Epiroc Service Report Manager.

## Release security

- Application releases must be approved and signed by the Owner.
- The public verification key may be distributed with the application.
- The Owner's private signing key must NEVER be committed, uploaded, attached to an issue, or stored in GitHub Actions.
- Each release manifest must carry a valid ECDSA P-256 signature and the SHA-256 digest of the exact application file.
- Client applications must verify the signature and digest before offering an update.
- Updates are notification-only: users approve download and installation.
- The application remains usable offline.

## Repository layout

```
/
  README.md
  manifest.json                 # publish only after signing a release
  releases/
    Epiroc_Service_Report_Manager_Offline_vX_Y.html
  keys/
    OWNER_PUBLIC_KEY.pem        # public key only
  docs/
    RELEASE_PROCESS.md
```

## Current status

Repository initialised. The v3.5 application and a signed manifest have not yet been published here. GitHub Pages has not yet been enabled.

## Owner release checklist

1. Review and test the release HTML.
2. Calculate SHA-256 for the exact release file.
3. Sign the canonical manifest using the Owner's private key on the Owner's trusted computer.
4. Verify the signature locally with the embedded public key.
5. Upload the HTML, public key and signed manifest.
6. Confirm the GitHub Pages URLs return the expected files.
7. Test update verification from a separate installation, including a tampered-file rejection test.

Never publish private keys, customer reports, fleet records, access packages, passwords or personal data in this repository.
