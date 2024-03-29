window.addEventListener("DOMContentLoaded", (event) => {
  getCVPageVisitCount();
});

// local
// const functionApi = "http://localhost:7071/api/GetCVPageCount?id=count";
const functionApi = 'https://malachiscvpagecounter.azurewebsites.net/api/GetCVPageCount?id=count';

const getCVPageVisitCount = () => {
  let count = 2; // default to 2..
  fetch(functionApi)
    .then((response) => {
      let json = response.json();
      return json;
    })
    .then((response) => {
      console.log("Website called function API.");
      count = response.currentCount;
      document.getElementById("count").innerText = `Page viewed ${count} times.`;
      document.getElementById("subtext").style.display = 'flex';
    })
    .catch(function (error) {
      console.log(error);
    });
  return count;
};
