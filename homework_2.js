// pls make at least 5 persons
const people = [{
    id: 0,
    name: 'Asap Rocky',
    age: 31,
    moneyAmount: 100,
    desiredAlcoholName: 'liquor', 
    desiredAlcoholAmount: 2
},
{
    id: 1,
    name: 'Drake',
    age: 13,
    moneyAmount: 110,
    desiredAlcoholName: 'whisky',
    desiredAlcoholAmount: 4
},
{
    id: 2,
    name: 'Murovei',
    age: 30,
    moneyAmount: 25,
    desiredAlcoholName: 'cognac',
    desiredAlcoholAmount: 2
},
{
    id: 3,
    name: '6lack',
    age: 28,
    moneyAmount: 70,
    desiredAlcoholName: 'vine',
    desiredAlcoholAmount: 4
},
{
    id: 4,
    name: 'Lil Uzi',
    age: 16,
    moneyAmount: 90,
    desiredAlcoholName: 'vodka',
    desiredAlcoholAmount: 5
}
];


// pls make at least 5 alcohol
const alcoholPriceForOneItem = {
    whisky: 23, // don't change this one
    vodka: 25,
    vine: 20,
    cognac: 40,
    liquor: 45
};
console.log(alcoholPriceForOneItem)
const LEGAL_AGE = 18; // don't change this


/**
 * Function is used to filter array of objects by age param, name of param is passed as second argument
 * If object has age above LEGAL_AGE -> it's returned in new array 
 * @param {Array} arr
 * @param {String} agePersons
 * Returns filtered array
 * f.e function is called getLegalAgePeople(people, 'age');
 * 
 * tip: use .filter method
 */

function getLegalAgePeople(arr, agePersons) {
 return arr.filter(function(arrPeople){
     return arrPeople[agePersons] >= 18;
 })
}

const youCanBuyAlcohol = getLegalAgePeople(people, 'age')


/**
 * Function is used to filter array of objects
 * If object has money amount more than alcohol price multiplied by alcohol amount -> it's returned to new array
 * @param {Array} arr 
 * Returns filtered array
 * f.e function is called getPeopleWhoHaveMoneyForAlcohol(legalAgePeople);
 * 
 * tip: use .filter method or for()
 */
function getPeopleWhoHaveMoneyForAlcohol(arr) {
    const peopleWithMoney = [];

    for(let i=0; i<arr.length; i++){
        if(arr[i].moneyAmount>= (arr[i].desiredAlcoholAmount * alcoholPriceForOneItem[arr[i].desiredAlcoholAmount])){
            peopleWithMoney.push(arr[i])
        }
    }
}



/**
 * Function is used to get array of strings
 * @param {Array} arr 
 * Returns filtered array of strings like:
 * ["NAME bought COUNT bottles of ALCOHOL_NAME for SUM rubles"]
 * where NAME is name of person, COUNT is bottles count, ALCOHOL_NAME is name of alcohol, SUM is bottles count multipled by price for a bottle
 * f.e function is called buyAlcohole(legalAgePeople);
 * 
 * tip: use .map method or for()
 */
function buyAlcohol(arr) {
    // WRITE CODE HERE
    
}










// TEST FUNCTION. PLS DON'T TOUCH
function check() {
    try {
        const people = [{
            id: 1,
            name: 'a',
            age: 19,
            moneyAmount: 100,
            desiredAlcoholName: 'whisky',
            desiredAlcoholAmount: 2,
        }];
    
        const legalAgePeople = getLegalAgePeople(people, 'age');
        if (!legalAgePeople || legalAgePeople[0].id !== 1) {
            throw new Error('check getLegalAgePeople function');
        }

        const peopleWhoHaveMoney = getPeopleWhoHaveMoneyForAlcohol(legalAgePeople);
        if (!peopleWhoHaveMoney || peopleWhoHaveMoney[0].id !== 1) {
            throw new Error('check getPeopleWhoHaveMoneyForAlcohol function');
        }

        const checkResult = buyAlcohol(peopleWhoHaveMoney);
        
        if (!checkResult || checkResult[0] !== "a bought 2 bottles of whisky for 46 rubles") {
            throw new Error('check buyAlcohole function');
        }

        alert('Correct! You\'re awesome');
    } catch (err) {
        alert(err);
    }
}

