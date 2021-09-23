import {
  dailyContainer,
  weeklyContainer,
  monthlyContainer,
  clearContainer,
} from "./container.js";

const items = document.querySelector(".profile__items");
const item = items.children;

const ACTIVE = "active";

function movePage(target) {
  const {
    target: { hash },
  } = target;
  const hashValue = String(hash).slice(1);
  console.log(hashValue);
  switch (hashValue) {
    case "daily":
      dailyContainer();
      break;
    case "weekly":
      weeklyContainer();
      break;
    case "monthly":
      monthlyContainer();
      break;
    default:
      clearContainer();
      break;
  }
}

function changeClass(target) {
  const {
    target: { classList },
  } = target;

  if (!classList.contains(ACTIVE)) {
    for (let i = 0; i < item.length; i++) {
      const { classList } = item[i].children[0];
      classList.remove(ACTIVE);
    }
    classList.add(ACTIVE);
  }

  movePage(target);
}

function init() {
  for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", changeClass);
  }
}

init();
