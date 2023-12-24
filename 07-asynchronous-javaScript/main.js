function mySetTimeout(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

mySetTimeout(3000).then(() => {
  console.log("three seconds have passed!");
});

//THEN/CATCH

// function makeToys() {
//   return new Promise((resolve, reject) => {
//     mySetTimeout(3000).then(() => {
//       if (Math.random() > 0.1) {
//         resolve("Undefected");
//       } else {
//         reject("defected");
//       }
//     });
//   });
// }
// function deliverToys(makeStatus) {
//   return new Promise((resolve, reject) => {
//     mySetTimeout(3000).then(() => {
//       if (makeStatus === "Undefected") {
//         if (Math.random() > 0.2) {
//           resolve("Toy was delivered");
//         } else {
//           reject("Toy was not delivered");
//         }
//       }
//     });
//   });
// }
// function sellToys(status) {
//   return new Promise((resolve, reject) => {
//     mySetTimeout(3000).then(() => {
//       if (status === "Toy was delivered") {
//         if (Math.random() > 0.3) {
//           resolve("Toy was  sold");
//         } else {
//           reject("Toy was not sold");
//         }
//       }
//     });
//   });
// }

// makeToys()
//   .then((makeStatus) => {
//     console.log(makeStatus);
//     return deliverToys(makeStatus);
//   })
//   .then((deliverStatus) => {
//     console.log(deliverStatus);
//     return sellToys(deliverStatus);
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

//ASYNC/AWAIT

async function makeToys() {
  await mySetTimeout(3000);
  if (Math.random() > 0.1) {
    return "Undefected";
  } else {
    return "defected";
  }
}

async function deliverToys(status) {
  await mySetTimeout(3000);
  if (status === "Undefected") {
    if (Math.random() > 0.2) {
      return "Toy was delivered";
    } else {
      return "Toy was not delivered";
    }
  }
}

async function sellToys(status) {
  await mySetTimeout(3000);
  if (status === "Toy was delivered") {
    if (Math.random() > 0.3) {
      return "Toy was  sold";
    } else {
      return "Toy was not sold";
    }
  }
}

async function promisify() {
  try {
    const status = await makeToys();
    console.log(status);

    const deliver = await deliverToys(status);
    console.log(deliver);

    const result = await sellToys(deliver);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

promisify();
