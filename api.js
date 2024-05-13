const results = document.getElementById("results");
async function fetchUser(username) {
  try {
    const source = await fetch(`https://api.github.com/users/${username}`);
    if (!source.ok) {
      results.innerText = ` ${username} is an invalid user on github`;
      throw new Error("The user is not found on github");
    }
    const data = await source.json();
    console.log(data.login);
    results.innerHTML = `
    <div class="container-fluid bg-light vh-100 d-flex justify-content-center align-items-center">
    <div class="container p-5 rounded">
      <div class="text-center">
        <img src="${data.avatar_url}" class="img-fluid rounded-circle mb-3" alt="Profile Image" style="max-width: 200px;">
        <h1 class="mb-3">Name: ${data.login}</h1>
        <h2 class="mb-3">Followers: ${data.followers}</h2>
        <h2 class="mb-3">Following: ${data.following}</h2>
        <h2 class="mb-3">Public Repos: ${data.public_repos}</h2>
        <h2 class="mb-3">Hireable: ${data.hireable}</h2>
        <h2 class="mb-3">Location: ${data.location}</h2>
      </div>
    </div>
  </div>
     `;
  } catch (error) {
    console.error(error);
  }
}
const input = document.getElementById("userName");
const button = document.getElementById("searchB");
button.addEventListener("click", () => {
  fetchUser(input.value);
});
