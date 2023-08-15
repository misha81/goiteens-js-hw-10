// =====for=====
const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";

for (let i = 0; i < friends.length; i += 1) {
    string += friends[i];
    
    if (i < friends.length - 1) {
        string += ", ";
    }
}

console.log(string);
// =====join=====
const NewFriends = ["Mango", "Poly", "Kiwi", "Ajax"];
console.log(NewFriends.join(", "));