function moveButton() {
  const noBtn = document.getElementById('noBtn');
  // Generates random positions within the viewport
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.style.position = 'fixed';
}

function celebrate() {
  document.getElementById('question').classList.add('hidden');
  document.querySelector('.buttons').classList.add('hidden');
  document.getElementById('message').classList.remove('hidden');
}
