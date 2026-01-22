export const tokenName = "token";

export const setToken = (token) => localStorage.setItem(tokenName, token);
export const getToken = () => localStorage.getItem(tokenName);
export const removeToken = () => localStorage.removeItem(tokenName);

export const subjectsList = [
  "Maths",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "History",
  "Geography",
];

export const currentUser = {
  _id: 15647985,
  name: "Leo Alex Thomas",
  email: "leoalex960@gmail.com",
  role: "tutor",
  bio: "I am a student from USA and I am learning to code from scratch and I am very passionate about it. I am a student from USA and I am learning to code from scratch and I am very passionate about it. I am a student from USA and I am learning to code from scratch and I am very passionate about it.",
  subjects: [
    "Maths",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
    "History",
    "Geography",
    "Computer Science",
    "Art",
    "Music",
    "Physical Education",
    "Economics",
    "Business Studies",
    "Psychology",
    "Sociology",
    "Philosophy",
    "Political Science",
    "Environmental Science",
    "Statistics",
    "Calculus",
    "Algebra",
    "Geometry",
    "Trigonometry",
    "Biochemistry",
    "Microbiology",
    "Astronomy",
    "Astrophysics",
    "Geology",
    "Anthropology",
    "Linguistics",
    "Literature",
    "Creative Writing",
    "Drama",
    "Film Studies",
    "Photography",
    "Graphic Design",
    "Web Development",
    "App Development",
    "Data Science",
    "Machine Learning",
    "Artificial Intelligence",
    "Cybersecurity",
    "Networking",
    "Cloud Computing",
    "Software Engineering",
    "Project Management",
    "Marketing",
    "Finance",
    "Accounting",
    "Law",
    "Medicine",
    "Nursing",
    "Pharmacy",
    "Dentistry",
    "Veterinary Science",
  ],
  profileImage:
    "https://t4.ftcdn.net/jpg/04/31/64/75/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg",
  createdAt: "2023-01-01T00:00:00.000Z",
  updatedAt: "2023-01-01T00:00:00.000Z",
};

export const otherUser = {
  _id: 98765432,
  name: "John Andrew",
  email: "johnandrew960@gmail.com",
  role: "tutor",
  bio: "I am a tutor from UK and I have been teaching for 10 years. I specialize in Mathematics and Physics. I love to help students achieve their goals and excel in their studies.",
  subjects: [
    "Anthropology",
    "Linguistics",
    "Literature",
    "Creative Writing",
    "Drama",
    "Film Studies",
    "Photography",
    "Graphic Design",
    "Web Development",
    "App Development",
  ],
  overallRatings: 4.5,
  totalRatings: 25,
  profileImage:
    "https://t4.ftcdn.net/jpg/04/31/64/75/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg",
  createdAt: "2023-01-01T00:00:00.000Z",
  updatedAt: "2023-01-01T00:00:00.000Z",
};

export const tutorsLessons = [
  {
    id: 1,
    title: "Maths",
    description:
      "This is a maths course for beginners to advanced learners. It covers all the topics from basic arithmetic to advanced calculus. It is designed to help students understand the concepts and apply them in real life scenarios. Whether you are a beginner or an advanced learner, this course has something for everyone.",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/033/032/466/small/technology-background-sci-fi-futuristic-vector.jpg",
    sessionStartDate: "2026-01-01T00:00:00.000Z",
    sessionEndDate: "2026-01-31T00:00:00.000Z",
    tutor: {
      id: 1,
      name: "John Doe",
      email: "MwBQ3@example.com",
      role: "tutor",
    },
  },
  {
    id: 2,
    title: "Physics",
    description:
      "This is a physics course for beginners to advanced learners. It covers all the topics from basic mechanics to advanced quantum physics. It is designed to help students understand the concepts and apply them in real life scenarios. Whether you are a beginner or an advanced learner, this course has something for everyone.",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20220427/pngtree-blue-desktop-wallpaper-with-bokeh-light-bg-shiny-illustration-photo-image_13267726.jpg",
    sessionStartDate: "2026-01-01T00:00:00.000Z",
    sessionEndDate: "2026-01-31T00:00:00.000Z",
    tutor: {
      id: 1,
      name: "John Andrew",
      email: "johnandrew960@gmail.com",
      role: "tutor",
    },
  },
  {
    id: 3,
    title: "Chemistry",
    description:
      "This is a chemistry course for beginners to advanced learners. It covers all the topics from basic atomic structure to advanced organic chemistry. It is designed to help students understand the concepts and apply them in real life scenarios. Whether you are a beginner or an advanced learner, this course has something for everyone.",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20220427/pngtree-blue-desktop-wallpaper-with-bokeh-light-bg-shiny-illustration-photo-image_13267726.jpg",
    sessionStartDate: "2026-01-01T00:00:00.000Z",
    sessionEndDate: "2026-01-31T00:00:00.000Z",
    tutor: {
      id: 1,
      name: "John Andrew",
      email: "johnandrew960@gmail.com",
      role: "tutor",
    },
  },
];

