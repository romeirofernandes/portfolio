document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".fixed-header")
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })
  })

