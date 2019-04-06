// CODE here for your Lambda Classes

class Person{
    constructor (attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }//ATR

    //Methods
    speak(){
        return `Hello my anme is ${this.name}, I am from ${this.location}`
    } 
}//Person

class Instructor extends Person{
    constructor (Iattributes){
        super(Iattributes);
        this.specialty = Iattributes.specialty;
        this.favLanguage = Iattributes.favLanguage;
        this.catchPhrase = Iattributes.catchPhrase;
    }//IATR

    //Methods
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`
    }

    test(student){
        let random = Math.floor(Math.random() * 100)  -70;
        student.score = student.score + random;
        return `${this.name} grades ${student.name}'s project, ${student.score} is his new grade.`
    }

}//Instructor
class Student extends Person{
    constructor(sAttributes){
        super(sAttributes)
        this.previousBackground = sAttributes.previousBackground;
        this.className = sAttributes.className;
        this.favSubjects = sAttributes.favSubjects;
        this.score = sAttributes.score;
        }//SATR
        
        //Methods
        listsSubjects(){
            return `${this.favSubjects}`
        }
        PRAssignment(subject){
            return `${this.name} has submitted a PR for ${subject}`
        }
        sprintChallenge(subject){
            return `${this.name} has begun srpint challenge on ${subject}`
        }

        graduate(){
            if (this.score>70){
                return `You can graduate!`
            }
            else {
                return `Keep studying!`
            }
        }
}//Student 

class ProjectManager extends Instructor{
    constructor(PMattributes){
        super(PMattributes);
        this.gradClassName = PMattributes.gradClassName;
        this.favInstructor = PMattributes.favInstructor;
    }//PMATR
    //Methods
    standup(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student,subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}


const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
  });

  const tom = new Student({
    name: 'Tom',
    location: 'Colorado',
    age: 25,
    gender: 'male',
    previousBackground: 'construction',
    className:'WEB19',
    favSubjects:['CSS','HTML'],
    score: 77,
  });

  const joe = new ProjectManager({
    name: 'Joe',
    location: 'Town',
    age: '??',
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName:'CS1',
    favInstructor:'Sean',
  });

  //instructor
  console.log(tom.speak());
  console.log(fred.demo('CSS'));
  console.log(fred.grade(tom,'HTML'));/////fix
  
  //student
  console.log(tom.listsSubjects());
  console.log(tom.PRAssignment('HTML'));
  console.log(tom.sprintChallenge('JS'));
  
  //PM
  console.log(joe.standup('Slack Group'));
  console.log(joe.debugsCode(tom,'JS'));

  //stretch
  console.log(tom.score)
  console.log(joe.test(tom))
  console.log(tom.graduate())