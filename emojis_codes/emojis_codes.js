document.querySelectorAll("ul.title li").forEach((emoji) => {
  emoji.addEventListener("click", () => {
    const code = emoji.getAttribute("data-code");
    navigator.clipboard.writeText(code).then(() => {
      // 기존 툴팁 제거
      const existing = emoji.querySelector(".emoji-tooltip");
      if (existing) emoji.removeChild(existing);

      // 새로운 툴팁 생성
      const tooltip = document.createElement("div");
      tooltip.innerText = "복사됨!";
      tooltip.classList.add("emoji-tooltip");
      emoji.appendChild(tooltip);

      // 1초 후 제거
      setTimeout(() => {
        if (tooltip.parentNode === emoji) {
          emoji.removeChild(tooltip);
        }
      }, 1000);
    });
  });
});
