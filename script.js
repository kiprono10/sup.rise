const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");

yesBtn.addEventListener("click", () => {
  result.innerHTML = `
    <div class="yes">
      <video id="videoPlayer" loop muted playsinline>
        <source src="resources/istockphoto-1343666742-640_adpp_is.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="thankyou" style="opacity: 0; transition: opacity 0.5s ease-in;">
        <div>Thank you! 💖</div>
        <div class="poem">
          <p><strong>A Little Question, A Big Heart</strong></p>
          <p>I don't have roses enough to show,<br>
          All the feelings I already know.<br>
          But in my heart, so soft and true,<br>
          Every beat keeps choosing you.</p>
          <p>If love were words, I'd write your name,<br>
          In every smile, in every flame.<br>
          So with a hope I can't pretend,<br>
          I ask this now, not as a trend</p>
        </div>
      </div>
    </div>
  `;
  
  const video = document.getElementById("videoPlayer");
  const thankyou = document.querySelector(".thankyou");
  
  // Show thankyou when video starts playing
  video.addEventListener("play", () => {
    setTimeout(() => {
      thankyou.style.opacity = "1";
    }, 500);
  }, { once: true });
  
  video.play().catch(error => {
    console.error("Video playback failed:", error);
  });
});

noBtn.addEventListener("click", () => {
  result.innerHTML = `
    <div class="no">
      Invalid option
    </div>
  `;
});
