# Lab 02: Text preprocessing and cleaning

**Evidence:** [Published notebook](https://github.com/IdrisJunaidAI/efficacy-ai-learning-hub/blob/main/L02_IdrisJunaid_ITAI_2373.ipynb) and individual reflection, August 29, 2026.

## Techniques practiced

Tokenization, lowercasing, punctuation policies, stop word filtering, Porter stemming, lemmatization, NLTK and spaCy comparisons.

## Reflection findings

Preprocessing is a modeling decision, not a uniform cleaning checklist. Emojis, repeated punctuation, uppercase writing and hashtags may carry sentiment or topic meaning. The original reflection identified a coffee cup symbol surviving an advanced cleaning rule while other emoji were removed, demonstrating the need to inspect regex edge cases.

NLTK makes individual stages easy to inspect. spaCy integrates tokens and linguistic properties. Differences in default stop word lists can change the resulting feature space. Stemming can be computationally simple but produce less interpretable stems. Lemmatization can better preserve dictionary forms, though its value depends on the task.

The journal also observed that a pipeline labeled aggressive did not necessarily reduce token count more than the standard pipeline. Labels are not evidence; output checks are.

## Domain transfer hypothesis

In quality or clinical records, stripping numbers or punctuation can delete doses, lot IDs, dates, decimal results or measurements. A safe future workflow would compare minimal, standard and stronger cleaning strategies with explicit field preservation tests.

**Boundary:** This lab establishes understanding and notebook execution, not validation on confidential pharmaceutical data.
