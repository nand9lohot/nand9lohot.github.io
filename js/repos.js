const username = "nand9lohot"

const container = document.getElementById("repo-container")

function topicClass(topic){

if(topic.includes("ai")) return "tag-ai"
if(topic.includes("cloud")) return "tag-cloud"
if(topic.includes("kubernetes")) return "tag-cloud"
if(topic.includes("security")) return "tag-security"
if(topic.includes("threat")) return "tag-security"
if(topic.includes("detection")) return "tag-detection"
if(topic.includes("linux")) return "tag-os"
if(topic.includes("kernel")) return "tag-os"

return "tag-default"

}

function languageIcon(lang){

if(!lang) return ""

const map = {

Python:"devicon-python-plain",
JavaScript:"devicon-javascript-plain",
TypeScript:"devicon-typescript-plain",
Go:"devicon-go-plain",
Rust:"devicon-rust-plain",
C:"devicon-c-plain",
"C++":"devicon-cplusplus-plain",
Java:"devicon-java-plain",
Shell:"devicon-bash-plain",
HTML:"devicon-html5-plain",
CSS:"devicon-css3-plain"

}

const icon = map[lang] || ""

return icon
? `<div class="repo-language"><i class="${icon}"></i> ${lang}</div>`
: `<div class="repo-language">${lang}</div>`

}

fetch(`https://api.github.com/users/${username}/repos?per_page=100`,{
headers:{
Accept:"application/vnd.github.mercy-preview+json"
}
})
.then(res => res.json())
.then(repos => {

repos
.filter(repo => !repo.fork && !repo.name.endsWith(".github.io"))
.forEach(repo => {

const topics = repo.topics || []

const topicTags = topics.map(topic => {

const cls = topicClass(topic)

return `<span class="repo-tag ${cls}">${topic.replace(/-/g," ")}</span>`

}).join("")

const card = document.createElement("div")

card.className = "repo-card"

card.innerHTML = `

<div class="repo-title">
<a href="${repo.html_url}" target="_blank">
${repo.name.replace(/[-_]/g," ")}
</a>
</div>

<p>${repo.description || "Security research project"}</p>

<div class="repo-tags">
${topicTags}
</div>

<div class="repo-meta">

⭐ ${repo.stargazers_count}
|
🍴 ${repo.forks_count}

</div>

${languageIcon(repo.language)}

`

container.appendChild(card)

})

})