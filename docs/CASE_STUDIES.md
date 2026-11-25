# Applied NLP case studies

## Case 1: Preprocessing as controlled information preservation

**Problem.** Raw text contains noise, but aggressive cleaning can delete signals important to the task.

**Approach.** Lab 02 compared tokenization, case transformations, stop word policies, stemming and lemmatization with NLTK and spaCy.

**Finding.** The reflection notes that an aggressive pipeline did not inevitably produce fewer tokens than a standard one. Regular expressions could also preserve or remove unexpected emoji and punctuation.

**Decision quality.** For pharmaceutical text, preserve numerals, identifiers, units, dates and scientific abbreviations until a documented rule authorizes transformation. Test variants against downstream task performance rather than assuming more cleaning is better.

**Evidence:** [Notebook](https://github.com/IdrisJunaidAI/efficacy-ai-learning-hub/blob/main/L02_IdrisJunaid_ITAI_2373.ipynb) and [journal synthesis](labs/02-preprocessing.md).

## Case 2: Choosing text features deliberately

**Problem.** Machine learning estimators consume numeric representations, but representation choice determines what linguistic information survives.

**Approach.** Lab 04 explored Bag of Words, TF IDF, n grams, cosine similarity and embedding concepts.

**Finding.** The sample Bag of Words matrix was reported as 75.6% sparse. The offline fallback classification corpus produced 100% accuracy across three sparse representations; the journal correctly treats that as a small and easily separable teaching example rather than a reliable external model result.

**Decision quality.** Prefer interpretable sparse vectors for transparent, smaller baselines. Evaluate contextual or dense embeddings when semantic matching is central, and document the explanation tradeoff.

**Evidence:** [Notebook](https://github.com/IdrisJunaidAI/efficacy-ai-learning-hub/blob/main/L04_IdrisJunaid_ITAI_2373.ipynb) and [journal synthesis](labs/04-text-representation.md).

## Case 3: Grammar and sentiment as contextual signals

**Problem.** The same word can take different grammatical or emotional meanings depending on context.

**Approach.** Lab 05 compared POS tagging with NLTK and spaCy, including ambiguity and tag sets. Lab 07 compared lexicon sentiment methods and a machine learning approach.

**Finding.** These labs demonstrate executable NLP techniques. Their existence does not establish accuracy on novel populations or sensitive domains.

**Evidence:** [POS notebook](https://github.com/IdrisJunaidAI/efficacy-ai-learning-hub/blob/main/L05_Completed_POS_Tagging_Lab.ipynb) and [sentiment notebook](https://github.com/IdrisJunaidAI/efficacy-ai-learning-hub/blob/main/L07_Junaid_Idris_ITAI2373.ipynb).

## Case 4: NewsBot Intelligence System midterm

**Problem.** Convert a collection of unstructured news articles into interpretable categories and language signals useful for media monitoring.

**Dataset.** Instructor approved historical BBC News Classification dataset. Source: 1,490 labeled records; cleaned analytical sample: 1,440 articles in five categories. Held out evaluation: 288 articles.

**Approach.** Classifier pipelines with within fold TF IDF fitting, three fold cross validation and an 80/20 stratified split. Compare Linear SVM, Logistic Regression, Multinomial Naive Bayes and a majority baseline; supplement with POS, dependency, VADER and named entity analysis.

**Measured result.** Linear SVM held out accuracy 96.53% and macro F1 96.45%. Cross validation macro F1 96.94%. Technology recall approximately 89%. The notebook recorded 27,756 entity mentions; entity cooccurrence is exploratory evidence, not a verified relationship.

**Limitations.** Historical, English language corpus; no dedicated Health class; dataset shift untested; lexical sentiment and automated entity or syntactic relations may be wrong. Not suitable for unreviewed decisions.

**My documented contributions.** Acquiring the approved dataset, verifying schema, correcting a wrong housing CSV upload, recovering from NumPy/pandas and scikit learn environment conflicts, addressing a blocked VADER download, executing the integrated Colab notebook, reviewing outputs and writing individual reports and portfolio documentation. This description does not claim sole authorship of all group project code.

**Evidence:** [Executed notebook](../ITAI2373_NewsBot_Midterm.ipynb), [technical report](../MT_Technical_Report_IdrisJunaid_ITAI2373.pdf), [reflective report](../MT_Reflective_Report_IdrisJunaid_ITAI2373.pdf).

## Case 5: NewsBot 2.0 advanced capstone

The [separate final project](https://github.com/IdrisJunaidAI/NewsBot-Intelligence-System-2.0) adds a Flask interface, topic modeling, multilingual retrieval experiments, summarization, conversational demonstration and tests.

**Important evaluation distinction:** Its historical BBC Logistic Regression held out accuracy of 95.83% and comparison Linear SVM accuracy of 96.88% are separate from the midterm's 96.53%. Its controlled multilingual MiniLM study used synthetic documents and queries, not independently validated current multilingual journalism. The conversational retrieval corpus is also synthetic. The final repository documents these boundaries.

## Value delivered

The portfolio demonstrates code execution, method comparison, error analysis, reproducibility, interpretation and decision restraint. Industrial utility would require actual user workflows, fresh representative data, formal validation and human review. No commercial or regulated deployment is claimed.
