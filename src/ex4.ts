// 4a Bygg en sida med ett trafikljus. När man klickar på en knapp ska nästa lampa i serien tändas.
// Rött → gult → grönt.

// 4b* Gör ett realistiskt trafikljus:
// rött → rött och gult samtidigt → grönt → gult → rött ljus

function setupTrafficLights(): void {
  const trafficBtn: HTMLButtonElement | null =
    document.querySelector<HTMLButtonElement>(".traffic-btn");
  const redLight: HTMLDivElement | null =
    document.querySelector<HTMLDivElement>(".top");
  const yellowLight: HTMLDivElement | null =
    document.querySelector<HTMLDivElement>(".middle");
  const greenLight: HTMLDivElement | null =
    document.querySelector<HTMLDivElement>(".bottom");

  let lightsState: string = "stop";

  if (trafficBtn && redLight && yellowLight && greenLight) {
    trafficBtn.addEventListener("click", () => {
      if (lightsState === "stop") {
        lightsState = "wait";
        redLight.classList.remove("on");
        yellowLight.classList.add("on");
      } else if (lightsState === "wait") {
        lightsState = "go";
        yellowLight.classList.remove("on");
        greenLight.classList.add("on");
      } else if (lightsState === "go") {
        lightsState = "slow-down";
        greenLight.classList.remove("on");
        yellowLight.classList.add("on");
      } else if (lightsState === "slow-down") {
        lightsState = "stop";
        redLight.classList.add("on");
        yellowLight.classList.remove("on");
      }
    });
  }
}

export { setupTrafficLights };
