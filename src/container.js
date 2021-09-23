const container = document.querySelector(".container-card");

function dailyContainer() {
  container.innerHTML = `<div class="card work">
          <div class="card__content">
            <div class="card__category">
              <h2 class="card__title">Work</h2>
              <a href="#work"
                ><img src="./images/icon-ellipsis.svg" alt="dots"
              /></a>
            </div>
            <div class="card__text-box">
              <h2 class="card__current">5hrs</h2>
              <p class="card__previous">Last Week - 7hrs</p>
            </div>
          </div>
        </div>
        <div class="card play">
          <div class="card__content">
            <div class="card__category">
              <h2 class="card__title">Play</h2>
              <a href="#play"
                ><img src="./images/icon-ellipsis.svg" alt="dots"
              /></a>
            </div>
            <div class="card__text-box">
              <h2 class="card__current">1hrs</h2>
              <p class="card__previous">Last Week - 2hrs</p>
            </div>
          </div>
        </div>
        <div class="card study">
          <div class="card__content">
            <div class="card__category">
              <h2 class="card__title">Study</h2>
              <a href="#study"
                ><img src="./images/icon-ellipsis.svg" alt="dots"
              /></a>
            </div>
            <div class="card__text-box">
              <h2 class="card__current">0hrs</h2>
              <p class="card__previous">Last Week - 1hrs</p>
            </div>
          </div>
        </div>
        <div class="card exercise">
          <div class="card__content">
            <div class="card__category">
              <h2 class="card__title">Exercise</h2>
              <a href="#exercise"
                ><img src="./images/icon-ellipsis.svg" alt="dots"
              /></a>
            </div>
            <div class="card__text-box">
              <h2 class="card__current">1hrs</h2>
              <p class="card__previous">Last Week - 1hrs</p>
            </div>
          </div>
        </div>
        <div class="card social">
          <div class="card__content">
            <div class="card__category">
              <h2 class="card__title">Social</h2>
              <a href="#social"
                ><img src="./images/icon-ellipsis.svg" alt="dots"
              /></a>
            </div>
            <div class="card__text-box">
              <h2 class="card__current">1hrs</h2>
              <p class="card__previous">Last Week - 3hrs</p>
            </div>
          </div>
        </div>
        <div class="card self-care">
          <div class="card__content">
            <div class="card__category">
              <h2 class="card__title">Self Care</h2>
              <a href="#self-care"
                ><img src="./images/icon-ellipsis.svg" alt="dots"
              /></a>
            </div>
            <div class="card__text-box">
              <h2 class="card__current">0hrs</h2>
              <p class="card__previous">Last Week - 1hrs</p>
            </div>
          </div>
        </div>`;
}

function weeklyContainer() {
  container.innerHTML = `<div class="card work">
          <div class="card__content">
            <div class="card__category">
              <h2 class="card__title">Work</h2>
              <a href="#work"
                ><img src="./images/icon-ellipsis.svg" alt="dots"
              /></a>
            </div>
            <div class="card__text-box">
              <h2 class="card__current">32hrs</h2>
              <p class="card__previous">Last Week - 36hrs</p>
            </div>
          </div>
        </div>
        <div class="card play">
          <div class="card__content">
            <div class="card__category">
              <h2 class="card__title">Play</h2>
              <a href="#play"
                ><img src="./images/icon-ellipsis.svg" alt="dots"
              /></a>
            </div>
            <div class="card__text-box">
              <h2 class="card__current">10hrs</h2>
              <p class="card__previous">Last Week - 8hrs</p>
            </div>
          </div>
        </div>
        <div class="card study">
          <div class="card__content">
            <div class="card__category">
              <h2 class="card__title">Study</h2>
              <a href="#study"
                ><img src="./images/icon-ellipsis.svg" alt="dots"
              /></a>
            </div>
            <div class="card__text-box">
              <h2 class="card__current">4hrs</h2>
              <p class="card__previous">Last Week - 7hrs</p>
            </div>
          </div>
        </div>
        <div class="card exercise">
          <div class="card__content">
            <div class="card__category">
              <h2 class="card__title">Exercise</h2>
              <a href="#exercise"
                ><img src="./images/icon-ellipsis.svg" alt="dots"
              /></a>
            </div>
            <div class="card__text-box">
              <h2 class="card__current">4hrs</h2>
              <p class="card__previous">Last Week - 5hrs</p>
            </div>
          </div>
        </div>
        <div class="card social">
          <div class="card__content">
            <div class="card__category">
              <h2 class="card__title">Social</h2>
              <a href="#social"
                ><img src="./images/icon-ellipsis.svg" alt="dots"
              /></a>
            </div>
            <div class="card__text-box">
              <h2 class="card__current">5hrs</h2>
              <p class="card__previous">Last Week - 10hrs</p>
            </div>
          </div>
        </div>
        <div class="card self-care">
          <div class="card__content">
            <div class="card__category">
              <h2 class="card__title">Self Care</h2>
              <a href="#self-care"
                ><img src="./images/icon-ellipsis.svg" alt="dots"
              /></a>
            </div>
            <div class="card__text-box">
              <h2 class="card__current">2hrs</h2>
              <p class="card__previous">Last Week - 2hrs</p>
            </div>
          </div>
        </div>`;
}

