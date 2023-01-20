let music=new Audio("music.mp3");
let audioturn=new Audio("ting.mp3");
let gameOver=new Audio("gameover.mp3");
let turn="x";
let isgameover=false;

const changeTurn = () =>{
    return turn==="x"?"0" :"x";
}

const checkWin = () =>{
    let text=document.getElementsByClassName("gamesx");
    let wins=[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if((text[e[0]].innerText===text[e[1]].innerText) && (text[e[2]].innerText===text[e[1]].innerText) && (text[e[0]].innerText!=="")){
            document.querySelector(".info-text").innerText=text[e[0]].innerText +" won"
            isgameover=true
            document.getElementsByTagName('img')[0].style.width="100px"
            gameOver.play();
        }
    })
}

//logic
// j
let box=document.getElementsByClassName("box");
Array.from(box).forEach(element=>{
    let text=element.querySelector(".gamesx");
    element.addEventListener('click',()=>{
        if(text.innerText===''){
               text.innerText=turn;
               turn=changeTurn();
               audioturn.play();
               checkWin();
               if(!isgameover){
                document.getElementsByClassName("info-text")[0].innerText="turn for "+turn;
               }
        }
    })
})

//reset all
reset.addEventListener('click',()=>{
    let text=document.querySelectorAll(".gamesx");
    Array.from(text).forEach(element=>{
        element.innerText="";
    })
    turn="x";
    isgameover=false;
    document.getElementsByClassName("info-text")[0].innerText="turn for "+turn;
    document.getElementsByTagName('img')[0].style.width="0";
})