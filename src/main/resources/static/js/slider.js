window.addEventListener("load", function () {
  const slider = document.querySelector(".slider");
  const sliderContainer = document.querySelector(".slider-container");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const slideItem = document.querySelectorAll(".slide-item");
  let slideItemWidth = slideItem[0].offsetWidth;
  const slideLength = slideItem.length;
  let itemDisplay;
  const updateVarIfChangeSize = () => {
    slideItemWidth = slideItem[0].offsetWidth;
    if (window.innerWidth < 768) {
      itemDisplay = 1;
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      itemDisplay = 3;
    } else {
      itemDisplay = 5;
    }
  };
  updateVarIfChangeSize();
  window.addEventListener("resize", updateVarIfChangeSize);
  let positionX = 0;
  let index = 0;
  //   sliderContainer.style.width = `${slideLength * slideItemWidth}px`;
  nextBtn.addEventListener("click", function () {
    handleChangeSlide(1);
  });
  prevBtn.addEventListener("click", function () {
    handleChangeSlide(-1);
  });
  const handleChangeSlide = (direction) => {
    if (direction === 1) {
      console.log(itemDisplay);

      if (index >= slideLength - itemDisplay) {
        index = slideLength - itemDisplay;
        return;
      }
      positionX = positionX - slideItemWidth;
      sliderContainer.style = `transform:translateX(${positionX}px)`;
      index++;
    } else if (direction === -1) {
      if (index <= 0) {
        index = 0;
        return;
      }
      positionX = positionX + slideItemWidth;
      console.log("prev");
      sliderContainer.style = `transform:translateX(${positionX}px)`;
      index--;
    }
  };
});
