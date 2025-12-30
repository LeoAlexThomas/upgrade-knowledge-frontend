export const tokenName = "token";

export const setToken = (token) => localStorage.setItem(tokenName, token);
export const getToken = () => localStorage.getItem(tokenName);
export const removeToken = () => localStorage.removeItem(tokenName);

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

export const allLessons = [
  {
    id: 1,
    title: "Maths",
    description: "This is a maths course",
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
    ratings: 4.5,
  },
  {
    _id: 2,
    name: "tim Doe",
    email: "timDoe@example.com",
    profileImage:
      "https://t4.ftcdn.net/jpg/04/31/64/75/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg",
    role: "tutor",
    ratings: 4,
  },
  {
    _id: 3,
    name: "allen Doe",
    email: "allenDoe@example.com",
    profileImage:
      "https://t4.ftcdn.net/jpg/04/31/64/75/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg",
    role: "tutor",
    ratings: 3.5,
  },
  {
    _id: 4,
    name: "joe Doe",
    email: "joeDoe@example.com",
    profileImage:
      "https://t4.ftcdn.net/jpg/04/31/64/75/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg",
    role: "tutor",
    ratings: 4,
  },
  {
    _id: 5,
    name: "mysty Doe",
    email: "mystyDoe@example.com",
    profileImage:
      "https://t4.ftcdn.net/jpg/04/31/64/75/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg",
    role: "tutor",
    ratings: 4.5,
  },
  {
    _id: 6,
    name: "jane Doe",
    email: "janeDoe@example.com",
    profileImage:
      "https://t4.ftcdn.net/jpg/04/31/64/75/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg",
    role: "tutor",
    ratings: 5,
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

export const userRoles = ["tutor", "student"];

export const getUserRoleLabel = (role) => {
  switch (role) {
    case "tutor":
      return "Tutor";
    case "student":
      return "Student";
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
