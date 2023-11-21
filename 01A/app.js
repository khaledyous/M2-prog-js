class App
{
    runApplication()
    {
        console.log("Hello world");
        let appNaam = "MijnApplicatie";
        let versienummer = 0.9;
        let versiedatum = "2023-11-23";
        let auteur =  "Khaled" 
        let copyright = "bedrijf" 
        let distributeur = "Jouw Distributeur";
        let darkmode = false;    

        console.log("Applicatie naam:", appNaam);
        console.log("Versienummer:", versienummer);
        console.log("Versiedatum:", versiedatum);
        console.log("Auteur:", auteur);
        console.log("Copyright:", copyright);
        console.log("Distributeur:", distributeur);
        console.log("Darkmode:", darkmode);
    }
    
}

let app = new App();
app.runApplication();