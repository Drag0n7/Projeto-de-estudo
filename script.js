function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }
  // pergar tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver lightMode,  adicionar a img light
    img.setAttribute("src", "./assets/assets/avatar-aliança.png")
    img.setAttribute(
      "alt",
      "imagem do simbolo da aliança de warcraft rosto do leão amarelo e azul"
    )
  } else {
    //se tiver sem light Mode manter a imagem normal
    img.setAttribute("src", "./assets/assets/avatar-horda.png")
    img.setAttribute(
      "alt",
      "imagem do simbolo da horda de warcraft vemelha tipo chamas"
    )
  }
}
