let BlackColorPath = "https://natsumef.github.io/live-2d-cat/bCat.json";
let whiteColorPath = "https://natsumef.github.io/live-2d-cat/wCat.json";
let path = whiteColorPath;
let loopIndex = null;

const createLive2d = (path)=>{
    if(!path){
        path = Math.random() > 0.5 ? BlackColorPath : whiteColorPath
    }
    window.loadlive2d(
        "cat_canvas_live",
        path
    );
}
const  setIntervalChange = ()=>{
    closeIntervalChange()
    loopIndex = setInterval(() => {
        createLive2d()
    }, 20000)
}
const closeIntervalChange = ()=>{
    clearInterval(loopIndex)
}

function createCanvas() {
    let box = createEle("div",document.body,{
        id:"_chrome_cat_box",
        className:"_chrome_cat_box",
    })
    
    let mainBtns = createEle("div",box,{
        id:"_chrome_cat_box_main_btns",
        className:"_chrome_cat_box_main_btns",
    })
    let btnBlack = createEle("buttom",mainBtns,{
        id:"_chrome_cat_box_main_black",
        className:"_chrome_cat_box_main_btn",
        innerHTML :"切换黑猫"
    })
    let btnWhite= createEle("buttom",mainBtns,{
        id:"_chrome_cat_box_main_white",
        className:"_chrome_cat_box_main_btn",
        innerHTML:"切换白猫"
    })
    let btnLoop = createEle("buttom",mainBtns,{
        id:"_chrome_cat_box_main_loop",
        className:"_chrome_cat_box_main_btn",
        innerHTML :"关闭轮询"
    })

    btnBlack.onclick=()=>{
        path=BlackColorPath
        createLive2d(path)
    }
    btnWhite.onclick=()=>{
        path=whiteColorPath
        createLive2d(path)
    }
    btnLoop.onclick=()=>{
        if(btnLoop.innerHTML =="关闭轮询"){
            btnLoop.innerHTML = "开启轮询";
            setIntervalChange();
        }else{
            btnLoop.innerHTML = "关闭轮询";
            closeIntervalChange();
        }
    }


    let canvasDom = document.createElement("canvas");
    canvasDom.width = "280";
    canvasDom.height = "280";
    canvasDom.id = "cat_canvas_live";
    canvasDom.style = `
        z-index:9999999;
        background: rgba(1, 1, 1, 0.18);
        border-radius: 65% 50% 50% 0;
    `
    box.appendChild(canvasDom);
    return canvasDom
}

function createEle(type,appendTo,option){
    let ele =  document.createElement(type);
    for (let i in option){
        ele[i] = option[i];
    }
    appendTo.appendChild(ele);
    return ele
}


function init() {
    setTimeout(() => {
        createCanvas();
        createLive2d(path);
    }, 1000)
    setIntervalChange();
}


init()