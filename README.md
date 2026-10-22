# Minnie Yuan — personal website

Plain HTML + CSS. No build step, no frameworks.

```
index.html     front page (name box, arrow, four boxes)
projects.html  about.html  resume.html  contact.html
style.css      all colors and styling (colors are at the very top)
resume.pdf     ← add this yourself
```

## Before you publish
1. **contact.html**: replace `YOUR-EMAIL@example.com` (2 places) with your email.
2. **resume.pdf**: drop your resume into this folder with exactly that name.
3. *(Optional)* **Hero background**: put an image in an `images/` folder and follow the comment in `style.css` under `.hero`.

## Deploy to GitHub Pages (free)
1. Create a GitHub account, then a new **public** repository named
   `YOUR-USERNAME.github.io` (this gives you the cleanest URL).
2. In the repo, click **Add file → Upload files**, drag in everything in this
   folder, and click **Commit changes**.
3. Go to **Settings → Pages**. Under *Source* choose **Deploy from a branch**,
   branch **main**, folder **/ (root)**, then **Save**.
4. After a minute or two your site is live at `https://YOUR-USERNAME.github.io`.

To update later, upload the changed file again (or edit it right on GitHub with the pencil icon). The site redeploys on its own.

## Preview on your computer
Just double-click `index.html` to open it in your browser.

## Common edits
- **Colors**: change the values at the top of `style.css` (`--burgundy`, `--charcoal`, `--ivory`, `--blush`).
- **Box text**: edit the four `<a class="tile">` blocks in `index.html`.
- **Add a project**: copy an `<article class="card">` block in `projects.html`.
- **Custom domain** (e.g. minnieyuan.com): Settings → Pages → Custom domain.
