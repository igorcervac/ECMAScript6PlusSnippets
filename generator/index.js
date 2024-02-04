function* seasons(){
    yield 'Spring';
    yield 'Summer';
    yield 'Fall';
    yield 'Winter';
} 

var generator = seasons();

for (let it = generator.next(); !it.done; it = generator.next()){
    console.log(it.value);
}