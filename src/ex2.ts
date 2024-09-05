// 2 Gör en button som växlar mellan två bakgrundsfärger när man klickar på den. Använd CSS-klasser.

type Callback = (event: Event) => void;

function setupColorButton(): void {
  const clrBtn: HTMLButtonElement | null =
    document.querySelector<HTMLButtonElement>(".clr-btn");

  if (clrBtn) {
    const colorCLick: Callback = () => {
      if (clrBtn?.classList.contains("blue")) {
        clrBtn.classList.remove("blue");
        clrBtn.classList.add("red");
      } else if (clrBtn?.classList.contains("red")) {
        clrBtn.classList.remove("red");
        clrBtn.classList.add("blue");
      } else {
        clrBtn?.classList.add("blue");
      }
    };

    clrBtn?.addEventListener("click", colorCLick);
  }
}

export { setupColorButton };
