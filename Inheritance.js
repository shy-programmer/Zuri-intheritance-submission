class SportsCar {
    constructor (name, hasNitro) {
        this.name = name;
        this.hasNitro = hasNitro;
    }
    useNitro() {
        if(this.hasNitro) {
            return "Zooooooom"
                }
        else {
            return "No Nitro"
        }
    }
    set giveNitro(x) {
        this.hasNitro = true;
    }
}

class LuxuryCar extends SportsCar {
    constructor(name, hasNitro, rims) {
        super(name, hasNitro);
        this.rims = rims
    }
}


let ferrari = new SportsCar('Ferrari', true);
let toyota = new SportsCar('Toyota', false);
let bugatti = new LuxuryCar('Bugatti', true, 'Gold')

console.log(toyota.hasNitro)
toyota.giveNitro = true
console.log(toyota.useNitro())
console.log(bugatti.useNitro())
console.log(bugatti.rims);