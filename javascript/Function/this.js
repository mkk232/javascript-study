const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log(this.name + " MEOW MEOW");
    },
    meow2() {
        console.log(`${this.name} says MEOW MEOW`);
    }
}
cat.meow();
cat.meow2();

const meow3 = cat.meow;
console.log(meow3());




