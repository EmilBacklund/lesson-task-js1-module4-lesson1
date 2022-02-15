const url =
  "https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json";

const resultContainer = document.querySelector(".results");

async function makeApiCall() {
  const response = await fetch(url);

  const results = await response.json();

  console.log(results);

  resultContainer.innerHTML = "";

  for (let i = 0; i < results.length; i++) {
    if (i === 15) {
      break;
    }
    if (
      results[i].teamName.startsWith("c") ||
      results[i].teamName.startsWith("C")
    ) {
      continue;
    }

    resultContainer.innerHTML += `<div class="card">
      <h4>Team name: ${results[i].teamName}</h4>
      <p>City: ${results[i].location}</p>
      </div>`;
  }
}

makeApiCall();
