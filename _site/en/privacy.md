---
layout: 'layouts/article.njk'
title: Privacy — ECS Drive
permalink: /en/privacy/
---

# ECS Drive Privacy Notice

**Last updated: October 13, 2026**

ECS Drive is a private OAuth application used to connect personal backup software to Google Drive. It is not offered as a service to other people.

## Data used

When you authorize the application, Google provides OAuth tokens so the backup software can access Google Drive files created or opened by this application under the `drive.file` permission. The application is not designed to browse other files in your Drive.

The software is designed to encrypt the backup repository on the server before transferring it to Google Drive. Google can observe that an encrypted repository exists, its size, transfer times, and technical information needed to operate Drive; the repository contents remain encrypted by the software.

## Use and storage

OAuth tokens are kept in the protected configuration of the personal server running the backup. Backup files are stored in the authorized Google Drive account. They are not sold or shared with other people. Google processes data under its own terms and privacy policies.

## Retention and revocation

Backups remain in Google Drive until they are deleted under the configured retention policy or by the account owner. You can revoke the application's access in your [Google Account security settings](https://myaccount.google.com/permissions). After revocation, new backups and restores through Drive will stop working. Revoking access does not automatically delete copies already stored in Drive.

## Contact

For questions about this notice or the application, contact [Raphaël Côté](mailto:cotlarrc@gmail.com).
