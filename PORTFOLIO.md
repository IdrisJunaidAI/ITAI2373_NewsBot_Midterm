# ITAI 2373 | Natural Language Processing Portfolio

**Idris Junaid | 2026 | Research, technical learning and responsible AI**

This is a navigable evidence portfolio connecting coursework, reproducible notebooks and the two NewsBot case studies. The midterm's original files and reports remain unchanged. The project demonstrates applied NLP skills and a quality assurance approach to dataset validation, provenance, model evaluation and responsible human oversight.

## Start here

| Destination | What you will find |
| --- | --- |
| [Interactive portfolio](docs/index.html) | Searchable project gallery, skills and milestone highlights. Ready for GitHub Pages setup. |
| [Curriculum evidence map](docs/COURSE_INDEX.md) | Modules 00 to 12, activities, evidence and explicit gaps. |
| [Project case studies](docs/CASE_STUDIES.md) | Method, output, interpretation and practical value. |
| [Reproducibility guide](docs/REPRODUCIBILITY.md) | How to open and run the lab notebooks and NewsBot. |
| [Research integrity](docs/RESEARCH_INTEGRITY.md) | Attribution, data rights, limitations and careful reporting. |
| [Pharma and biotech applications](docs/PHARMA_APPLICATIONS.md) | Proposed future use cases, clearly distinguished from implemented systems. |

## Portfolio progression

| Stage | Evidence | Core techniques |
| --- | --- | --- |
| Foundation | [Jupyter exploration](https://github.com/IdrisJunaidAI/jupyter-exploration), [NLP in Action](docs/labs/01-nlp-in-action.md) | Git, Jupyter, text parsing, language understanding |
| Lab 02 | [Preprocessing notebook](https://github.com/IdrisJunaidAI/efficacy-ai-learning-hub/blob/main/L02_IdrisJunaid_ITAI_2373.ipynb), [journal synthesis](docs/labs/02-preprocessing.md) | NLTK, spaCy, stop words, tokenization, lemmatization |
| Lab 04 | [Representation notebook](https://github.com/IdrisJunaidAI/efficacy-ai-learning-hub/blob/main/L04_IdrisJunaid_ITAI_2373.ipynb), [journal synthesis](docs/labs/04-text-representation.md) | Count vectors, TF IDF, n grams, similarity, embeddings |
| Lab 05 | [Part of speech notebook](https://github.com/IdrisJunaidAI/efficacy-ai-learning-hub/blob/main/L05_Completed_POS_Tagging_Lab.ipynb) | Grammatical tags and ambiguous tokens |
| Lab 07 | [Sentiment notebook](https://github.com/IdrisJunaidAI/efficacy-ai-learning-hub/blob/main/L07_Junaid_Idris_ITAI2373.ipynb) | VADER, TextBlob, feature extraction and model evaluation |
| Midterm | [NewsBot notebook](ITAI2373_NewsBot_Midterm.ipynb), [technical report](MT_Technical_Report_IdrisJunaid_ITAI2373.pdf), [reflection](MT_Reflective_Report_IdrisJunaid_ITAI2373.pdf) | Eight integrated NLP areas on historical BBC news |
| Capstone | [NewsBot 2.0 repository](https://github.com/IdrisJunaidAI/NewsBot-Intelligence-System-2.0) | Web interface, topic modeling, multilingual research and test infrastructure |

### Midterm results: a bounded claim

The notebook's historical BBC dataset began with 1,490 labeled records. Quality filtering retained 1,440 articles across business, entertainment, politics, sport and technology. Linear SVM achieved **96.53% accuracy** and **96.45% macro F1** on a held out set of 288 articles, with **96.94% cross validation macro F1** during model selection. Technology recall was about 89%. These measurements are not estimates of performance on contemporary news or regulated content.

**Important:** NewsBot 2.0 used separate configurations and recorded different held out scores. Its Logistic Regression classifier reached 95.83% held out accuracy, while its Linear SVM comparison reached 96.88%. These must not be presented as replications of the midterm experiment.

## How to use this portfolio

**For an instructor:** Open each linked notebook and its saved outputs, then compare the technical report against the stated evaluation metrics.

**For a recruiter or collaborator:** Begin with the NewsBot case study, inspect the technical methodology, then review the labs to see progression and judgment about limitations.

**For a product partner:** Read the future applications section. Proposed pharmaceutical quality and regulatory intelligence solutions are ideas, not validated or marketed applications.

## Scope and attribution

This repository is an individual portfolio for a collaborative course midterm. It documents dataset sourcing, notebook execution, troubleshooting, verification, interpretation and portfolio work without claiming sole authorship of every notebook component. AI assistance supported troubleshooting and documentation. Original assignments, instructor materials and team contributions retain their original attribution. Grades, private communications, teammate names and screenshots of classroom discussions are deliberately not published as portfolio evidence.
