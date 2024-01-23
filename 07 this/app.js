class App
{
    runApplication()
    {
        console.log("hello world!");

        let user1 = new User ("TEST1")
        let user2 = new User ("TEST2")
        let user3 = new User ("TEST3")
        let user4 = new User ("TEST4")
        let user5 = new User ("TEST5")
        let user6 = new User ("TEST6")

        user1.wieBenIk();
        user2.wieBenIk(); 
        user3.wieBenIk(); 
        user4.wieBenIk(); 
        user5.wieBenIk(); 
        user6.wieBenIk(); 
    }
}

class User{
    constructor(name){
        this.name = name;
    }
    wieBenIk(){
        console.log(this.name);
    }
}

let app = new App();
app.runApplication();
