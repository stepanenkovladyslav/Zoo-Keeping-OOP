class Zoo {
    #animals

    constructor () {
        this.#animals = []
    }

    get animals (){
        return this.#animals;
    }
    
    addAnimal(animal) {
        this.#animals.push(animal)
    };

    info() {
        let res = this.animals.map(animal => {
            return animal.getinfo()
        });
        return res;
    };

    typeinfo(type) {
       let res = this.#animals.filter(animal => animal.type == type);
        if (res.length != 0) {
            let result = res.map(animal => {
                    return animal.getinfo();
            });
            return result;
        } else {
            return `There are currently no ${type}s in the zoo`
        }
    };
    
    typenumber(type) {
        let res = this.#animals.filter(animal => animal.type == type);
        return res.length;
    }   
    
    evictanimal(name) {
        let check = this.#animals.find(animal => animal.name == name);
        if (check) {
            this.animals.splice(this.animals.findIndex(animal => animal.name == name), 1);
            return true;
        } else {
            return false;
        }
    };
    changeage(name, newAge) {
        let res = this.animals.find(animal => animal.name == name);
        if (res) {
            return res.changeAge(newAge)
        } else {
            return `There is no animal with this name. Please try again.`
        }
    }
}

class Animal {
    #name
    #age

    constructor (name, age) {
        this.#name = name;
        this.#age = age;
    };

    changeAge(newAge) {
        if (newAge < 100) {
            this.age = newAge;
            return `The animals age was changed successfully`
        } else {
            return `You input the wrong age. Please try again`
        };
    };
    
    get name () {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    set age(newAge) {
        return this.#age = newAge;
    }
};

class Tiger extends Animal{
    #runningSpeed
    #tailLength
    #type

    constructor (name, age, runningSpeed, tailLength, changeAge) {
        super(name, age, changeAge)
        this.#runningSpeed = runningSpeed;
        this.#tailLength = tailLength;
        this.#type = "Tiger"
    }

    get type () {
        return this.#type;
    }

    getinfo() {
        return `\nName: ${this.name}, Age: ${this.age}, Type: ${this.#type}, Running Speed: ${this.#runningSpeed}, Tail length: ${this.#tailLength}`;
    }
}

class Bear extends Animal {
    #clawSize
    #furLength
    #type

    constructor (name, age, clawSize, furLength, changeAge) {
        super(name, age, changeAge)
        this.#clawSize = clawSize;
        this.#furLength = furLength;
        this.#type = "Bear"
    }

    get type() {
        return this.#type;
    }

    getinfo() {
        return `\nName: ${this.name}, Age: ${this.age}, Type: ${this.#type}, Claw Size: ${this.#clawSize}, Fur Length: ${this.#furLength},`;
    }
}

class Shark extends Animal{
    #swimmingSpeed
    #finSize
    #type

    constructor (name, age, swimmingSpeed, finSize, changeAge) {
        super(name, age, changeAge);
        this.#swimmingSpeed = swimmingSpeed;
        this.#finSize = finSize;
        this.#type = "Shark"
    }
    getinfo() {
        return `\nName: ${this.name}, Age: ${this.age}, Type: ${this.#type}, Fin Size: ${this.#finSize}, Swimming Speed: ${this.#swimmingSpeed}`;
    }
    
    get type() {
        return this.#type;
    }
}

class Eagle extends Animal {
    #sightLength
    #wingLength
    #type

    constructor (name, age, sightLength, wingLength, changeAge) {
        super(name, age, changeAge);
        this.#sightLength = sightLength;
        this.#wingLength = wingLength;
        this.#type = "Eagle"
    }
    
    getinfo() {
        return `\nName: ${this.name}, Age: ${this.age}, Type: ${this.#type}, Sight Length: ${this.#sightLength}, Wing Length: ${this.#wingLength}`;
    }

