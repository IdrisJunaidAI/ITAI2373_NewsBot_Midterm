# NewsBot Intelligence System

### ITAI 2373 | Natural Language Processing Midterm Project

**Portfolio repository:** [IdrisJunaidAI/ITAI2373_NewsBot_Midterm](https://github.com/IdrisJunaidAI/ITAI2373_NewsBot_Midterm)  
**GitHub account:** `IdrisJunaidAI`  
**Course:** ITAI 2373 Natural Language Processing  
**Dataset:** Instructor approved [BBC News Classification](https://www.kaggle.com/competitions/learn-ai-bbc/data)  
**Execution platform:** Google Colab with Python 3  
**Project status:** Executed notebook and saved evaluation outputs

> **Project summary:** NewsBot is an integrated natural language processing system that classifies BBC news articles and extracts linguistic, sentiment, syntactic, and named entity insights. It combines eight course modules into one reproducible notebook and demonstrates inference on additional illustrative article texts.



## 1. Purpose and business value

NewsBot demonstrates how editorial teams, researchers, and business intelligence analysts can turn large collections of unstructured news reports into structured, searchable insights. The system provides article categories, prominent terms, grammatical features, sentiment estimates, entities, and approximate syntactic relationships. These outputs can support content triage, media monitoring, trend exploration, and human decision making.

The system is a **coursework prototype**, not a validated production news monitoring service. Automated results require human review, particularly for consequential decisions.

## 2. System capabilities: Eight NLP modules


| Course module                       | Implemented capability                                                            | Main output                                          |
| ----------------------------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------- |
| Module 1: Business application      | Defines intended users, problem, and analytical value                             | Business use case and pipeline design                |
| Module 2: Preprocessing             | Text cleaning, normalization, tokenization, stop word handling, and lemmatization | Model ready text                                     |
| Module 3: TF IDF                    | Numerical text features and category specific keywords                            | Term rankings and visual analysis                    |
| Module 4: Part of Speech            | spaCy grammatical tagging and comparative category patterns                       | POS distributions                                    |
| Module 5: Syntax and semantics      | Dependency parsing and approximate subject, verb, object relationships            | Syntactic relationship summaries                     |
| Module 6: Sentiment and emotion     | VADER sentiment scoring and exploratory lexical emotion indicators                | Category sentiment distributions                     |
| Module 7: Multiclass classification | Model benchmarking, training, cross validation, and held out evaluation           | Predictions, classification report, confusion matrix |
| Module 8: Named entities            | Identifies persons, organizations, places, dates, and money expressions           | Entity counts and cooccurrence summaries             |




### Integrated workflow

**BBC news articles → Quality checks → NLP preprocessing → Feature extraction and linguistic analysis → Classification and entity/sentiment insights → Visualizations and interpretation**

The notebook retains original article text for context sensitive analyses while using a separate normalized representation for selected modeling stages.

## 3. Data source and quality assurance

The approved dataset is the **BBC News Classification** competition training CSV, `BBC News Train.csv`, containing **1,490 labeled articles** in the source file. After the notebook's cleaning, minimum length checks, and duplicate removal, **1,440 articles** remained for analysis.


| News category | Articles  |
| ------------- | --------- |
| Sport         | 342       |
| Business      | 335       |
| Politics      | 266       |
| Entertainment | 263       |
| Technology    | 234       |
| **Total**     | **1,440** |


The project uses five classes because these are the categories available in the approved BBC dataset. **Health is not a class in this dataset**, even though it is listed among the broader example categories in the assignment.

## 4. Verified classification performance

All values below are taken from the executed notebook outputs and its saved metrics. The notebook uses a stratified **80% training and 20% test split**, compares estimators with three fold cross validation on the training portion, and evaluates the selected model on the held out test set. Classification vectorization is fitted within the modeling pipelines to limit data leakage.


| Model                   | Cross validation accuracy | Cross validation macro F1 |
| ----------------------- | ------------------------- | ------------------------- |
| **Linear SVM**          | **97.05%**                | **96.94%**                |
| Logistic Regression     | 96.27%                    | 96.15%                    |
| Multinomial Naive Bayes | 95.49%                    | 95.34%                    |
| Majority class baseline | 23.78%                    | 7.69%                     |


**Selected model:** Linear Support Vector Machine.


| Held out test metric | Result     |
| -------------------- | ---------- |
| Test articles        | 288        |
| Accuracy             | **96.53%** |
| Macro F1             | **96.45%** |


These scores quantify performance on the historical BBC dataset split. They do not establish equivalent performance on present day articles, other publishers, or different topics.

## 5. NLP findings and interpretation

The executed analysis supports the following observations:

1. **Category patterns:** Sport has the most retained articles (342) and Technology the fewest (234).
2. **Classification errors:** Technology has a held out recall of approximately **89%**, compared with **100%** for Sport, making Technology a useful focus for subsequent error analysis.
3. **Editorial grammar:** Technology has a noun proportion of **0.261**, compared with **0.208** for Sport. Sport has a pronoun proportion of **0.078**, compared with **0.039** for Business. These are corpus level descriptive differences, not causal findings.
4. **Sentiment:** VADER classifies approximately **46.2%** of Politics articles as negative, compared with **17.9%** of Entertainment articles. Lexicon based sentiment scores are not human verified emotion labels.
5. **Named entities:** The NLP pipeline identified **27,756 entity mentions** and an average of **7.263 extracted syntactic relations per article**. Entity cooccurrence suggests possible connections for review, but does not prove a real world relationship.

Detailed code, charts, confusion matrices, and examples are included in the executed notebook.

## 6. Individual contributions and work completed

My documented individual work focused on **dataset acquisition and verification, Google Colab execution, technical troubleshooting, model result review, and GitHub portfolio preparation**.

**Dataset preparation and validation.** I accessed the professor approved BBC News Classification competition, obtained its labeled training CSV, and checked the dataset against the notebook's required news category and article text fields. I identified and corrected an earlier dataset selection issue in which an unrelated housing CSV had been uploaded.

**Environment troubleshooting and notebook execution.** I diagnosed and worked through Google Colab package conflicts involving NumPy, pandas, and scikit learn, as well as a blocked NLTK VADER resource download. I adopted an installation approach that avoids unnecessary core package upgrades and uses a compatible VADER sentiment component. I subsequently executed the complete notebook successfully using the BBC dataset.

**Integrated pipeline verification.** I reviewed the execution of the eight included NLP components, including preprocessing, TF IDF, POS tagging, dependency analysis, sentiment, classification, and named entity recognition. My role described here concerns running and verifying the integrated workflow; it does not assert sole authorship of every underlying algorithm.

**Model evaluation and analysis.** I reviewed the saved comparison of Linear SVM, Logistic Regression, Multinomial Naive Bayes, and the majority class baseline. I documented the cross validation results, held out accuracy and macro F1, category recall differences, and limitations of the analysis.

**Results communication and portfolio organization.** I prepared the executed notebook and supporting technical documentation for a public individual GitHub portfolio, with this README explaining the project purpose, reproducibility steps, measured findings, business relevance, and limitations.

**Collaboration and academic integrity.** This repository is my individual portfolio copy of the course midterm project. Where portions of the underlying implementation originated from the instructor's starter notebook or group collaboration, those contributions should be credited to their respective sources and contributors rather than represented as my exclusive work. AI assistance supported technical troubleshooting, documentation, and explanation; the reported metrics come from the executed Colab notebook. Contributions beyond the documented individual tasks are not claimed.

## 7. Repository files

All four files below are published in the repository root. The links use their exact GitHub filenames.

| File | Purpose |
| --- | --- |
| [Executed NewsBot notebook](ITAI2373_NewsBot_Midterm.ipynb) | Runnable Jupyter notebook with saved NLP analysis, evaluation outputs, and visualizations |
| [Individual reflective journal (PDF)](MT_Reflective_Report_IdrisJunaid_ITAI2373.pdf) | Personal reflection on technical challenges, learning, and project implications |
| [Individual technical report (PDF)](MT_Technical_Report_IdrisJunaid_ITAI2373.pdf) | Technical methodology, performance results, limitations, and business interpretation |
| [README.md](README.md) | Project overview, measured findings, contributions, and execution guidance |

The repository itself is dedicated exclusively to the midterm. The professor's instructions also specify an `ITAI2373-NewsBot-Midterm` portfolio folder. This standalone repository uses the same project identity with underscores in its repository name; confirm with the instructor if the precise nested folder convention is mandatory.

## 8. Reproduce the project in Google Colab

1. Open the [executed Jupyter notebook](ITAI2373_NewsBot_Midterm.ipynb) and load it in [Google Colab](https://colab.research.google.com/).
2. Obtain `BBC News Train.csv` from the instructor approved [BBC News Classification competition](https://www.kaggle.com/competitions/learn-ai-bbc/data) after accepting its terms when prompted.
3. Use a fresh Colab runtime and run the notebook's dependency setup without unnecessary upgrades to core scientific packages.
4. Run the cells in order, selecting the labeled BBC training CSV when asked. Do not use the unrelated Kaggle housing `train.csv`.
5. Review the five category distributions, cross validation model comparison, held out classification report, confusion matrix, POS and syntactic analyses, sentiment charts, and named entity findings.
6. To independently confirm the reported accuracy, reproduce the notebook's training and evaluation with its recorded random seed and data processing logic.

**Reproducibility notes:** The dataset is distributed through Kaggle, not through this repository. A fresh runtime may require installation of the spaCy English model and standalone VADER package. Exact results can vary when software versions or source data change.

## 9. Limitations and future enhancements

The dataset represents historical BBC reporting and five categories only. The current system should be stress tested on new articles from different sources and time periods, with particular attention to errors in Technology. Sentiment and emotion proxies may miss contextual nuance, negation, irony, and domain vocabulary. Dependency based relationship extraction is approximate, and named entity labels may contain errors.

Potential enhancements include modern held out datasets, a manually annotated evaluation set for entities and relationships, bias and error analysis by class, confidence based human review workflows, temporal trend analysis, and an interactive monitoring dashboard. In a pharmaceutical or biotechnology context, similar NLP components could be adapted for **scientific literature monitoring, regulatory intelligence, and quality event classification**, subject to appropriate domain validation and governance.

## 10. Academic submission context

The professor has approved an **individual submission** for this student. Accordingly, this repository documents the individually executed NewsBot notebook, the individual technical report, and the individual reflective journal. It does not claim unperformed group collaboration or substitute hypothetical teammate contributions. The technical report provides supplementary analysis; the project assessment ultimately follows the instructor's instructions and grading rubric.

For Canvas, use the public [repository homepage](https://github.com/IdrisJunaidAI/ITAI2373_NewsBot_Midterm) rather than a link to an individual file. All benchmark scores here are from the recorded BBC dataset evaluation, not a promise of performance on unseen publishers or recent news.

## 11. References

1. Kaggle. [BBC News Classification competition](https://www.kaggle.com/competitions/learn-ai-bbc/data).
2. scikit learn. [Documentation](https://scikit-learn.org/stable/).
3. spaCy. [Usage and documentation](https://spacy.io/usage).
4. NLTK. [Natural Language Toolkit documentation](https://www.nltk.org/).
5. Hutto, C. J., and Gilbert, E. (2014). VADER: A Parsimonious Rule Based Model for Sentiment Analysis of Social Media Text. *Proceedings of the International AAAI Conference on Web and Social Media*.

---

**Execution evidence:** All quantitative claims in this README are based on the supplied executed NewsBot notebook or its emitted metrics summary. Authorship of starter materials and third party software remains with their respective creators.
