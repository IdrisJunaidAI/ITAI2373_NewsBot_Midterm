# Publishing the portfolio website

This repository contains a complete static site at [docs/index.html](index.html). It requires no paid infrastructure or API keys. The directory is designed for GitHub Pages.

## GitHub Pages activation

1. Merge the portfolio branch into the repository's main branch.
2. In the GitHub repository, open **Settings**, then **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the **main** branch and **/docs** folder, then save.
5. Confirm the URL shown on the GitHub Pages settings page. Typical project pages URLs follow the pattern https://idrisjunaidai.github.io/ITAI2373_NewsBot_Midterm/ but do not assume that URL is active before Pages confirms it.
6. Test the project search, filter buttons, notebook links and mobile layout. Check the Actions tab for the portfolio integrity workflow.

## Local preview

From a clone of this repository, run:

    cd docs
    python -m http.server 8000

Then open http://localhost:8000. Serving files over HTTP is important because the browser loads projects.json using fetch.

## Maintenance

Update docs/projects.json with a source linked, truthful new entry when adding a notebook. Keep distinct experiments separate and rerun:

    python scripts/check_portfolio.py

A deployed GitHub Pages site is public. Do not include personal grades, confidential information, raw licensed news articles or private discussions.
