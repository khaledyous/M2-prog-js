class App 
{
    runApplication()
    {
        console.log("Hello world")

        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        g.fillStyle = "yellow";
        g.fillRect(0,0,canvas.width,canvas.height);
        g.fillStyle = "black";
        g.fillRect(0,0,10,10);

        console.log(canvas)

    }    
}
    
let app = new App();
app.runApplication();   