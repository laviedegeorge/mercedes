
let counter = 0;
const numbers = document.querySelectorAll('[id=numbers] p');
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);
const imgContainer = document.getElementById('imgDisplay');

const cars = [
    {   
        name: 'amg gts coupe', 
        image: '/assets/img/mercedces-1.png', 
        torque: '670', 
        power: '384',  
        engine: 'amg 4.0 - litre v8 biturbo engine',
        acceleration: '0 - 100km/h in 3.8s'
    },
    {   
        name: 'amg g63', 
        image: '/assets/img/amg-g63.png', 
        torque: '850', 
        power: '430',  
        engine: 'amg 4.0 - litre v8 biturbo engine',
        acceleration: '0 - 100km/h in 4.5s'
    },
    {   
        name: 'amg cls coupe', 
        image: '/assets/img/amg-cla-coupe.png', 
        torque: '400', 
        power: '225',  
        engine: 'amg 2.0 - litre v4 engine',
        acceleration: '0 - 100km/h in 4.9s'
    },
    {  
        name: 'amg s63 4matic+', 
        image: '/assets/img/amg-s63-4matic+.png', 
        torque: '900', 
        power: '450',  
        engine: 'amg 4.0 - litre v8 biturbo engine',
        acceleration: '0 - 100km/h in 3.5s' 
    },
    {   
        name: 'amg e53 4matic+', 
        image: '/assets/img/amg-e53-4matic+.png', 
        torque: '520', 
        power: '320',  
        engine: 'amg 3.0 - litre v6 engine',
        acceleration: '0 - 100km/h in 4.5s' 
    }
]
/* -----------UPDATE TORQUE WITH INFO FROM CARS ARRAY------------ */
const updateTorque = () => {
    let torqueNum1 = document.getElementById('torqueNum1');
    let torqueNum2 = document.getElementById('torqueNum2');
    let torqueNum3 = document.getElementById('torqueNum3');

    let torqueNums = Array.from(cars[counter].torque);

    torqueNum1.style.top = `-${torqueNums[0]}em`;
    torqueNum2.style.top = `-${torqueNums[1]}em`;
    torqueNum3.style.top = `-${torqueNums[2]}em`;
}

/* -----------UPDATE POWER WITH INFO FROM CARS ARRAY------------ */
const updatePower = () => {
    let powerNum1 = document.getElementById('powerNum1');
    let powerNum2 = document.getElementById('powerNum2');
    let powerNum3 = document.getElementById('powerNum3');

    let powerNums = Array.from(cars[counter].power);

    powerNum1.style.top = `-${powerNums[0]}em`;
    powerNum2.style.top = `-${powerNums[1]}em`;
    powerNum3.style.top = `-${powerNums[2]}em`;
}

/* -----------UPDATE NAME, IMG, ENGINE ACC. WITH INFO FROM CARS ARRAY------------ */
function updateData({ name,image,engine,acceleration }) {
    let nameHolder = document.getElementById('name');
    /* let imageHolder = document.getElementById('image'); */
    let engineHolder = document.getElementById('engine');
    let accelerationHolder = document.getElementById('acceleration');

    nameHolder.innerHTML = cars[counter].name;
    /* imageHolder.src = cars[counter].image;
    imageHolder.classList.add("scaling"); */
   
    engineHolder.innerHTML = cars[counter].engine;
    accelerationHolder.innerHTML = cars[counter].acceleration;

    /* setTimeout(() => {
        imageHolder.classList.remove('scaling');
    }, 500); */
}

const updateImage = () => {
    const images = imgContainer.children;
    Array.from(images).forEach(i => {
        i.classList.add('hide')
    })
        images[counter].classList.remove('hide');
        images[counter].classList.add('scaling');

        setTimeout(() => {
        images[counter].classList.remove('scaling');
        }, 500);

    
}

const createImage = () => {
    cars.forEach(obj => {
        const img = document.createElement('img');
        img.setAttribute('src', obj.image);
        img.classList.add('hide');
        imgDisplay.append(img);
    });

    updateImage();
}
const updatePage = () => {
    numbers.forEach(el => el.classList.remove('selected'))
    updateData(cars[counter]);
    updateTorque();
    updatePower();
    updateImage();
    numbers[counter].classList.add('selected');
}

const checker = (e) => {
    e.preventDefault();

    const up = document.getElementById('up');
    const down = document.getElementById('down');


    /* UP */
     if (e.target == up  ) {
         if (counter > 0) {
            counter --;
        } else {
            counter = 0;
        }
    }

    /* DOWN */
     if (e.target == down ) {
        if (counter == (numbers.length - 1) ) {
            counter = 0;
        } else {
            counter ++;
        }
    }
    updatePage();
}

const resizeLogo = () => {
    const styles = {
      top: $(".logo-name").offsetTop + "px",
      width: "7rem",
      height: "7rem",
      transform: "translateX(-50%)"
    };
  
    if (screen.availWidth < 600) {
        styles.width = "3.5rem";
        styles.height = "3.5rem"
    }

    Object.entries(styles)
    .map((array) => {
      $(".logo").style[array[0]] = array[1];
    });
    
  };

const hideBlind = () => {
    document.body.classList.add("hide-blind");
    resizeLogo();
};

const sideNav = document.getElementById('side-nav');
sideNav.addEventListener('click', checker);

document.addEventListener('keyup', (evt) => {
    const up = document.getElementById('up');
    const down = document.getElementById('down');

    if (event.keyCode == 38) {
        up.click()
    }else if (event.keyCode == 40) {
        down.click();
    }    
})

window.onload = () => {
    createImage();
    setTimeout(() => {
        hideBlind();
        setTimeout(() => {
            document.getElementById('side-nav').click()
        }, 000);
        
      }, 900);
};

/* document.addEventListener('keyup', (evt) => console.log(evt.keyCode)) */
