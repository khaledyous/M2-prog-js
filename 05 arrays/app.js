class App {
    runApplication() {
        console.log("hello world!")

        let favorieten = ["KHALED1", "KHALED2", "KHALED3", "KHALED4", "KHALED5"]
        console.log(favorieten)
        favorieten.push("KHALED")

        let indexToRemove = favorieten.indexOf("KHA")
        favorieten.splice(indexToRemove, 1)
        favorieten.push("KHALEDDDD", "KHAL")

        for (let i = 0; i < favorieten.length; i++) {
            const favoriet = favorieten[i];
            console.log(i + ":" + favoriet)
        }

        let nummers = [0.5, 22, 980]
        console.log(nummers)

        for (let i = 0; i < nummers.length; i++) {
            const nummer = nummers[i];
            console.log(nummer)

        }
        let headersByCssClass = document.getElementsByClassName("bandName");

        for (let i = 0; i < headersByCssClass.length; i++) {
            const bandName = headersByCssClass[i];
            console.log(bandName)
            bandName.innerText = "film"
        }
        headersByCssClass[3]. innerText = "film1"
        headersByCssClass[2]. innerText = "film2"
        headersByCssClass[4]. innerText = "film3"


    }
}
let app = new App();
app.runApplication();