export const myLessons = [
  {
    id: 1,
    title: "Maths",
    description: "This is a maths course",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/033/032/466/small/technology-background-sci-fi-futuristic-vector.jpg",
    sessionStartDate: "2026-01-01T00:00:00.000Z",
    sessionEndDate: "2026-01-31T00:00:00.000Z",
    tutor: {
      id: 1,
      name: "John Doe",
      email: "MwBQ3@example.com",
      role: "tutor",
    },
    student: {
      id: 1,
      name: "Leo Alex Thomas",
      email: "leoalex960@gmail.com",
      role: "student",
    },
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 2,
    title: "Physics",
    description: "This is a physics course",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20220427/pngtree-blue-desktop-wallpaper-with-bokeh-light-bg-shiny-illustration-photo-image_13267726.jpg",
    sessionStartDate: "2025-12-01T00:00:00.000Z",
    sessionEndDate: "2025-12-31T00:00:00.000Z",
    tutor: {
      id: 1,
      name: "John Andrew",
      email: "john.andrew@example.com",
      role: "tutor",
    },
    student: {
      id: 1,
      name: "Leo Alex Thomas",
      email: "leoalex960@gmail.com",
      role: "student",
    },
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 3,
    title: "Chemistry",
    description: "This is a chemistry course",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20250525/pngtree-yellow-background-for-powerpoint-bg-seminar-workshop-vector-image_17340077.jpg",
    sessionStartDate: "2026-02-01T00:00:00.000Z",
    sessionEndDate: "2026-02-31T00:00:00.000Z",
    tutor: {
      id: 1,
      name: "Sam Doe",
      email: "samDoe@example.com",
      role: "tutor",
    },
    student: {
      id: 1,
      name: "Leo Alex Thomas",
      email: "leoalex960@gmail.com",
      role: "student",
    },
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 4,
    title: "Biology",
    description: "This is a biology course",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/033/032/466/small/technology-background-sci-fi-futuristic-vector.jpg",
    sessionStartDate: "2026-03-01T00:00:00.000Z",
    sessionEndDate: "2026-03-31T00:00:00.000Z",
    tutor: {
      id: 1,
      name: "Tom Doe",
      email: "tomDoe@example.com",
      role: "tutor",
    },
    student: {
      id: 1,
      name: "Leo Alex Thomas",
      email: "leoalex960@gmail.com",
      role: "student",
    },
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 5,
    title: "English",
    description: "This is a english course",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20220427/pngtree-blue-desktop-wallpaper-with-bokeh-light-bg-shiny-illustration-photo-image_13267726.jpg",
    sessionStartDate: "2025-11-01T00:00:00.000Z",
    sessionEndDate: "2025-11-31T00:00:00.000Z",
    tutor: {
      id: 1,
      name: "Steve Doe",
      email: "steveDoe@example.com",
      role: "tutor",
    },
    student: {
      id: 1,
      name: "Leo Alex Thomas",
      email: "leoalex960@gmail.com",
      role: "student",
    },
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 6,
    title: "History",
    description: "This is a history course",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/033/032/466/small/technology-background-sci-fi-futuristic-vector.jpg",
    sessionStartDate: "2025-10-01T00:00:00.000Z",
    sessionEndDate: "2025-10-31T00:00:00.000Z",
    tutor: {
      id: 1,
      name: "Stefan Doe",
      email: "stefanDoe@example.com",
      role: "tutor",
    },
    student: {
      id: 1,
      name: "Leo Alex Thomas",
      email: "leoalex960@gmail.com",
      role: "student",
    },
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
  },
];

