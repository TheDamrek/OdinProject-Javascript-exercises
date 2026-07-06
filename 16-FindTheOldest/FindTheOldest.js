const findTheOldest = function(people) {
    let oldestPerson = people[0];
    for (let i = 0; i < people.length; i++){

        let currentPerson = people[i];

        let oldestPersonAge = (oldestPerson.yearOfDeath - oldestPerson.yearOfBirth);
        let currentPersonAge = (currentPerson.yearOfDeath - currentPerson.yearOfBirth);


        if (currentPerson.yearOfDeath === undefined) {
            currentPersonAge = new Date().getFullYear() - currentPerson.yearOfBirth;
            
        }

        if (oldestPerson.yearOfDeath === undefined) {
            oldestPersonAge = new Date().getFullYear() - oldestPerson.yearOfBirth;
        }

         if (currentPersonAge > oldestPersonAge) {
        oldestPerson = currentPerson; 
    };

   };

return oldestPerson;

};


module.exports = findTheOldest;