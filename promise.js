// Handle a Fulfilled Promise with then
const makeServerRequests = new Promise((resolve, reject) => {
  let responseFromServer = true;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

makeServerRequests.then((result) => {
  console.log(result);
});

// Handle rejected promises with catch
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = false;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

makeServerRequest.catch((error) => {
  console.log(error);
});