export const myFeedbacks = [
  {
    _id: 546134684,
    content:
      "This is a feedback for maths course. It is really good and worth it for me as a student.",
    ratings: 4.5,
    lessonTitle: "Maths",
  },
  {
    _id: 546134685,
    content:
      "This is a feedback for physics course. It is really good and worth it for me as a student.",
    ratings: 4.5,
    lessonTitle: "Physics",
  },
  {
    _id: 546134686,
    content:
      "This is a feedback for chemistry course. It is really good and worth it for me as a student.",
    ratings: 4.0,
    lessonTitle: "Chemistry",
  },
  {
    _id: 546134687,
    content:
      "This is a feedback for biology course. It is really good and worth it for me as a student.",
    ratings: 5.0,
    lessonTitle: "Biology",
  },
  {
    _id: 546134688,
    content:
      "This is a feedback for english course. It is really good and worth it for me as a student.",
    ratings: 4.0,
    lessonTitle: "English",
  },
  {
    _id: 546134689,
    content:
      "This is a feedback for history course. It is really good and worth it for me as a student.",
    ratings: 3.5,
    lessonTitle: "History",
  },
];

export const allLessons = [
  {
    id: 1,
    title: "Maths",
    description:
      "This is a maths course for beginners to advanced learners. It covers all the topics from basic arithmetic to advanced calculus. It is designed to help students understand the concepts and apply them in real life scenarios. Whether you are a beginner or an advanced learner, this course has something for everyone.",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20220427/pngtree-blue-desktop-wallpaper-with-bokeh-light-bg-shiny-illustration-photo-image_13267726.jpg",
    sessionStartDate: "2023-01-01",
    sessionEndDate: "2023-01-31",
    tutor: {
      id: 1,
      name: "John Doe",
      email: "MwBQ3@example.com",
      role: "tutor",
    },
    payment: {
      amount: 199,
      isPaid: true,
      paymentDate: "2023-01-01T00:00:00.000Z",
    },
    student: null,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 2,
    title: "Physics",
    description: "This is a physics course",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/033/032/466/small/technology-background-sci-fi-futuristic-vector.jpg",
    sessionStartDate: "2023-01-01",
    sessionEndDate: "2023-01-31",
    tutor: {
      id: 1,
      name: "John mathew",
      email: "johnmathew@example.com",
      role: "tutor",
    },
    payment: {
      amount: 299,
      isPaid: false,
      paymentDate: null,
    },
    student: null,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 3,
    title: "Chemistry",
    description: "This is a chemistry course",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20250525/pngtree-yellow-background-for-powerpoint-bg-seminar-workshop-vector-image_17340077.jpg",
    sessionStartDate: "2023-01-01",
    sessionEndDate: "2023-01-31",
    tutor: {
      id: 1,
      name: "Elezabath",
      email: "elezabath@example.com",
      role: "tutor",
    },
    payment: {
      amount: 399,
      isPaid: true,
      paymentDate: "2023-01-01T00:00:00.000Z",
    },
    student: null,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 4,
    title: "Biology",
    description: "This is a biology course",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20220427/pngtree-blue-desktop-wallpaper-with-bokeh-light-bg-shiny-illustration-photo-image_13267726.jpg",
    sessionStartDate: "2023-01-01",
    sessionEndDate: "2023-01-31",
    tutor: {
      id: 1,
      name: "nick Doe",
      email: "nickDoe@example.com",
      role: "tutor",
    },
    payment: {
      amount: 499,
      isPaid: false,
      paymentDate: null,
    },
    student: null,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 5,
    title: "English",
    description: "This is a english course",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/033/032/466/small/technology-background-sci-fi-futuristic-vector.jpg",
    sessionStartDate: "2023-01-01",
    sessionEndDate: "2023-01-31",
    tutor: {
      id: 1,
      name: "Steve Doe",
      email: "steveDoe@example.com",
      role: "tutor",
    },
    payment: {
      amount: 599,
      isPaid: true,
      paymentDate: "2023-01-01T00:00:00.000Z",
    },
    student: null,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 6,
    title: "History",
    description: "This is a history course",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20250525/pngtree-yellow-background-for-powerpoint-bg-seminar-workshop-vector-image_17340077.jpg",
    sessionStartDate: "2023-01-01",
    sessionEndDate: "2023-01-31",
    tutor: {
      id: 1,
      name: "Stefan Doe",
      email: "stefanDoe@example.com",
      role: "tutor",
    },
    payment: {
      amount: 699,
      isPaid: false,
      paymentDate: null,
    },
    student: null,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 7,
    title: "Geography",
    description: "This is a geography course",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20220427/pngtree-blue-desktop-wallpaper-with-bokeh-light-bg-shiny-illustration-photo-image_13267726.jpg",
    sessionStartDate: "2023-01-01",
    sessionEndDate: "2023-01-31",
    tutor: {
      id: 1,
      name: "tim Doe",
      email: "timDoe@example.com",
      role: "tutor",
    },
    payment: {
      amount: 799,
      isPaid: true,
      paymentDate: "2023-01-01T00:00:00.000Z",
    },
    student: null,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 8,
    title: "Maths",
    description: "This is a maths course",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/033/032/466/small/technology-background-sci-fi-futuristic-vector.jpg",
    sessionStartDate: "2023-01-01",
    sessionEndDate: "2023-01-31",
    tutor: {
      id: 1,
      name: "allen Doe",
      email: "allenDoe@example.com",
      role: "tutor",
    },
    payment: {
      amount: 899,
      isPaid: false,
      paymentDate: null,
    },
    student: null,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 9,
    title: "Physics",
    description: "This is a physics course",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20250525/pngtree-yellow-background-for-powerpoint-bg-seminar-workshop-vector-image_17340077.jpg",
    sessionStartDate: "2023-01-01",
    sessionEndDate: "2023-01-31",
    tutor: {
      id: 1,
      name: "joe Doe",
      email: "joeDoe@example.com",
      role: "tutor",
    },
    payment: {
      amount: 999,
      isPaid: true,
      paymentDate: "2023-01-01T00:00:00.000Z",
    },
    student: null,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 10,
    title: "Chemistry",
    description: "This is a chemistry course",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20220427/pngtree-blue-desktop-wallpaper-with-bokeh-light-bg-shiny-illustration-photo-image_13267726.jpg",
    sessionStartDate: "2023-01-01",
    sessionEndDate: "2023-01-31",
    tutor: {
      id: 1,
      name: "mysty Doe",
      email: "mystyDoe@example.com",
      role: "tutor",
    },
    payment: {
      amount: 1099,
      isPaid: false,
      paymentDate: null,
    },
    student: null,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
  },
];

