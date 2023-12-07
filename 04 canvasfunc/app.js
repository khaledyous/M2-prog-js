class App {
    runApplication() {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");

        this.tekenHuis(g, 50, 50);

        this.tekenHuis(g, 200, 50);


        this.tekenKerstBoom(g, 350, 50);

        
        this.tekenKerstBoom(g, 500, 50);
    }

    tekenHuis(g, x, y) {
        g.fillStyle = "black";
        g.fillRect(x, y, 100, 100);

        g.fillStyle = "#8B4513";
        g.beginPath();
        g.moveTo(x, y);
        g.lineTo(x + 50, y - 50);
        g.lineTo(x + 100, y);
        g.closePath();
        g.fill();

        g.fillStyle = "white";
        g.fillRect(x + 25, y + 50, 50, 50);

        g.fillStyle = "white";
        g.fillRect(x + 10, y + 10, 30, 30);
    }

    tekenKerstBoom(g, x, y) {
        g.fillStyle = "#8B4513";
        g.fillRect(x -5, y + 100, 20, 60);

        g.fillStyle = "green";
        g.beginPath();
        g.moveTo(x, y);
        g.lineTo(x + 80, y + 100);
        g.lineTo(x - 80, y + 100);
        g.closePath();
        g.fill();

        
        g.fillStyle = "red";
        for (let i = 0; i < 10; i++) {
            const ballX = x - 50 + Math.random() * 100;
            const ballY = y + 20 + Math.random() * 80;
            g.beginPath();
            g.arc(ballX, ballY, 5, 0, 2 * Math.PI);
            g.fill();
        }

    
    }
}



let app = new App();
app.runApplication();   


