# Reproducibility and reviewer runbook

## Prerequisites

* GitHub account and Python 3 Jupyter or Google Colab.
* Access to the public repositories linked in [PORTFOLIO.md](../PORTFOLIO.md).
* For the NewsBot midterm only, the authorized BBC News Classification training CSV obtained under the dataset provider's terms.

## Open a lab

1. Open the exact GitHub notebook linked in the portfolio index.
2. Choose **Open in Colab**, or download the notebook and upload it at https://colab.research.google.com/.
3. Review the top Markdown cells for prerequisites, NLTK resources or spaCy models.
4. Start a clean runtime, execute in order and inspect actual outputs.
5. Record environment versions, seeds, any fallback dataset and any resource downloads.

Notebooks with saved results are snapshots. Reproduction depends on compatible dependencies and access to named datasets. Do not treat fallback corpus observations as performance claims about larger real world corpora.

## NewsBot midterm

1. Open [ITAI2373_NewsBot_Midterm.ipynb](../ITAI2373_NewsBot_Midterm.ipynb) in Google Colab.
2. Obtain the approved [BBC News Classification dataset](https://www.kaggle.com/competitions/learn-ai-bbc/data) according to provider terms.
3. Supply the labeled BBC training file when the notebook requests it. Do not provide an unrelated Kaggle housing training CSV.
4. Follow the notebook's dependency setup in a fresh runtime. Avoid arbitrarily upgrading all core data science packages.
5. Run the full notebook top to bottom and compare retained row counts and class labels before interpreting model metrics.
6. Review the classification report, confusion matrix, held out scores, topic terms, POS patterns and NLP visualizations.

The **96.53% accuracy** is from the recorded midterm run, not a guarantee that future execution under different dependencies or data will yield the same result.

## NewsBot 2.0

The [final project's detailed README](https://github.com/IdrisJunaidAI/NewsBot-Intelligence-System-2.0/blob/main/ITAI2373-NewsBot-Final/README.md) is the authoritative source for environment setup, running its tests, obtaining historical BBC evidence and understanding the synthetic demonstration dataset. Its repository contains application source, test infrastructure and runbooks.

## Quality assurance checkpoints

| Check | Expected evidence |
| --- | --- |
| Input provenance | Dataset name, source rights and schema |
| Integrity | Missing values, duplicate policy and exclusions |
| Reproducibility | Environment, seeds and cell execution order |
| Leakage prevention | Split before model fitting; vectorizers inside training folds |
| Evaluation | Holdout scope, macro F1, class recall and baseline |
| Interpretation | Clear separation of derived signal and verified fact |
| Privacy | No credentials, personal grades, protected health information or confidential datasets |
| Presentation | Current links, appropriately limited claims and attribution |

## Troubleshooting notes from the midterm

The student documented NumPy/pandas compatibility errors, scikit learn import failure, blocked NLTK VADER lexicon access and a mistaken housing CSV upload. The recovery lesson was to verify environment, data source and schema before modeling. See the [reflective report](../MT_Reflective_Report_IdrisJunaid_ITAI2373.pdf) for the individual account.

## Safe public reproducibility

This public portfolio links to released code and reports. It does not redistribute the original BBC full article corpus, publish classmate discussions or upload academic grade screenshots. Verify licensing, privacy and publisher terms before adding any new datasets.
