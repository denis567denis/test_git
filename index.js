let a ={
    "0": {
        "name": 1231
    },
    "1": {
        "name": 1231
    },
    "2": {
        "name": 1231
    },
}

a.length = Object.keys(a).length

console.log(Array.from(a),a);