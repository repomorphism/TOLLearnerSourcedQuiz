const QUESTIONS_DATA = [
  {
    qid: "q1",
    type: "select-all",
    questionText: "What effect would UVA bring to our skin?",
    choices: [
      { cid: "tanning", text: "Tanning" },
      { cid: "wrinkling", text: "Wrinkling" },
      { cid: "sunburn", text: "Sunburn" },
      { cid: "aging", text: "Aging" },
    ],
    correctChoices: ["tanning", "wrinkling", "aging"],
    correctFeedback:
      "Answer: Correct! UVA will cause tanning, wrinkling and aging because it has higher wavelength and can reach the deeper layer of the skin.",
    incorrectFeedback:
      "Answer: Wrong. UVA will cause tanning, wrinkling and aging because it has higher wavelength and can reach the deeper layer of the skin.",
  },
  {
    qid: "q2",
    type: "multiple-choice",
    questionText:
      "Paul went to the beach without taking sunblocks. 2 hours later, his skin got tanned. Which type of UV caused the problem?",
    choices: [
      { cid: "uva", text: "UVA" },
      { cid: "uvb", text: "UVB" },
      { cid: "uvc", text: "UVC" },
    ],
    correctChoice: "uva",
    correctFeedback:
      "Answer: Correct. UVA can reach deeper layer of the skin and cause tanning.",
    incorrectFeedback:
      "Answer: Wrong. UVA can reach deeper layer of the skin and cause tanning.",
  },
];