    get type() {
        return this.#type;
    }
}

function capitalizeFirstLetter(type) {
    return type.charAt(0).toUpperCase() + type.slice(1);
}

let breakout = 0;
let zoo = new Zoo()

do {
let FirstQuestion = Number(prompt("1 - Add an animal\n2 - Look up all animals\n3 - Look up all animals of certain type\
    \n4 - Look up the number of all animals of certain type\n5 - Evict the animal by the name\
    \n6 - Change animal's age by the name\n7 - Exit"));
    switch(FirstQuestion){
        case (1): {
        let SecondQuestion = Number(prompt("What type of animal would you like to add? \
            \n1 - Tiger\n2 - Bear\n3 - Shark\n4 - Eagle"));
            switch(SecondQuestion){
                case(1): {
                    let name = prompt("Please give a name to the tiger");
                    let age = Number(prompt("Please give an age to the tiger"));
                    let runningSpeed = prompt("Please enter tiger's running speed");
                    let tailLength = prompt("Please enter tiger's tail length");
                    let newTiger = new Tiger(name, age, runningSpeed, tailLength);
                    zoo.addAnimal(newTiger);
                    alert("This animal was added successfully")
                    continue;
                };
                case(2): {
                    let name = prompt("Please give a name to the bear");
                    let age = Number(prompt("Please give an age to the bear"));
                    let clawSize = prompt("Please enter the bear's claw size");
                    let furLength  = prompt("Please enter the bear's fur length");
                    let newBear = new Bear(name, age, clawSize, furLength);
                    zoo.addAnimal(newBear);
                    alert("This animal was added successfully")    
                    continue;
                };
                case(3): {
                    let name = prompt("Please give a name to the shark");
                    let age = Number(prompt("Please give an age to the shark"));
                    let finSize = prompt("Please enter shark's fin size");
                    let swimmingSpeed = prompt("Please enter sharks' swimming speed");
                    let newShark = new Shark(name, age, finSize, swimmingSpeed);
                    zoo.addAnimal(newShark);
                    alert("This animal was added successfully")
                    continue;
                };
                case(4): {
                    let name = prompt("Please give a name to the eagle");
                    let age = Number(prompt("Please give an age to the eagle"));
                    let sightLength = prompt("Please enter eagle's sight length");
                    let wingLength = prompt("Please enter eagle's wing length");
                    let newEagle = new Eagle(name, age, sightLength, wingLength);
                    zoo.addAnimal(newEagle);
                    alert("This animal was added successfully")
                    continue;
                }; 
            };
        };
        case(2):{
            let allAnimals = zoo.info();
            alert(allAnimals);
            break;
        };
        case(3): {
            let type = Number(prompt("What animals do you want to look up?\n1 - Tigers\
            \n2 - Bears\n3 - Sharks\n4 - Eagles"));
                switch(type){
                    case(1): {
                        let thisType = "Tiger";
                        let res = zoo.typeinfo(thisType);
                        alert(res);
                        continue;
                    };
                    case (2): {
                        let thisType = "Bear";
                        let res = zoo.typeinfo(thisType);
                        alert(res);
                        continue;
                    };
                    case(3): {
                        let thisType = "Shark";
                        let res = zoo.typeinfo(thisType);
                        alert(res);
                        continue;
                    };
                    case(4): {
                        let thisType = "Eagle";
                        let res = zoo.typeinfo(thisType);
                        alert(res);
                        continue;
                    };
                };
        }
        case (4): {
            let type = (prompt("What animal do you want to look up? Possible options: Tiger,\
            Bear, Shark, Eagle"));
            if (type == 'Tiger' || type == "tiger" || type == "Bear" || type == "bear" 
            || type == "Shark" || type == "shark" || type == "Eagle" || type == "eagle"){
                type = capitalizeFirstLetter(type);
                let res = zoo.typenumber(type)
                alert(`There are ${res} ${type}s in this zoo`);
            } else {
                alert ("There are no animals like this in this zoo. Please try available options.")
            }

            break;
        }
        case (5): {
            let name = prompt("Please enter the name of the animal that you would like to evict");
            let result = zoo.evictanimal(name);
            if (result) {
                alert("This animal was evicted successfully")
            } else {
                alert("The animal name is wrong. Please try again.")
            }
            break;
        }
        case (6): {
            let name = prompt("Please enter the name of the animal whose age needs to be changed");
            let newAge = Number(prompt("Please enter the new age that you want to set"));
            let res = zoo.changeage(name, newAge);
            alert(res);
            break;
        }
        case(7): {
            breakout = 1;
            console.log(zoo.animals);
            break;    
        }
    };
        
} while (breakout == 0);