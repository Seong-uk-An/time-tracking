const items = document.querySelector(".profile__items");
const item = items.children;

// console.log({ items });

function movePage() {
  console.log({ items });
}

function changeClass(target) {
  const ACTIVE = "active";
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

  movePage();
}

function init() {
  for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", changeClass);
  }
}

init();
