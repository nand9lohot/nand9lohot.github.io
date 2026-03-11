const username = "nand9lohot"

fetch(`https://api.github.com/users/${username}/repos?per_page=100`)

.then(res => res.json())

.then(repos => {

repos
.filter(repo =>
!repo.fork &&
!repo.name.endsWith(".github.io")
)

.forEach(repo => {

const card = document.createElement("div")

card.className = "repo-card"

card.innerHTML = `

<h3>
<a href="${repo.html_url}" target="_blank">
${repo.name}
</a>
</h3>

<p>${repo.description || "Security research project"}</p>

<div class="repo-meta">

⭐ ${repo.stargazers_count}

|

🍴 ${repo.forks_count}

|

${repo.language || ""}

</div>
`

document.getElementById("repo-container").appendChild(card)

})

})