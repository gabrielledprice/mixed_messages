let crime = ["peeing on a prostitutes", "stealing from the church donation basket", "concealing classified documents", "drinking the blood of immigrant children", "making an alternate twitter pretending to be Kendall Kardashian", "sleeping with a Jeffrey Epstein body pillow", "eating bowls of nails for breakfast... with milk", "possessing child porn", "insider trading", "loitering", "littering", "throwing bags of flaming dog poo onto residents' porches", "ding-dong ditching", "ordering 50+ pizzas to strangers houses", "killing hobos and then cannibalizing them", "eating steak with ketchup", "eating road kill", "playing league of legends", "cheating at checkers", "sleeping with a body pillow of Ivanka", "exposing himself to the elderly", "stealing poptarts"];
let location = ["Mar-a-Lago", "Trump Tower", "an abandoned apartment building", "the Sistine Chapel", "the Pope Mobile", "a dumpster behind a Las Vegas McDonald's", "the Space Needle", "the Grand Canyon, deep in the bowels of the abandoned city of the long-lost Mole People"]

function selectRandom(array){
    return array[Math.floor(Math.random() * array.length)];
}

const createMessage = (array1, array2) => {
    let randomCrime = selectRandom(array1);
    let randomPlace = selectRandom(array2);
    
    return `Former President Trump has been accused of ${randomCrime} at ${randomPlace}. Tune in for more at 5!`
}


console.log(createMessage(crime,location))