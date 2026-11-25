# Lab 04: Text representation

**Evidence:** [Published notebook](https://github.com/IdrisJunaidAI/efficacy-ai-learning-hub/blob/main/L04_IdrisJunaid_ITAI_2373.ipynb) and individual journal, September 2026.

## Methods

**Bag of Words:** Interpretable frequency features that discard word order and most context. The lab sample matrix was reported as 75.6% sparse.

**TF IDF:** Reweights features based on document and corpus frequencies. Useful as an interpretable search and classification baseline.

**N grams:** Captures short local phrases such as negation, at the cost of higher dimensionality and data sparsity.

**Word embeddings:** Dense features that may capture distributional similarity; individual dimensions are less directly interpretable.

## Evaluation caution

An offline experiment using a balanced small fallback corpus produced 1.000 accuracy for Bag of Words, TF IDF and a unigram plus bigram model. The journal explicitly warns that this reflects an easily separable teaching dataset. It does **not** prove the representations perform equally on a large unseen corpus.

## Applied insight

Representation choice decides what information is available to a model. A sound comparison fixes splits, reports corpus scope and measures performance under realistic data conditions. Text features can encode bias, so the journal also calls for representative evaluation, privacy safeguards and human review.

**Boundary:** The full NLTK movie review corpus was suggested for a more meaningful Colab comparison; the fallback result must not be presented as that larger corpus result.
