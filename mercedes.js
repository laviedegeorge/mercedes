let counter_1 = -1;
let counter = -1;

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

function updateData({ name,image,torque,power,engine,acceleration }) {
    let nameHolder = document.getElementById('name');
    let imageHolder = document.getElementById('image');
    let torqueHolder = document.getElementById('torque');
    let powerHolder= document.getElementById('power');
    let engineHolder = document.getElementById('engine');
    let accelerationHolder = document.getElementById('acceleration');

    if (counter_1 == (cars.length -1)) {
        counter_1 = 0;
    } else {
        counter_1 ++;
    }

    nameHolder.innerHTML = cars[counter_1].name;
    imageHolder.src = cars[counter_1].image;
    imageHolder.classList.add("scaling");
    torqueHolder.innerHTML = cars[counter_1].torque;
    powerHolder.innerHTML = cars[counter_1].power;
    engineHolder.innerHTML = cars[counter_1].engine;
    accelerationHolder.innerHTML = cars[counter_1].acceleration;

    setTimeout(() => {
        imageHolder.classList.remove('scaling');
    }, 500);
}

const increment = () => {
    const numbers = document.querySelectorAll('[id=numbers] p');
    numbers.forEach(el => el.classList.remove('selected'))
    
    if (counter == (numbers.length - 1) ) {
        counter = 0;
    } else {
        counter ++;
    }

    updateData(cars[counter]);
    numbers[counter].classList.add('selected');
}

const decrement = () => {
    
    /* console.log('clicked');
    const numbers = document.querySelectorAll('[id=numbers] p');
    numbers.forEach(el => el.classList.remove('selected'))
    
    if (counter != numbers.length) {
        counter --;
    } else {
        counter = 0;
    }
    console.log(numbers[counter])
    numbers[counter].classList.add('selected');
    
    console.log(counter); */
}

const down = document.getElementById('down');
down.addEventListener('click', increment);

const up = document.getElementById('up');
down.addEventListener('click', decrement);

/* window.onload = () => {
    increment();
}; */

