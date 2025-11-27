window.addEventListener("load", () => {
  const audio = document.getElementById("bg-music");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const volumeSlider = document.getElementById("volumeSlider");

  audio.volume = 0;
  audio.play().catch(() => {
    document.body.addEventListener("click", () => audio.play(), { once: true });
  });

  let vol = 0;
  const fadeIn = setInterval(() => {
    if (vol < 1) {
      vol += 0.05;
      if (vol > 1) vol = 1;
      audio.volume = vol;
    } else {
      clearInterval(fadeIn);
    }
  }, 200);

  playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playPauseBtn.textContent = "🎵";
    } else {
      audio.pause();
      playPauseBtn.textContent = "🔇";
    }
  });

  volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
  });
});