function monthlyContainer() {
  container.innerHTML = `<div class="card work">
          <div class="card__content">
            <div class="card__category">
              <h2 class="card__title">Work</h2>
              <a href="#work"
                ><img src="./images/icon-ellipsis.svg" alt="dots"
              /></a>
            </div>
            <div class="card__text-box">
              <h2 class="card__current">103hrs</h2>
              <p class="card__previous">Last Week - 128hrs</p>
            </div>
          </div>
        </div>
        <div class="card play">
          <div class="card__content">
            <div class="card__category">
              <h2 class="card__title">Play</h2>
              <a href="#play"
                ><img src="./images/icon-ellipsis.svg" alt="dots"
              /></a>
            </div>
            <div class="card__text-box">
              <h2 class="card__current">23hrs</h2>
              <p class="card__previous">Last Week - 29hrs</p>
            </div>
          </div>
        </div>
        <div class="card study">
          <div class="card__content">
            <div class="card__category">
              <h2 class="card__title">Study</h2>
              <a href="#study"
                ><img src="./images/icon-ellipsis.svg" alt="dots"
              /></a>
            </div>
            <div class="card__text-box">
              <h2 class="card__current">13hrs</h2>
              <p class="card__previous">Last Week - 19hrs</p>
            </div>
          </div>
        </div>
        <div class="card exercise">
          <div class="card__content">
            <div class="card__category">
              <h2 class="card__title">Exercise</h2>
              <a href="#exercise"
                ><img src="./images/icon-ellipsis.svg" alt="dots"
              /></a>
            </div>
            <div class="card__text-box">
              <h2 class="card__current">11hrs</h2>
              <p class="card__previous">Last Week - 18hrs</p>
            </div>
          </div>
        </div>
        <div class="card social">
          <div class="card__content">
            <div class="card__category">
              <h2 class="card__title">Social</h2>
              <a href="#social"
                ><img src="./images/icon-ellipsis.svg" alt="dots"
              /></a>
            </div>
            <div class="card__text-box">
              <h2 class="card__current">21hrs</h2>
              <p class="card__previous">Last Week - 23hrs</p>
            </div>
          </div>
        </div>
        <div class="card self-care">
          <div class="card__content">
            <div class="card__category">
              <h2 class="card__title">Self Care</h2>
              <a href="#self-care"
                ><img src="./images/icon-ellipsis.svg" alt="dots"
              /></a>
            </div>
            <div class="card__text-box">
              <h2 class="card__current">7hrs</h2>
              <p class="card__previous">Last Week - 11hrs</p>
            </div>
          </div>
        </div>`;
}

function clearContainer() {
  container.innerHTML = "";
}

export { dailyContainer, weeklyContainer, monthlyContainer, clearContainer };

// , weeklyContainer, monthlyContainer
