function getCardData() {
    fetch("./assets/data/projects.json")
        .then(res => res.json())
        .then((res) => res.forEach((element) => {
            buildCardData(element.image, element.altImage, element.title, element.date, element.description, element.imgInButton, element.linkInButton, res)

        }))
}


function buildCardData(image, altImage, title, date, description, imgInButton, linkInButton, res) {

    let cardContainer = document.querySelector(".card-container")

    let div = document.createElement("div")
    div.classList.add('separation-container')
    cardContainer.appendChild(div)
    let hr = document.createElement("hr")
    div.appendChild(hr)


    // card
    let card = document.createElement("article")
    card.classList.add("card")
    cardContainer.appendChild(card)

    // header
    let cardImg = document.createElement("div")
    cardImg.classList.add("card-img")
    card.appendChild(cardImg)

    // img in header

    let imgInCardImg = document.createElement('img')
    imgInCardImg.src = `${image}`
    imgInCardImg.setAttribute("alt", `${altImage}`)
    imgInCardImg.setAttribute("draggable", "false")
    cardImg.appendChild(imgInCardImg)

    let content = document.createElement('div')
    content.classList.add('card-content')
    card.appendChild(content)

    // title

    let h3Title = document.createElement('h3')
    h3Title.classList.add('title')
    h3Title.textContent = `${title}`
    content.appendChild(h3Title)

    // subtitle

    let subtitle = document.createElement('p')
    subtitle.classList.add('subtitle')
    subtitle.textContent = `${date}`
    content.appendChild(subtitle)

    // description

    let pDescription = document.createElement('p')
    pDescription.classList.add('description')
    pDescription.textContent = `${description}`
    content.appendChild(pDescription)

    // button

    let buttonLink = document.createElement('div')
    buttonLink.classList.add("button-container")
    card.appendChild(buttonLink)

    // Link in button

    let linkButton = document.createElement('a')
    linkButton.setAttribute("target", "blank")
    linkButton.setAttribute("href", `${linkInButton}`)
    linkButton.textContent = 'Voir plus'
    buttonLink.appendChild(linkButton)

}

getCardData()