const introMoreButton = document.getElementById(`introMoreButton`);
const introTextWrapper = document.getElementById(`introTextWrapper`);
introMoreButton.addEventListener(`click`, (event) => {
  event.target.remove();
  introTextWrapper.classList.add(`full`);
});

const reviewMoreButtons = document.querySelectorAll(`.reviewMoreButton`);
reviewMoreButtons.forEach((moreButton) => {
  moreButton.addEventListener(`click`, (event) => {
    const parent = event.target.parentElement;
    event.target.remove();
    parent.classList.add(`full`);
  });
});
