const username = "nand9lohot"

const repoContainer = document.getElementById("repo-container")

fetch(`https://api.github.com/users/${username}/repos?sort=updated`)

.then(res => res.json())

.then(data => {

data
.filter(repo => !repo.fork)
.forEach(repo => {

const card = document.createElement("div")

card.className = "repo-card"

card.innerHTML = `

<div class="repo-title">
<a href="${repo.html_url}" target="_blank">
${repo.name}
</a>
</div>

<p>${repo.description || "Security research project"}</p>

<div class="repo-meta">

⭐ ${repo.stargazers_count}
|
🍴 ${repo.forks_count}
|
${repo.language || ""}

</div>
`

repoContainer.appendChild(card)

})

})