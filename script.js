const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");

yesBtn.addEventListener("click", () => {
  result.innerHTML = `
    <div class="yes">
      <video autoplay loop muted>
        <source src="resources/istockphoto-1343666742-640_adpp_is.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="thankyou">Thank you! 💖</div>
    </div>
  `;
});

noBtn.addEventListener("click", () => {
  result.innerHTML = `
    <div class="no">
      Invalid option
    </div>
  `;
});
