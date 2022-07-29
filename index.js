const secondHandEl = document.querySelector("#second")
const minuteHandEl = document.querySelector("#minute")
const hourHandEl = document.querySelector("#hour")


function setDate() {
    const now = new Date()
    const second = now.getSeconds()
    const minute = now.getMinutes()
    const hour = now.getHours()
    /* 
    Angle made by second hand in 1 min = 360deg, so in 1sec = 6deg
                  minutes hand in 1 hour=360 deg,in 1 min=6deg
                  
    Angle made by hour hand in 1 hour is (360/12)=30deg,
    and angle made by hour hand in 1 min=(30/60)=0.5deg           

    */
    const secondDegree = (second * 6) + 90 //90 is added because all hands are rotated to 90deg 
    const minuteDegree = minute * 6 + 90
    const hourDegree = (hour * 30 + minute * 0.5) + 90
    secondHandEl.style.transform = `rotate(${secondDegree}deg)`
    minuteHandEl.style.transform = `rotate(${minuteDegree}deg)`
    hourHandEl.style.transform = `rotate(${hourDegree}deg)`
}

setInterval(setDate, 1000)