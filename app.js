const btn = document.querySelector('.toggle-btn')
btn.addEventListener('click', () => {
  document.body.classList.toggle('dark')
  btn.textContent = document.body.classList.contains('dark') ? '☀️ Modo claro' : '🌙 Modo oscuro'
})

const spans = document.querySelectorAll('.skills span')
spans.forEach(s => {
  s.addEventListener('mouseover', () => {
    s.style.background = '#333'
    s.style.color = '#fff'
  })
  s.addEventListener('mouseout', () => {
    if (document.body.classList.contains('dark')) {
      s.style.background = '#333'
      s.style.color = '#eee'
    } else {
      s.style.background = '#eee'
      s.style.color = '#333'
    }
  })
})
