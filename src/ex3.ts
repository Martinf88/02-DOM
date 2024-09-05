//3a Gör en button som gör ett annat element osynligt, med hjälp av CSS-klasser. Gör en annan button som gör elementet synligt.

//3b Gör en tredje button som "togglar" elementet. Alltså varannan gång gör elementet synligt och varannan gång gör det osynligt. Men använd en if-sats i stället för classList.toggle.

function toggleVisibility(): void {
  type Callback = (event: Event) => void;

  const showBtn: HTMLButtonElement | null =
    document.querySelector<HTMLButtonElement>(".show-btn");
  const hideBtn: HTMLButtonElement | null =
    document.querySelector<HTMLButtonElement>(".hide-btn");
  const showOrHideObject: HTMLParagraphElement | null =
    document.querySelector<HTMLParagraphElement>(".show-or-hide-object"); //! //as HTMLParagraphElement

  if (showBtn && hideBtn && showOrHideObject) {
    const showObject: Callback = () => {
      showOrHideObject.classList.remove("invisible");
    };
    const hideObject: Callback = () => {
      showOrHideObject?.classList.add("invisible");
    };

    showBtn.addEventListener("click", showObject);
    hideBtn.addEventListener("click", hideObject);
  }
}

export { toggleVisibility };
