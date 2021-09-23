function myFunction(myObj, checkProp) {

    var myObj = {
        title: "Titanic",
        song: "My Heart Will Go On",
        genre: "drama"
    };

    if (myObj.hasOwnProperty(checkProp)) {
        console.log(myObj[checkProp]);


    } else {
          return console.log("Not Found"); 
    }
            

}


module.exports = myFunction;
