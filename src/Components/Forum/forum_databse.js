import q1 from "../../Resources/ImageModerator/q1.jpg"
export const forum_question = [
  {
    forum_ques_id: 1,
    user_id: 3,
    topic_name: "Algebra",
    forum_text:
     "I tried to search on various things, but either dictating 1 billion digits long number is required or extracting 5 or 3 digits from the answer allow huge simplifications for computing the challenge compared to a naïve way : many times to the point doing it turns to be possible to compute it manually. Definitely not trivial…",
    figures: q1,
    link: null,
    upvote: 5,
    downvote: 7,
    name: "Which simple challenge you can ask to someone over the phone using common math in order to ask him to prove he as a specific computing power?",
    posted: new Date(2018, 11, 24, 13, 57),
  },
  {
    forum_ques_id: 2,
    user_id: 2,
    topic_name: "Number Theory",
    forum_text: "qiuwqoiyeworh",
    figures: null,
    link: null,
    upvote: 6,
    downvote: 6,
    name: "DDEEFF",
    posted: new Date(2019, 11, 24, 8, 39),
  },
  {
    forum_ques_id: 3,
    user_id: 1,
    topic_name: "Geometry",
    forum_text: "kjxfhas feuary we uyrr ewruyewuirh",
    figures: null,
    link: null,
    upvote: 7,
    downvote: 5,
    name: "GGHHII",
    posted: new Date(2018, 11, 24, 21, 33),
  },
  {
    forum_ques_id: 4,
    user_id: 3,
    topic_name: "Arithmetics",
    forum_text:
      "sdkjfhsf uieyruwiey fs ruyewuryasudi fweuigrfsdkbcalsispryywetsjbvs ",
    figures: null,
    link: null,
    upvote: 9,
    downvote: 4,
    name: "JJKKLL",
    posted: new Date(2018, 11, 24, 10, 10),
  },
  {
    forum_ques_id: 5,
    user_id: 2,
    topic_name: "Geometry",
    forum_text: "dsiouohfnkajhl",
    figures: null,
    link: null,
    upvote: 1,
    downvote: 3,
    name: "MMNNOO",
    posted: new Date(2018, 11, 25, 10, 26),
  },
  {
    forum_ques_id: 6,
    user_id: 1,
    topic_name: "Number Theory",
    forum_text: "agmehh",
    figures: null,
    link: null,
    upvote: 8,
    downvote: 2,
    name: "PPQQRR",
    posted: new Date(2018, 9, 24, 10, 19),
  },
  {
    forum_ques_id: 7,
    user_id: 1,
    topic_name: "Arithmetics",
    forum_text: "agmehh",
    figures: null,
    link: null,
    upvote: 8,
    downvote: 2,
    name: "SSTTUU",
    posted: new Date(2018, 9, 24, 10, 5),
  },
];

export const topic = [
  {
    topic_id: 1,
    topic_name: "Algebra",
  },
  {
    topic_id: 2,
    topic_name: "Geometry",
  },
  {
    topic_id: 3,
    topic_name: "Arithmetics",
  },
  {
    topic_id: 4,
    topic_name: "Number Theory",
  },
];

export const users = [
  {
    user_id: 3,
    user_name: "Nazia",
  },
  {
    user_id: 1,
    user_name: "Sudipa",
  },
  {
    user_id: 2,
    user_name: "Sutapa",
  },
];

export const forum_answer = [
  {
    forum_ans_id: 1,
    user_id: 1,
    forum_ques_id: 1,
    forum_ans_text:
      "Suppose you have k different pairs of gloves (k left gloves and k right gloves, for 2k gloves in total) in your chest. You take the gloves out of the chest one by one without looking and lay them out in a row on the floor. What is the probability that no two matching gloves are next to each other?I tried approaching this as follows:There are 2k possible choices for the first glove, and then the next glove has 2k - 2 choices since matching pair can't be next to it, then the third has 2k - 2 choices as well because the 1st glove's counterpart can be used now. Now, for the 4th glove, there are 2k - 4 choices, and so forth, but I have a feeling this is incorrect. Any solution/pointer would be appreciated.",
    figures: null,
    link: null,
    upvote: 5,
    downvote: 7,
    posted: new Date(2018, 11, 25, 13, 57),
  },
  {
    forum_ans_id: 2,
    user_id: 2,
    forum_ques_id: 1,
    forum_ans_text:
      "Assume A is positive stable matrix (a matrix is called positive stable if every eigenvalue has positive real part). Is there any positive definite matrix P (desirably diagonal matrix) such that PA is positive definite?",
    figures: null,
    link: null,
    upvote: 3,
    downvote: 2,
    posted: new Date(2018, 11, 24, 23, 3),
  },
  {
    forum_ans_id: 3,
    user_id: 1,
    forum_ques_id: 2,
    forum_ans_text:
      "First of all, there need to be some clarification on differences between positive definite and positive stable matrices.A is positive stable, if all of its eigen values have got positive real part. A can be a non-hermition matrix.",
    figures: null,
    link: null,
    upvote: 5,
    downvote: 7,
    posted: new Date(2018, 10, 12, 5, 45),
  },
  {
    forum_ans_id: 4,
    user_id: 1,
    forum_ques_id: 1,
    forum_ans_text:
      "Second of all this ques, there need to be some clarification on differences between positive definite and positive stable matrices.A is positive stable, if all of its eigen values have got positive real part. A can be a non-hermition matrix.",
    figures: null,
    link: null,
    upvote: 6,
    downvote: 5,
    posted: new Date(2018, 10, 12, 6, 54),
  },
  {
    forum_ans_id: 5,
    user_id: 2,
    forum_ques_id: 3,
    forum_ans_text:
      "Third of all, there need to be some clarification on differences between positive definite and positive stable matrices.A is positive stable, if all of its eigen values have got positive real part. A can be a non-hermition matrix.",
    figures: null,
    link: null,
    upvote: 5,
    downvote: 7,
    posted: new Date(2018, 12, 15, 5, 45),
  },
  {
    forum_ans_id: 6,
    user_id: 2,
    forum_ques_id: 5,
    forum_ans_text:
      "Fourth of all, there need to be some clarification on differences between positive definite and positive stable matrices.A is positive stable, if all of its eigen values have got positive real part. A can be a non-hermition matrix.",
    figures: null,
    link: null,
    upvote: 5,
    downvote: 7,
    posted: new Date(2018, 12, 15, 5, 45),
  },
  {
    forum_ans_id: 7,
    user_id: 1,
    forum_ques_id: 4,
    forum_ans_text:
      "Fifth of all, there need to be some clarification on differences between positive definite and positive stable matrices.A is positive stable, if all of its eigen values have got positive real part. A can be a non-hermition matrix.",
    figures: null,
    link: null,
    upvote: 5,
    downvote: 7,
    posted: new Date(2018, 12, 15, 5, 45),
  },
];