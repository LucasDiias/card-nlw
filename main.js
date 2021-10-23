const links = {
  github: 'LucasDiias',
  youtube: 'channel/UCiYj2TaHZuI-p9BxB89Rh_w',
  instagram: 'diias.luc',
  facebook: 'diias.luc',
  twitter: 'AkrM0rgan'
}

function changeLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${links[social]}`
  }
}

changeLinks()

function getGithubUserInfo() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPic.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubUserInfo()
