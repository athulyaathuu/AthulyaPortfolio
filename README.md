# Athulya P Chandran: Cybersecurity Portfolio

Static site (HTML, CSS, vanilla JS). No build step, backend or paid service.

## Structure
```
index.html            all content (edit text here)
assets/css/style.css  colours/spacing in :root variables
assets/js/script.js   menu, typing effect, scroll effects
assets/images/        put images here
assets/Athulya-Resume.pdf   <- YOU must add this file
```

## Edit content
- Open `index.html` in any editor. Sections are commented (SKILLS, PROJECTS, CERTIFICATIONS...).
- Skills: add/remove `<li>` items. Contact details: search for `Athulyapchandran1@gmail.com`.

## Resume
Copy your PDF to `assets/Athulya-Resume.pdf` (exact name and case). Until you do, the Download button gives a 404. To use another name, change both `href="assets/Athulya-Resume.pdf"` in `index.html`.

## Project links
In the PROJECTS section replace `href="#todo"` with your repo URL (e.g. `https://github.com/athulyaathuu/REPO-NAME`). Links left as `#todo` appear greyed out. The scanner project's tech stack is a placeholder: fill it from the repo. For live demos, add another `<a class="btn small" href="URL">Live Demo</a>`.

## Certificates and profiles
Add a `<div class="card">` in CERTIFICATIONS only for verified credentials; add a link button inside it if you have a verification URL. Add public profile buttons (HTB, TryHackMe, etc.) at the marked comment in the LABS section. Do not add OSCP as earned until you pass the exam.

## Test locally
Double-click `index.html`, or run `python -m http.server 8000` in this folder and open http://localhost:8000.

## Deploy on GitHub Pages
1. Create a GitHub repo. Name it `athulyaathuu.github.io` for a **user site** (URL: `https://athulyaathuu.github.io/`), or any name like `portfolio` for a **project site** (URL: `https://athulyaathuu.github.io/portfolio/`).
2. Upload everything in this folder to the repo root (GitHub web: Add file > Upload files; or `git add . && git commit -m "Initial site" && git push`).
3. Repo **Settings > Pages**: Source = *Deploy from a branch*, Branch = `main`, folder `/ (root)`, Save.
4. Wait 1 to 2 minutes; the URL appears at the top of the Pages settings.
5. To update: edit files, commit and push; the site rebuilds automatically.

All paths are relative, so it works under both site types.

## Contact
Default is plain `mailto:` links. A form would need an external service (e.g. Formspree); not included.
