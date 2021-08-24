function findMatching(drivers, string){
    let newDrivers = drivers.filter(name => name.toLowerCase() === string.toLowerCase());
    return newDrivers;
}

function fuzzyMatch(drivers, string){
    let newDrivers = drivers.filter(name => name.startsWith(string));
    return newDrivers;
}

function matchName(drivers, string){
    let newDrivers = drivers.filter(drivers => drivers.name === string);
    return newDrivers;
}