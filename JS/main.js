var Quotes = [{ qoute: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`, Auother: "-Albert Enistien" }, 
              { qoute: `“Be yourself; everyone else is already taken.”`, Auother: "― Oscar Wilde" }, 
              { qoute: `“So many books, so little time.”`, Auother: "― Frank Zappa" },
              { qoute: `“A room without books is like a body without a soul.”`, Auother: "― Marcus Tullius Cicero" },
              { qoute: `“Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them.”`, Auother: "―  William Shakespeare" },
              {qoute: `“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.” `,Auother:"-Martin Luther King Jr."}];

var randomNum, NxtRandomNum ,Textcontainer;
function generateRandomQoute() {
    randomNum = generateRandomNum();
    document.getElementById("Qote").innerHTML = "<p>" + randomNum + "</p>";
    console.log(Quotes[0].qoute,Quotes[0].Auother);
    Textcontainer="<p class="+" fs-3"+">" + Quotes[randomNum ].qoute + "</p> " ;
    Textcontainer +="<p class="+"fw-bold fs-2"+">" + Quotes[randomNum].Auother + "</p>" ;
   
    document.getElementById("Qote").innerHTML= Textcontainer;

}


function generateRandomNum() {
//    randomNum = Math.round((Math.random() * 10) / 2);
    while (randomNum == NxtRandomNum) {
        randomNum = Math.round((Math.random() * 10) / 2);
    };
    NxtRandomNum = randomNum;
    return randomNum;

}