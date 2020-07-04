function updateClockHous(){
  let now = moment();
  now.tz("America/Chicago"); //mesmo horario de Houston
  let second = now.seconds() * 6;
  let minute = now.minutes() * 6 + second / 60;
  let hour = ((now.hours() % 12) / 12) * 360 + 90 + minute / 12;
    $('#hour').css("transform", "rotate(" + hour + "deg)");
    $('#minute').css("transform", "rotate(" + minute + "deg)");
    $('#second').css("transform", "rotate(" + second + "deg)");
  }

  function updateClockRott(){
  let now = moment();
  now.tz("Europe/Amsterdam"); //mesmo horario de Rotterdam
  let second = now.seconds() * 6;
  let minute = now.minutes() * 6 + second / 60;
  let hour = ((now.hours() % 12) / 12) * 360 + 90 + minute / 12;
    $('#hourRott').css("transform", "rotate(" + hour + "deg)");
    $('#minuteRott').css("transform", "rotate(" + minute + "deg)");
    $('#secondRott').css("transform", "rotate(" + second + "deg)");
  }

  function updateClockDubai(){
  let now = moment();
  now.tz("Asia/Dubai");
  let second = now.seconds() * 6;
  let minute = now.minutes() * 6 + second / 60;
  let hour = ((now.hours() % 12) / 12) * 360 + 90 + minute / 12;
    $('#hourDubai').css("transform", "rotate(" + hour + "deg)");
    $('#minuteDubai').css("transform", "rotate(" + minute + "deg)");
    $('#secondDubai').css("transform", "rotate(" + second + "deg)");
  }

  function updateClockSinga(){
  let now = moment();
  now.tz("Asia/Singapore");
  let second = now.seconds() * 6;
  let minute = now.minutes() * 6 + second / 60;
  let hour = ((now.hours() % 12) / 12) * 360 + 90 + minute / 12;
    $('#hourSinga').css("transform", "rotate(" + hour + "deg)");
    $('#minuteSinga').css("transform", "rotate(" + minute + "deg)");
    $('#secondSinga').css("transform", "rotate(" + second + "deg)");
  }

function relogio(){
let data = new Date()
let months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
let dayWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

let dataHou = new Date(data.valueOf() - data.getTimezoneOffset() * 40000);
let yearHou = dataHou.getFullYear();    
let dayHou = dataHou.getDate();    
let semanaHou = dayWeek[dataHou.getDay()];

let dataRot = new Date(data.valueOf() + data.getTimezoneOffset() * 100000);
let yearRot = dataRot.getFullYear();
let dayRot = dataRot.getDate();
let semanaRot = dayWeek[dataRot.getDay()];

let dataDub = new Date(data.valueOf() + data.getTimezoneOffset() * 140000);
let yearDub = dataDub.getFullYear();
let dayDub = dataDub.getDate();
let semanaDub = dayWeek[dataDub.getDay()];

let dataSin = new Date(data.valueOf() + data.getTimezoneOffset() * 220000);  
let yearSin = dataSin.getFullYear();
let daySin = dataSin.getDate();
let semanaSin = dayWeek[dataSin.getDay()];

let finalDataHou = semanaHou+", "+dayHou+" de "+months[dataHou.getMonth()]+" "+ yearHou 
let finalDataRot = semanaRot+", "+dayRot+" de "+months[dataRot.getMonth()]+" "+ yearRot 
let finalDataDub = semanaDub+", "+dayDub+" de "+months[dataDub.getMonth()]+" "+ yearDub 
let finalDataSin = semanaSin+", "+daySin+" de "+months[dataSin.getMonth()]+" "+ yearSin 

document.getElementById("houston").innerHTML = finalDataHou
document.getElementById("rotterdam").innerHTML = finalDataRot
document.getElementById("dubai").innerHTML = finalDataDub
document.getElementById("singapore").innerHTML = finalDataSin
}  

function timedUpdate () {
  updateClockHous();
  updateClockRott();
  updateClockDubai();
  updateClockSinga();
  relogio()

  setTimeout(timedUpdate, 1000);
}
timedUpdate();