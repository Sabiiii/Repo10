function myFunction() {

    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true 
        },

        002: {
            artist: "Michale Jackson",
            title: "Thriller",
            release_year: 1982,
            formats: {
                1: "DVD",
                2: "LP",
                3: "MTV"
            },
            
            
        },
    };

    return myMusic;
  

}

  console.log(myFunction());


myFunction()[2];
module.exports = myFunction;

