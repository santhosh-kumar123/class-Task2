const teams = [
    { name: "Team1", member: ["Paul", "Lisa"] },
        {name:"Team2",member:["Laura","Tim"]}
]
function* getMembers(members) {
    for (let i = 0; i < members.length; i++){
        yield members[i];
    }
}
function* getTeams(teams) {
    for (let i = 0; i < teams.length; i++){
        
    }
}
console.log("hello");
const obj = getTeams(teams);
obj.next();
obj.next();