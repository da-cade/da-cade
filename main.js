let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    // @ts-ignore
    document.getElementById("navbar").style.top = "0";
  } else {
    // @ts-ignore
    document.getElementById("navbar").style.top = "-65px";
  }
  prevScrollpos = currentScrollPos;
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.className.includes("red")) {
        entry.target.classList.add('red-animation')
      }
      if (entry.target.className.includes("green")) {
        entry.target.classList.add('green-animation')
      }
      if (entry.target.className.includes("pop")) {
        entry.target.classList.add('pop-up')
      }
    }
  })
})

observer.observe(document.querySelector('.whitespace.red'))
observer.observe(document.querySelector('.whitespace.green'))
observer.observe(document.querySelector('.pop'))