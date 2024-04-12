async function fetchUser(username) {
  try {
    const source = await fetch(`https://api.github.com/users/${username}`);
    if (!source.ok) {
        const norep=document.createElement('h1')
        norep.innerText= ` ${username} is an invalid user on github`
        document.body.append(norep)
      throw new Error("The user is not found on github");

    }
    const data = await source.json();
    console.log(data.login);
    const div = document.createElement("div");
    div.className="container"
    div.innerHTML = `
    <img src=${data.avatar_url} class="Image"/>
     <h1>Name: ${data.login}</h1>
     <h2>Followers: ${data.followers}</h2>
     <h2>Following: ${data.following}</h2>
     <h2>Public Repos: ${data.public_repos}</h2>
     <h2>Hireable: ${data.hireable}</h2>
     <h2>location: ${data.location}</h2>
     `;
    document.body.appendChild(div);
  } catch (error) {
    console.error(error);
  }
}
const input = document.getElementById("userName");
const button = document.getElementById("searchB");
button.addEventListener("click", () => {
  fetchUser(input.value);
});
