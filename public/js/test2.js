const DOMstrings = {
  stepsBtnClass: 'multisteps-form__progress-btn',
  stepsBtns: document.querySelectorAll(`.multisteps-form__progress-btn`),
  stepsBar: document.querySelector('.multisteps-form__progress'),
  stepsForm: document.querySelector('.multisteps-form__form'),
  stepsFormTextareas: document.querySelectorAll('.multisteps-form__textarea'),
  stepFormPanelClass: 'multisteps-form__panel',
  stepFormPanels: document.querySelectorAll('.multisteps-form__panel'),
  stepPrevBtnClass: 'js-btn-prev',
  stepNextBtnClass: 'js-btn-next' };
 
 
const removeClasses = (elemSet, className) => {
 
  elemSet.forEach(elem => {
 
    elem.classList.remove(className);
 
  });
 
};

 
const findParent = (elem, parentClass) => {
 
  let currentNode = elem;
 
  while (!currentNode.classList.contains(parentClass)) {
    currentNode = currentNode.parentNode;
  }
 
  return currentNode;
 
};
 
const getActiveStep = elem => {
  return Array.from(DOMstrings.stepsBtns).indexOf(elem);
};
 
const setActiveStep = activeStepNum => {
 
  removeClasses(DOMstrings.stepsBtns, 'js-active');
 
  DOMstrings.stepsBtns.forEach((elem, index) => {
 
    if (index <= activeStepNum) {
      elem.classList.add('js-active');
    }
 
  });
};
 
const getActivePanel = () => {
 
  let activePanel;
 
  DOMstrings.stepFormPanels.forEach(elem => {
 
    if (elem.classList.contains('js-active')) {
 
      activePanel = elem;
 
    }
 
  });
 
  return activePanel;
 
};
 
const setActivePanel = activePanelNum => {
 
  removeClasses(DOMstrings.stepFormPanels, 'js-active');
 
  DOMstrings.stepFormPanels.forEach((elem, index) => {
    if (index === activePanelNum) {
 
      elem.classList.add('js-active');
 
      setFormHeight(elem);
 
    }
  });
 
};
 
const formHeight = activePanel => {
 
  const activePanelHeight = activePanel.offsetHeight;
 
  DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;
 
};
 
const setFormHeight = () => {
  const activePanel = getActivePanel();
 
  formHeight(activePanel);
};
 
DOMstrings.stepsBar.addEventListener('click', e => {
 
  const eventTarget = e.target;
 
  if (!eventTarget.classList.contains(`${DOMstrings.stepsBtnClass}`)) {
    return;
  }
 
  const activeStep = getActiveStep(eventTarget);
 
  setActiveStep(activeStep);
 
  setActivePanel(activeStep);
});
 
DOMstrings.stepsForm.addEventListener('click', e => {
 
  const eventTarget = e.target;
 
  if (!(eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`) || eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`)))
  {
    return;
  }
 
  const activePanel = findParent(eventTarget, `${DOMstrings.stepFormPanelClass}`);
 
  let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(activePanel);
 
  if (eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) {
    activePanelNum--;
 
  } else {
 
    activePanelNum++;
 
  }
 
  setActiveStep(activePanelNum);
  setActivePanel(activePanelNum);
 
});
 
window.addEventListener('load', setFormHeight, false);
 
window.addEventListener('resize', setFormHeight, false);
 
 
const setAnimationType = newType => {
  DOMstrings.stepFormPanels.forEach(elem => {
    elem.dataset.animation = newType;
  });
};
 
//changing animation
const animationSelect = document.querySelector('.pick-animation__select');
 
animationSelect.addEventListener('change', () => {
  const newAnimationType = animationSelect.value;
 
  setAnimationType(newAnimationType);
}); 

function defaultConfig() {
  const { stepsWrapper: steps, listItems, inputs } = this;

  // open first step by default
  const height = steps.querySelector(".stepBody").getBoundingClientRect()
    .height;
  listItems[0].style.height = `${height}px`;

  // configure event listeners foreach input
  inputs.forEach(input => {
    input.addEventListener("keyup", e => {
      // add focus to each input with value
      const inputWrapper = e.target.closest(".inputGroup");
      const nextButton = inputWrapper
        .closest(".stepBody")
        .querySelector(".next");
      // if no value, remove focus, disable next button and return
      if (!e.target.value) {
        inputWrapper.closest(".listItem").classList.remove("done");
        inputWrapper.classList.remove("js-focus");
        return (nextButton.disabled = true);
      }
      inputWrapper.classList.add("js-focus");

      // keep the next button disabled if there're still inputs left empty
      if (
        inputWrapper.nextElementSibling.classList.contains("inputGroup") &&
        !inputWrapper.nextElementSibling.querySelector("input").value
      )
        return;
      // else enable next button
      nextButton.disabled = false;
    });
  });
}