let friend = ["Ryan", "Kieran", "Mark"];
let georgianFriends = ["George", "Nick", "Tom", "Kate", "Annie"]

const result = friend.filter(name=> name.length === 4);

// let myFriendList = [];
// let myFriend = (list) => {
//     for (let i of list) {
//         if (i.length === 4) {
//             myFriendList.push(i)
//         }
//     }
//     return console.log(myFriendList)
// }
// myFriend(friend)

// console.log(result);

// ###################   2  #######

let numArray =  [19, 5, 42, 2, 77];
let smallestSum = 0;
let calcSmallSum = (list) => {
    list.sort((a, b) => a - b)
    smallestSum = list[0] + list[1]
    return smallestSum
}

calcSmallSum(numArray)
console.log(smallestSum)
