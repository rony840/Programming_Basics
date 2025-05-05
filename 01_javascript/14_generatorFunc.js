function* exampleGenerator () {
    console.log ('1');
    yield 1;
    console.log ('2');
    yield 2;
    return 3;
}
const gen = exampleGenerator ()
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());