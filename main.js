/*function showME(texto) {
        alert(texto)
      }*/

const linksSocialMedia = {
  github: 'hugohrubyjr',
  youtube: 'cs50',
  facebook: 'hugo.hrubyjunior',
  instagram: 'hugohrubyjr',
  twitter: 'chessbrah'
}
//showME(links.github)

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(Response => Response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
    })
}

getGitHubProfileInfos()

// ARROW FUNCTIONS > forma de contrair a função sem precisar cria-la
// funcion nomedafunção(argumentos, argumento2){
//code
//}

//Função Anônima
//(argumento, argumento2)  => {
//
//}

//() =>
