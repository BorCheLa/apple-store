const introMoreButton = document.getElementById(`introMoreButton`);
const introTextWrapper = document.getElementById(`introTextWrapper`);
introMoreButton.addEventListener(`click`, (event) => {
  event.target.remove();
  introTextWrapper.classList.add(`full`);
});
