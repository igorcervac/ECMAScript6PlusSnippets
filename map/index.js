const map = new Map([["one", 1],["two", 2],["three",3]]);
        map.set("four",4);

        console.group("Enumerate the map")        
        map.forEach((v,k)=> console.log(`${k}:${v}`));
        console.groupEnd();

        console.group("Delete entry with key 'one' and re-enumerate the map");     
        map.delete("one");        
        map.forEach((v,k)=> console.log(`${k}:${v}`));
        console.groupEnd();

        console.group("Check key 'one' presence");
        console.log(map.has("one"));
        console.groupEnd();

        console.group("Get key 'three' value");
        console.log(map.get("three"));
        console.groupEnd();

        console.group("Keys")
        let keys = map.keys();
        for (let key of keys){
            console.log(key);
        }
        console.groupEnd();

        console.group("Values")
        let values = map.values();
        for (let val of values){
            console.log(val);
        }
        console.groupEnd();