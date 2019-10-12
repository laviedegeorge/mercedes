let counter = 0;
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);
const numbers = document.querySelectorAll("[id=numbers] p");

const cars = [
  {
    name: "amg gts coupe",
    image: "/assets/img/mercedces-1.png",
    torque: "670",
    power: "384",
    engine: "amg 4.0 - litre v8 biturbo engine",
    acceleration: "0 - 100km/h in 3.8s"
  },
  {
    name: "amg g63",
    image: "/assets/img/amg-g63.png",
    torque: "850",
    power: "430",
    engine: "amg 4.0 - litre v8 biturbo engine",
    acceleration: "0 - 100km/h in 4.5s"
  },
  {
    name: "amg cls coupe",
    image: "/assets/img/amg-cla-coupe.png",
    torque: "400",
    power: "225",
    engine: "amg 2.0 - litre v4 engine",
    acceleration: "0 - 100km/h in 4.9s"
  },
  {
    name: "amg s63 4matic+",
    image: "/assets/img/amg-s63-4matic+.png",
    torque: "900",
    power: "450",
    engine: "amg 4.0 - litre v8 biturbo engine",
    acceleration: "0 - 100km/h in 3.5s"
  },
  {
    name: "amg e53 4matic+",
    image: "/assets/img/amg-e53-4matic+.png",
    torque: "520",
    power: "320",
    engine: "amg 3.0 - litre v6 engine",
    acceleration: "0 - 100km/h in 4.5s"
  }
];

function setupCounter(name) {
  const countElement = document.querySelector(`[data-counter=${name}]`);
  const counts = Array(10).fill(0);
  Array(3)
    .fill(0)
    .forEach(() => {
      const mainSpan = document.createElement("span");
      counts.forEach((_, num) => {
        const span = document.createElement("span");
        span.innerText = num;
        mainSpan.append(span);
      });
      countElement.append(mainSpan);
    });

  return countElement;
}

/* -----------UPDATE TORQUE WITH INFO FROM CARS ARRAY------------ */
const spinCounter = name => {
  const nums = Array.from(cars[counter][name]);
  const el = document.querySelector(`[data-counter=${name}]`);
  if (!el) return false;

  const slides = el.children;
  slides[0].style.top = `-${nums[0]}em`;
  slides[1].style.top = `-${nums[1]}em`;
  slides[2].style.top = `-${nums[2]}em`;
};

/* -----------UPDATE NAME, IMG, ENGINE ACC. WITH INFO FROM CARS ARRAY------------ */
function updateData({ name, image, engine, acceleration }) {
  let nameHolder = document.getElementById("name");
  let imageHolder = document.getElementById("image");
  let engineHolder = document.getElementById("engine");
  let accelerationHolder = document.getElementById("acceleration");

  console.log(image);

  nameHolder.innerHTML = name;
  imageHolder.src = image;
  imageHolder.classList.add("scaling");

  engineHolder.innerHTML = engine;
  accelerationHolder.innerHTML = acceleration;

  setTimeout(() => {
    imageHolder.classList.remove("scaling");
  }, 500);
}

const updateCars = () => {
  numbers.forEach(el => el.classList.remove("selected"));
  updateData(cars[counter]);
  spinCounter("torque");
  spinCounter("power");
  numbers[counter].classList.add("selected");
};

const checker = e => {
  e.preventDefault();
  const up = document.querySelector("[data-direction=up]");

  counter = e.target === up ? --counter : ++counter;
  if (counter >= numbers.length || counter <= 0) {
    counter = 0;
  }

  updateCars();
};

// event handler that works on for direction arrow
const forArrowsOnly = closure => evt => {
  const { target } = evt;
  if (["up", "down"].includes(target.getAttribute("data-direction"))) {
    console.log("Working it ");
    return closure(evt);
  }
  evt.preventDefault();
};

const sideNav = document.getElementById("side-nav");
sideNav.addEventListener("click", forArrowsOnly(checker));

const loadImages = () => {
  Object.values(cars).forEach(({ image: imageSrc }) => {
    const image = document.createElement("img");
    image.src = imageSrc;

    $("#image").parentElement.append(image);
  });
};

const resizeLogo = () => {
  const styles = {
    top: $(".logo-name").offsetTop + "px",
    width: "7rem",
    height: "7rem",
    transform: "translateX(-50%)"
  };
  Object.entries(styles).map(([prop, value]) => {
    $(".logo").style[prop] = value;
  });
  console.log($(".logo-name").offsetTop);
};

const hideBlind = () => {
  document.body.classList.add("hide-blind");
  resizeLogo();
};

window.onload = () => {
  const up = document.querySelector("[data-direction=down]");
  setupCounter("torque");
  setupCounter("power");
  setTimeout(() => {
    hideBlind();
  }, 700);
  setTimeout(() => {
    counter = -1;
    up.click();
    $$(".fade-in").forEach(el => el.classList.add("play"));
  }, 1100);
};
