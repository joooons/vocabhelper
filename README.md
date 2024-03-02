# vocabhelper

Biblical Hebrew vocab practice quiz that tests the user's knowledge of the lexical range of each word.
The user has the option to enter just one of many possible definitions, or to enter them all.

You can try using it [here](https://hebrewpracticequiz.netlify.app/)!

# How to use

## To start the quiz

[QUIZ page](./images/quiz.png)

- Click on `QUIZ` in the navigation bar.

- Enter the range of words you wish to view using the `Start` and `End` input fields.

- The range cannot exceed the total of 653 words that are available.

- Enter the number of questions you want the quiz to have in the `# of Q` input field.

- The maximum number of questions allowed is 100.

- If the number of questions is lower than the range of words, the quiz will consist of a random selection from the range.

- click `START` to populate the quiz.

- The `SCORE` window on the top right begins empty but starts showing the quiz stats once the user starts answering the questions.

## Components of the question element

- Each question item contains these items:

  - question number
  - hebrew word
  - word type
  - frequency of occurence in the Bible
  - A column of answer entry input fields, which consists of...
    - word type
    - input field for a gloss for the Hebrew word
  - the `RESET` button
  - word hint box, with the words `HOVER TO SEE DEFINITIONS`

  [TYPES](./images/types.png)

- Press `tab` to navigate through each of the answer input fields.

- Type in your answer in the answer input field.

- If the user-supplied answer matches any of the definitions that are hidden inside the word hint box, the answer input field will turn green and become immutable.

- If the user-supplied answer is incorrect, the answer input field will shake and reset the text value.

- A correct answer already submitted once cannot be used again in a different answer input field for the same Hebrew word.

[QUESTION components](./images/answers.png)

- Click on `RESET` to reset the answer input fields for that Hebrew word.

- Hover over the word hint box to see all of the definitions for that word.

- Notice that some definitions have multiple entries separated by `,`. For example, a definition might be something like `2. take, to take`. In this case, both `take` and `to take` will be considered correct answers.

- Click on `TOP OF PAGE` to go back to the top of the page.

## To see a list of Hebrew words

[VIEW page](./images/view.png)

- Click on `VIEW` in the navigation bar.

- Enter the range of words you wish to view using the `Start` and `End` input fields.

- The range cannot exceed the total of 653 words that are available.

## Abbreviations

The abbreviations used in the `Category` column in the `VIEW` page:

| Abbreviation | Definition               |
| ------------ | ------------------------ |
| adj.         | adjective                |
| adv.         | adverb                   |
| art.         | article                  |
| cj.          | conjunction              |
| inf.         | infinitive               |
| n.f.         | noun, feminine           |
| n.f./m.      | noun, feminine/masculine |
| n.m.         | noun, masculine          |
| n.m./f.      | noun, masculine/feminine |
| prn.         | pronoun                  |
| prp.         | preposition              |
| prt.         | particle                 |
| ptc.         | participle               |
| subs.        | substantive              |
| vb.          | verb                     |

The abbreviations used for the type of each word in the `QUIZ` page:

| Abbreviation | Type                                                   |
| ------------ | ------------------------------------------------------ |
| ---          | `Qal`. If a verb stem is not specified, Qal is assumed |
| concept      | Explains the concept of the word rather than a gloss   |
| fig.         | figurative                                             |
| Hi           | `Hiphil` verb stem                                     |
| Hishtaphel   | `Hishtaphel` verb stem                                 |
| Hit          | `Hithpael` verb stem                                   |
| Ni           | `Niphal` verb stem                                     |
| Pi           | `Piel` verb stem                                       |
| plural       | The plural use of the word                             |
| ptc.         | participle                                             |
| Pu           | `Pual` verb stem                                       |
| substantive  | substantive                                            |
