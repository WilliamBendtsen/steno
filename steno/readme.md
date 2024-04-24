# README

## Hvordan har vi implementeret json?

Siden vores produkt i dette projekt primært er præget af visuel læring, og hvis man tager vores målgruppe i betragtning, så giver det ikke så meget mening at fylde vores produkt med en masse skrift. Det har derfor været en udfordring at indkorporere json i vores produkt.

## Dette er hvordan vores json fil ser ud

```json
{
  "planetsOption": "Hvilken planet skal vi rejse til?",
  "options2H3": "Hvor skal vi tage hen?",
  "option1Li": "Til Månen!",
  "option2Li": "Jeg vil se de andre planeter!",

  "backOption": "Tilbage",
  "continueOption": "Fortsæt"
}
```

## Dette er hvordan vores json er inkorporeret i vores javascript

```javascript
fetch("json/text.json")
  .then((response) => response.json())
  .then((menuText) => {
    document.querySelector(".planets-option h3").textContent =
      menuText.planetsOption;
    document.querySelector(".options-2 h3").textContent = menuText.options2H3;
    document.getElementById("option-1-link").textContent = menuText.option1Li;
    document.getElementById("option-2-link").textContent = menuText.option2Li;
    document.getElementById("back-option").textContent = menuText.backOption;
    document.getElementById("continue-option").textContent =
      menuText.continueOption;
  });
```

Det vi har gjort er at manipulere DOM'en vha. samarbejde mellem Javascript og json. Vi har placeret alt vores tekst inde i json-filen, og har vha. javascript fetchet den, så vi gennem javascript kan manipulere DOM'en ved at benytte os af textContent.
