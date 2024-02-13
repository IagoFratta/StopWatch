let hh = 0
let mm = 0
let ss = 0
let iniciar = false
let jaClicado
let cron

function start(){
    if(!iniciar){
       cron = setInterval(() => {timer()},1000)
       jaClicado = true
    }else if (jaClicado) {
        stop()
    }
   
}

function stop(){
    iniciar = false
    clearInterval(cron)

}

function reset(){
    
    clearInterval(cron)
    hh = 0
    mm = 0
    ss = 0
    iniciar = false

    document.getElementById("cont").innerHTML = "00:00:00"
}

function timer(){
    iniciar = true
    ss++

    if(ss == 60){
        ss = 0
        mm++

    }
    if(mm == 60){
        mm = 0
        hh++ 

    }
    var format = 
    (hh < 10 ? "0" + hh : hh) +
    ":" +
    (mm < 10 ? "0" + mm : mm)+
    ":"+
    (ss < 10 ? "0" + ss : ss)

    document.getElementById("cont").innerHTML = format
}