export const myTutors = [
  {
    _id: 1,
    name: "Stefan Doe",
    email: "stefanDoe@example.com",
    profileImage:
      "https://t4.ftcdn.net/jpg/04/31/64/75/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg",
    role: "tutor",
    overallRatings: 4.5,
    totalRatings: 10,
  },
  {
    _id: 2,
    name: "tim Doe",
    email: "timDoe@example.com",
    profileImage:
      "https://t4.ftcdn.net/jpg/04/31/64/75/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg",
    role: "tutor",
    overallRatings: 4,
    totalRatings: 10,
  },
  {
    _id: 3,
    name: "allen Doe",
    email: "allenDoe@example.com",
    profileImage:
      "https://t4.ftcdn.net/jpg/04/31/64/75/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg",
    role: "tutor",
    overallRatings: 3.5,
    totalRatings: 10,
  },
  {
    _id: 4,
    name: "joe Doe",
    email: "joeDoe@example.com",
    profileImage:
      "https://t4.ftcdn.net/jpg/04/31/64/75/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg",
    role: "tutor",
    overallRatings: 4,
    totalRatings: 10,
  },
  {
    _id: 5,
    name: "mysty Doe",
    email: "mystyDoe@example.com",
    profileImage:
      "https://t4.ftcdn.net/jpg/04/31/64/75/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg",
    role: "tutor",
    overallRatings: 4.5,
    totalRatings: 10,
  },
  {
    _id: 6,
    name: "jane Doe",
    email: "janeDoe@example.com",
    profileImage:
      "https://t4.ftcdn.net/jpg/04/31/64/75/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg",
    role: "tutor",
    overallRatings: 5,
    totalRatings: 10,
  },
];

