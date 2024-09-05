const panels = document.querySelectorAll(".panel")

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removePanelActive()
    panel.classList.add("active")
  })
})

function removePanelActive() {
  panels.forEach((panel) => {
    panel.classList.remove("active")
  })
}
