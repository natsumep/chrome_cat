

    function createCanvas() {
        let canvasDom = document.createElement("canvas");
        canvasDom.width = "280";
        canvasDom.height = "280";
        canvasDom.id = "cat_canvas_live";
        canvasDom.style = `
            position:fixed;
            bottom:10px;
            right:0;
            z-index:9999999;
            background: rgba(1, 1, 1, 0.18);
            border-radius: 65% 50% 50% 0;
        `
        document.body.appendChild(canvasDom);
        return canvasDom
    }
    function init() {
        setTimeout(() => {
            createCanvas();
            window.loadlive2d(
                "cat_canvas_live",
                Math.random() > 0.5 ? "https://natsumef.github.io/live-2d-cat/wCat.json"  :   "https://natsumef.github.io/live-2d-cat/bCat.json"
            );
        }, 1000)


    }
    init()