const counternum = document.querySelector(".countl");
const leavel_Font = document.querySelector(".leavel-Front");

let index = 0;


function updatenumber(){
    index++ ;
    counternum.innerHTML = index + "%"
    leavel_Font.style.width = index + "%"

    if(index <20){
            setTimeout(updatenumber,200)
    }
    else if(index < 50){
            setTimeout(updatenumber,40)
    }
    else if(index < 80){
            setTimeout(updatenumber,100)
    }
    else if(index < 90){
            setTimeout(updatenumber,80)
    }
    else if(index < 98){
        setTimeout(updatenumber,1000)
    }
    else if(index < 100){
        setTimeout(updatenumber,80)

    }
    
}
updatenumber();