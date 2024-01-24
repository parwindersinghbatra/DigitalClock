const updateClock = () => {
    const now = new Date();
    var hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    
    var ampm = 'AM'
    if (hours > 12){
        hours -= 12
        ampm = 'PM'
    }
    if(hours == 0)
    {
        hours = 12
    }
    if (hours < 10)
    {
        hours = "0" + hours
    }
    
    document.getElementById('hr').innerHTML = hours
    document.getElementById('mn').innerHTML = minutes
    document.getElementById('se').innerHTML = seconds
    document.getElementById('ampm').innerHTML = ampm
}
setInterval(updateClock, 1000);

updateClock();