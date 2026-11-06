// console.log("Nigger");


// function getdata(success) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (success) {
//                 resolve("Data fetched successfully!");
//             } else {
//                 reject("Failed to fetch data!");
//             }
//         }, 4000);
//     });
// }

// getdata(true)
//     .then((data) => console.log("data:", data))
//     .catch((error) => console.error("error:", error));;
async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}
getData();