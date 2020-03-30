// Given the user, write a function that produces the result in the required sentence format

function CreatePhrase(users){
    for(let user of users){
        console.log('O '+ user.name +' possui as skills ' + user.skills.join(', ') + '.');
    }
}


var users = [
    {
    name: "Diego",
    skills: ["Javascript", "ReactJS", "Redux"]
    },
    {
    name: "Gabriel",
    skills: ["VueJS", "Ruby on Rails", "Elixir"]
    }
   ];

   console.log(CreatePhrase(users));