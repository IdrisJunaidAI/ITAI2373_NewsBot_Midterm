"""Standard library checks for the public portfolio index."""
import json
from pathlib import Path
from urllib.parse import urlparse

root = Path(__file__).resolve().parents[1]
docs = root / "docs"
required = [
    root / "README.md",
    root / "PORTFOLIO.md",
    root / "ITAI2373_NewsBot_Midterm.ipynb",
    docs / "index.html",
    docs / "assets" / "style.css",
    docs / "assets" / "app.js",
    docs / "COURSE_INDEX.md",
    docs / "CASE_STUDIES.md",
    docs / "REPRODUCIBILITY.md",
    docs / "RESEARCH_INTEGRITY.md",
    docs / "projects.json",
]
missing = [str(x) for x in required if not x.is_file()]
assert not missing, f"Missing files: {missing}"
projects = json.loads((docs / "projects.json").read_text(encoding="utf-8"))
assert isinstance(projects, list) and len(projects) >= 8
required_fields = {"id", "title", "track", "status", "date", "skills", "description", "evidence", "link", "label"}
assert len({x["id"] for x in projects}) == len(projects), "Project IDs must be unique"
for item in projects:
    assert required_fields <= set(item), f"Missing fields: {item}"
    assert item["track"] in {"Foundations", "Methods", "Analysis", "Projects"}
    assert isinstance(item["skills"], list) and item["skills"]
    assert item["title"].strip() and item["description"].strip()
    url = urlparse(item["link"])
    if not url.scheme:
        assert (docs / item["link"]).resolve().is_file(), f"Broken local link: {item['link']}"
    else:
        assert url.scheme == "https", "Public portfolio links must use HTTPS"
nb = json.loads((root / "ITAI2373_NewsBot_Midterm.ipynb").read_text(encoding="utf-8"))
assert nb.get("nbformat") == 4 and isinstance(nb.get("cells"), list)
html = (docs / "index.html").read_text(encoding="utf-8")
for key in ('id="cards"', 'id="search"', 'data-filter="Projects"', 'assets/app.js'):
    assert key in html, f"Missing interactive feature: {key}"
print(f"Portfolio checks passed: {len(projects)} evidence entries, core files and notebook JSON.")
