# SK Digital - Full Project

## File Structure
```
sk-digital-full-project/
├── index.html          -> PUBLIC (GitHub e upload korba)
├── admin.html          -> PRIVATE (tomar PC te rakhba, GitHub e diba NA)
├── original-sk-digital.html -> Backup
├── assets/
│   ├── logo.svg        -> Logo file
│   └── images/         -> Tomar sob screenshot / portfolio images ekhane rakhba
├── js/
│   ├── database.json   -> Sob content er database
│   ├── storage.js      -> Database API (localStorage wrapper)
│   └── default-content.js -> Original default content
└── README.md
```

## Database ki?
Tomar site e kono MySQL nai. Database holo browser er localStorage + database.json file.
- admin.html diye edit korle localStorage e save hoy
- GitHub e index.html static, tai database.json theke content load korte chaile index.html e fetch() korte hobe (optional)

## Logo
assets/logo.svg use korte paro. admin panel e logo upload korle dataURL hisebe localStorage e save hoy.

## GitHub e kivabe diba?
1. Sudhu index.html ke rename kore `index.html` rakho (already ache)
2. assets folder soho upload koro
3. admin.html upload korba NA - eta private

## Image koi rakhba?
- Portfolio screenshot, review screenshot: assets/images/ folder e rakho
- admin.html e image upload korle ota base64 hoye localStorage e jabe, but GitHub public version er jonno assets/images/ e real file rakha better.

## Security
- index.html e kono password nai, safe for public
- admin.html e password: skdigital2026 (change korte chaile admin.html e ADMIN_PASSWORD khujo)
