var students = [
    { id: 1, name: "bruce",    age: 40 },
    { id: 2, name: "zoidberg", age: 22 },
    { id: 3, name: "alex",     age: 22 },
    { id: 4, name: "alex",     age: 30 }
  ];

function compare(a, b) {
    const nameA = a.name.toUpperCase()
    const nameB = b.name.toUpperCase()
    const ageA = a.age
    const ageB = b.age
    let comparison = 0
    if (nameA > nameB) {
        comparison = 1
    } else if (nameA < nameB) {
        comparison = -1
    } else {
        if (ageA > ageB) {
            comparison = 1
        } else if (ageB > ageA) {
            comparison = -1
        }
    }
    return comparison
}

console.log(students.sort(compare))