
//Number 1

const myFunc = () => {

    let counter = 0;

    return function() {

      counter += 1; 
   
    if (counter < 6){

        console.log("Congrats you earn the chance!");

    } else {
    
        console.log("Sorry you missed the chance");
    }
    
}

};

let chance = myFunc();

chance();

//Number 2


const longerThan = (minimumLength) => {

    return (el) => {

        return (el.length > minimumLength);
    
    };
};

let minimumLength = 3;

console.log(['bla','still','shksfasa','a'].filter(longerThan(minimumLength)));


