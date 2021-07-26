import welcome from "../../Resources/Images/circle.jpg";

export const revision = [
  {
    _id: 9,
    File_Name: "Big Bang Theory",
    Uploaded: "2021-02-24 06:21:02 PM",
    Type: "Practice",
  },
];

export const database = [
  {
    _id: 1,
    File_Name: "All About Circle",
    Uploaded: "2021-02-24 10:24:12 PM",
    Type: "Problems of the week",
    Text: "Find the Circumference",
    Breakpoint_title: [
      "Formula(1.5Pt)",
      "Insert Proper Value(0.5Pt)",
      "Correct Answer(1Pt)",
    ],
    Explanation:
      "The formula is: 2*pi*r. Given r = d / 2 = 10/2 = 5. Therefore, circumference = 10pi",
    Answer: "10pi",
    Figure: welcome,
  },
  {
    _id: 2,
    File_Name: "Learn Counting",
    Uploaded: "2021-02-24 06:21:02 PM",
    Type: "Tutorial",
  },
  {
    _id: 3,
    File_Name: "All About Square",
    Uploaded: "2021-02-24 06:40:02 AM",
    Type: "Practice",
    Text: "Correct Answer",
    Breakpoint_title: [
      "Formula(1.5Pt)",
      "Insert Proper Value(0.5Pt)",
      "Correct Answer(1Pt)",
    ],
    Breakpoint_number: [1.5, 0.5, 1],
    Explanation:
      "The formula is: 2*pi*r. Given r = d / 2 = 10/2 = 5. Therefore, circumference = 10pi",
    Answer: "10pi",
    Figure: welcome,
    ques_type: "mcq",
  },
  {
    _id: 4,
    File_Name: "Brain Teasers",
    Uploaded: "2021-02-24 11:40:33 PM",
    Type: "Practice",
  },
  {
    _id: 5,
    File_Name: "Let's Know Pythagorus",
    Uploaded: "2021-02-24 11:40:33 AM",
    Type: "Problems of the week",
  },
  {
    _id: 6,
    File_Name: "Can u build 3D",
    Uploaded: "2021-03-24 10:24:12 PM",
    Type: "Tutorial",
  },
];

export const feedback_database = [
  {
    _id: 1,
    timestamp: "2021-03-24 10:24:12 PM",
    user_name: "John Doe",
    text: "I give this four stars because it's a pretty good app. It gives you the correct answers. Alot of people we're not satisfied with this app because it only lets you complete five questions or else you have to subscribe but if you explore the app you can watch a video and get five more questions to wat...",
    star: 4,
  },
  {
    _id: 2,
    timestamp: "2021-02-24 11:40:33 AM",
    user_name: "Sanjanapari Yadav",
    text: "This is good but it does not solve the big problem like word problem fix it",
    star: 3.5,
  },
  {
    _id: 3,
    timestamp: "2021-02-24 11:40:33 PM",
    user_name: "Harshinee Kannadasan",
    text: "This website is quite helpful!",
    star: 4.5,
  },
  {
    _id: 4,
    timestamp: "2021-03-24 10:24:12 PM",
    user_name: "Michaela Murray",
    text: "I give this thumbs up because it's a pretty good site. It gives you the correct answers. Alot of people we're not satisfied with this app because it only lets you complete five questions or else you have to subscribe but if you explore the app you can watch a video and get five more questions to watch. The reason I'm not giving was five stars because every once in awhile it would give me the wrong question other than that they were always great.",
    star: 4,
  },
  {
    _id: 5,
    timestamp: "2021-02-24 06:40:02 AM",
    user_name: "Hariom Srivastava",
    text: "This app I'd the best! It almost always has an answer and explains really well on how they got the answer. It has helped me so much on my math. You have to sheck this out!!!",
    star: 5,
  },
  {
    _id: 6,
    timestamp: "2021-03-30 8:24:12 PM",
    user_name: "Yashika Bhatia",
    text: "I don't like this site because it's very slow and I cannot do nothing really.",
    star: 1.5,
  },
];

export const suggestion_database = [
  {
    _id: 1,
    timestamp: "2021-03-24 10:24:12 PM",
    user_name: "John Doe",
    text: "Give more problems on quadratic solving! :(",
    status: 0,
  },
  {
    _id: 2,
    timestamp: "2021-02-24 11:40:33 AM",
    user_name: "Sanjanapari Yadav",
    text: "Need more problems for practice.",
    status: 1,
  },
  {
    _id: 3,
    timestamp: "2021-02-24 11:40:33 PM",
    user_name: "Harshinee Kannadasan",
    text: "Increase Frequency of Competitions",
    status: 0,
  },
  {
    _id: 4,
    timestamp: "2021-03-24 10:24:12 PM",
    user_name: "Michaela Murray",
    text: "Some volunteers would be nice",
    status: 1,
  },
  {
    _id: 5,
    timestamp: "2021-02-24 06:40:02 AM",
    user_name: "Hariom Srivastava",
    text: "Give a tutorial on Normalization Onegai! :(",
    status: 0,
  },
  {
    _id: 6,
    timestamp: "2021-03-30 8:24:12 PM",
    user_name: "Yashika Bhatia",
    text: "Make the site a bit less confusing Perhaps.",
    status: 0,
  },
];

export const report_database = [
  {
    _id: 1,
    timestamp: "2021-03-24 10:24:12 PM",
    user_name: "John Doe",
    text: "Give more problems on quadratic solving! :(",
    status: 0,
  },
  {
    _id: 2,
    timestamp: "2021-02-24 11:40:33 AM",
    user_name: "Sanjanapari Yadav",
    text: "Need more problems for practice.",
    status: 1,
  },
  {
    _id: 3,
    timestamp: "2021-02-24 11:40:33 PM",
    user_name: "Harshinee Kannadasan",
    text: "Increase Frequency of Competitions",
    status: 0,
  },
  {
    _id: 4,
    timestamp: "2021-03-24 10:24:12 PM",
    user_name: "Michaela Murray",
    text: "Some volunteers would be nice",
    status: 1,
  },
  {
    _id: 5,
    timestamp: "2021-02-24 06:40:02 AM",
    user_name: "Hariom Srivastava",
    text: "Give a tutorial on Normalization Onegai! :(",
    status: 0,
  },
  {
    _id: 6,
    timestamp: "2021-03-30 8:24:12 PM",
    user_name: "Yashika Bhatia",
    text: "Make the site a bit less confusing Perhaps.",
    status: 0,
  },
];
