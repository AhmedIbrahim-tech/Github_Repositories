// Main Variables
let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

getButton.onclick = function () {
  getRepos();
};

// Get Repos Function
async function getRepos() {
  if (theInput.value == "") {
    // If Value Is Empty

    reposData.innerHTML = "<span>Please Write Github Username.</span>";
  } else {
    const url = `https://api.github.com/users/${theInput.value}/repos`;
    const response = await fetch(url);
    let data = await response.json();

    // Empty The Container
    reposData.innerHTML = "";

    // Loop On Repositories
    data.forEach((repo, i) => {
      // Create The Main Div Element
      let mainDiv = document.createElement("div");

      // ----------------------- Index Element ----------------------

      // Create The Main Index Element
      let mainIndex = document.createElement("p");

      // Create Index Name Text
      let IndexName = document.createTextNode(i + 1);

      // Append The Index Name To Main Index
      mainIndex.appendChild(IndexName);

      // Add Class On Main Div
      mainIndex.className = "index-box";

      // Append Index Anchor To Main Div
      mainDiv.appendChild(mainIndex);

      // ------------------End Index Element -----------------------

      // Create Repo Name Text
      let repoName = document.createTextNode(repo.name);

      // Append The Text To Main Div
      mainDiv.appendChild(repoName);

      // Create Repo URL Anchor
      let theUrl = document.createElement("a");

      // Create Repo Url Text
      let theUrlText = document.createTextNode("Visit");

      // Append The Repo Url Text To Anchor Tag
      theUrl.appendChild(theUrlText);

      // Add Thje Hypertext Reference "href"
      theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;

      // Set Attribute Blank
      theUrl.setAttribute("target", "_blank");

      // Append Url Anchor To Main Div
      mainDiv.appendChild(theUrl);

      // Create Stars Count Span
      let starsSpan = document.createElement("span");

      // Create The Stars Count Text
      let starsText = document.createTextNode(
        `Stars [ ${repo.stargazers_count} ]`
      );

      // Add Stars Count Text To Stars Span
      starsSpan.appendChild(starsText);

      // Append Stars Count Span To Main Div
      mainDiv.appendChild(starsSpan);

      // Add Class On Main Div
      mainDiv.className = "repo-box";

      // Append The Main Div To Container
      reposData.appendChild(mainDiv);
    });
  }
}
