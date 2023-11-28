class App {
    runApplication() {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");

        g.fillStyle = "black";
        g.fillRect(50, 50, 300, 300);

        g.fillStyle = "#8B4513";
        g.beginPath();
        g.moveTo(50, 50);
        g.lineTo(200, 10);
        g.lineTo(350, 50);
        g.closePath();
        g.fill();

        g.fillStyle = "white";
        g.fillRect(150, 200, 100, 150);

        g.fillStyle = "white";
        g.fillRect(80, 80, 60, 60);

        
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let x = 80 + i * 80;
                let y = 80 + j * 60;

                
                let random = Math.random();

                
                if (random < 0.5) {
                    g.fillStyle = "yellow";
                } else {
                    g.fillStyle = "black";
                }

                g.fillRect(x, y, 20, 20);
            }
        }
    }
}

let app = new App();
app.runApplication();


