/**
 * if function receives input, what if i want to change(mutate),We can apply rule b.
 
 if function receives input,and modify input , we should return new object every time,
 which is called immutablity.

 */
//impure function
// function updateProfile(city, profile) {
//     //?
//     profile.city = city
//     return profile
// }

//purity : we need to return immutable object/new object
//in order to return new object we have three methods
// function updateProfile(city, profile) {
//     //method 1
//     return {
//         name: profile.name,

//         //city: city
//         city
//     }
// }

// function updateProfile(city, profile) {
//     //method 2
//     return Object.assign({}, profile, { city: city })
// }

function updateProfile(city, profile) {
    //method 3
    // return { ...profile, city: city }
    return { ...profile, city }
}


let profile = {
    name: 'Subramanian',
    city: 'Coimbatore'
}

console.log('before update', profile)
const result = updateProfile('Chennai', profile)
console.log(profile === result ? "Same Object" : "Different Object")

console.log('after update', result)
