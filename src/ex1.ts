// 1 Skapa en webbsida med ett button- och ett p-element. När man klickar på knappen ska texten i p-elementet uppdateras, så att den visar hur många gånger man har klickat på knappen:
// <p class="info"> Du har klickat 25 gånger. </p>

// Plocka ut element ur DOM
// State-variabel för antal klick
// Event listener för button, som uppdaterar innerText i <p>

function buttonClicks(): void {
  type Callback = (event: Event) => void;

  const btn: HTMLButtonElement | null =
    document.querySelector<HTMLButtonElement>(".btn"); //! //as HTMLButtonElement
  const info: HTMLParagraphElement | null =
    document.querySelector<HTMLParagraphElement>(".info"); //! //as HTMLParagraphElement

  let clicks: number = 0;
  if (btn && info) {
    const whenClick: Callback = () => {
      clicks++;
      info.innerHTML = `Du har klickat ${clicks} gånger.`;
    };
    btn.addEventListener("click", whenClick);
  }
}

export { buttonClicks };
