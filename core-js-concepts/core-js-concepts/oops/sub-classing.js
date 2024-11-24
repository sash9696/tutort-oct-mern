







//OOP => inheritance or subclassing


// user => name, score, increaserScore


// deriving

// moderator => sharingScoresPublic, (also contains all properties and fucntions from user)

//     owner
//     general


// paidUser => bonusScore, increaseBalance,  (also contains all properties and fucntions from user)





class CreateUser{
    constructor(name, score){
        //instance properties
        console.log(this)
        this.name = name;
        this.score = score;
    }

     //instance methods

     increment(){
        this.score ++;
     }

     login(){
        console.log('login')
     }

     sayName(){
        console.log(`I am ${this.name}`)

     }
};

// CreatePaidUser.prototype = Object.create(CreateUser.prototype);

class CreatePaidUser extends CreateUser{

    constructor(paidName, paidScore, accountBalance){
        super(paidName,paidScore);
        this.accountBalance = accountBalance;
    }

    increaseBalance(){
        this.accountBalance ++;
    }
}


const user1 = new CreateUser('John', 10);
const user2 = new CreateUser('Peter', 5);

const paidUser1 = new CreatePaidUser('Dan', 6, 100)

paidUser1.sayName();


// sub child class => child class  => parent class