export const myPayments = [
  {
    _id: 1,
    lessonTitle: "Maths",
    price: 100,
    date: "2025-10-01T00:00:00.000Z",
    status: "pending",
  },
  {
    _id: 2,
    lessonTitle: "Chemistry",
    price: 349,
    date: "2025-12-30T00:00:00.000Z",
    status: "success",
  },
  {
    _id: 3,
    lessonTitle: "Physics",
    price: 299,
    date: "2025-11-01T00:00:00.000Z",
    status: "failed",
  },
  {
    _id: 4,
    lessonTitle: "English",
    price: 199,
    date: "2025-10-01T00:00:00.000Z",
    status: "pending",
  },
  {
    _id: 5,
    lessonTitle: "Biology",
    price: 399,
    date: "2025-10-01T00:00:00.000Z",
    status: "pending",
  },
  {
    _id: 6,
    lessonTitle: "Physics",
    price: 299,
    date: "2025-11-01T00:00:00.000Z",
    status: "failed",
  },
  {
    _id: 7,
    lessonTitle: "Geography",
    price: 199,
    date: "2025-10-01T00:00:00.000Z",
    status: "pending",
  },
];

export const tutorAvailabilitySlots = [
  "2026-01-21T06:30:00.000Z",
  "2026-01-21T08:30:00.000Z",
  "2026-01-21T10:30:00.000Z",
  "2026-01-21T12:30:00.000Z",
  "2026-01-21T14:00:00.000Z",
  "2026-01-21T06:30:00.000Z",
  "2026-01-21T08:30:00.000Z",
  "2026-01-21T10:30:00.000Z",
  "2026-01-21T12:30:00.000Z",
  "2026-01-21T14:00:00.000Z",
  "2026-01-21T06:30:00.000Z",
  "2026-01-21T08:30:00.000Z",
  "2026-01-21T10:30:00.000Z",
  "2026-01-21T12:30:00.000Z",
  "2026-01-21T14:00:00.000Z",
];

export const userRoles = ["tutor", "student"];

export const getUserRoleLabel = (role) => {
  switch (role) {
    case "tutor":
      return "TUTOR";
    case "student":
      return "STUDENT";
  }
};

export const unAuthorizedPaths = [
  "/login",
  "/register",
  "/forgotPassword",
  "/resetPassword",
];

export const getFormattedDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.toLocaleString("default", { day: "2-digit" });
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.toLocaleString("default", { year: "numeric" });
  return `${day} ${month} ${year}`;
};

export const getFormattedTime = (dateString) => {
  const date = new Date(dateString);
  // const day = date.toLocaleString("default", { day: "2-digit" });
  // const month = date.toLocaleString("default", { month: "short" });
  // const year = date.toLocaleString("default", { year: "numeric" });
  const time = date.toLocaleString("default", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return time;
};

export const getLessonStatus = (startDateString, endDateString) => {
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);
  const today = new Date();
  if (today > endDate) {
    return "Completed";
  } else if (today < startDate) {
    return "Upcoming";
  } else {
    return "On going";
  }
};
