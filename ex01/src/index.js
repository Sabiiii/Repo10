var myPet = {

    species: "Huskey",
    name: "Njusko",
    legs: 4,
    friends: "Zeko", "Medo"

};

function myFunction(myObj){

    return myObj;
}


console.log(myFunction(myPet));
module.exports = {mypet, myFunction};