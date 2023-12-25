function expo(number, degree, callback) {
  let result = 1;
  for (let i = 0; i < degree; i++) {
    result = callback(number, result);
  }
  return result;
}

console.log(
  expo(2, 5, (number, result) => {
    return (result = result * number);
  })
);

function createPost(post) {
  const postElement = document.createElement("div");
  postElement.classList.add("post");

  const titleElement = document.createElement("h2");
  titleElement.classList.add("post-title");
  titleElement.textContent = post.title;

  const contentElement = document.createElement("p");
  contentElement.classList.add("post-content");
  contentElement.textContent = post.body;

  const authorElement = document.createElement("p");
  authorElement.classList.add("post-author");
  authorElement.textContent = "Posted by User: " + post.userId;

  const idElement = document.createElement("p");
  idElement.classList.add("post-id");
  idElement.textContent = "Id:" + post.id;

  postElement.append(titleElement, contentElement, authorElement, idElement);

  return postElement;
}

async function fetchData() {
  try {
    const rawData = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!rawData.ok) {
      throw Error("Not good request");
    }
    const data = await rawData.json();
    const postContainer = document.querySelector(".posts");

    data.forEach((post) => {
      const postCreate = createPost(post);
      postContainer.append(postCreate);
    });
  } catch (error) {
    console.error(error.message);
  }
}
fetchData();

// #3

const userObj = {
  name: "Giorgi",
  age: 25,
  job: "Web Developer",
  location: {
    city: "Tbilisi",
  },
};

function deepCopyObject(obj) {
  return new Promise((resolve, reject) => {
    if (typeof obj !== "object" || obj === null) {
      reject(new Error("argument must be an object."));
    }

    try {
      const copiedObject = JSON.parse(JSON.stringify(obj));
      resolve(copiedObject);
    } catch (error) {
      reject(new Error("Error during deep copy."));
    }
  });
}

deepCopyObject(userObj)
  .then((copiedObject) => {
    console.log("Deep copy successful:", copiedObject);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
