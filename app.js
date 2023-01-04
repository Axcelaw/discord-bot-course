let user = {
  name: "Walace",
  age: "30",
  hobbies: ["video games", "card games", "translation"]
}

let members = [
  {
    id: 2593021,
    joinedTimestamp: 32482849234
  },
  {
    id: 7028591,
    joinedTimestamp: 90627496031
  }
]

for (let i = 0; i < members.length; i++) {
  console.log(members[i].id)
}