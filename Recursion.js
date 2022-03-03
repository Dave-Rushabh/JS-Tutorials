const details = {
  _id: "1234567890",
  status: true,
  groups: [
    {
      userId: "123",
      votes: [
        {
          userId: "abc",
          vote: false,
        },
      ],
    },
    {
      userId: "456",
      votes: [
        {
          userId: "def",
          vote: true,
        },
      ],
    },
  ],
};

const objectChecker = (obj) => {
  const array = Object.values(obj);
  array.forEach((item) => {
    if (typeof item == "string" || typeof item == "boolean") {
      console.log(item);
    } else {
      arrayChecker(item);
    }
  });
};

const arrayChecker = (arrayElement) => {
  if (Array.isArray(arrayElement)) {
    arrayElement.forEach((item) => {
      if (typeof item == "object") {
        objectChecker(item);
      }
    });
  }
};

objectChecker(details);
