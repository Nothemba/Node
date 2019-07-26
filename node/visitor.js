'use strict';
const fs = require('fs');
class Visitor{
   constructor (fullName, age, dateOfVisit, timeOfVisit, comments, assistanceName){
       this.fullName= fullName;
       this.age = age;
       this.dateOfVisit = dateOfVisit;
       this.timeOfVisit = timeOfVisit;
       this.comments = comments;
       this.assistanceName = assistanceName;
   }
   save(){
       let file = JSON.stringify(this,null,2);
       fs.writeFileSync('visitor1.json', file);
       console.log(file)
      
       let file2 = JSON.stringify(this,null,2);
       fs.writeFileSync('student2.json', file2);
       console.log(file2)

       let file3 = JSON.stringify(this,null,2);
       fs.writeFileSync(this.fullName+'.json', file3);
       console.log(file3)
   }
};
let bob = new Visitor("Bob Suu",23,"2019-06-18","12:30", "nice one","brun")
bob.save();
let alice = new Visitor("Alice Low ",23,"2019-07-16", "11:00","nice visit","Bonga")
let charlie = new Visitor("Charlie Brown",28,"2019-07-16", "12:00","nice visit","Bonga")
alice.save();
charlie.save()