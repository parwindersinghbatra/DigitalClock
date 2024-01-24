const updateClock = () => {
    const now = new Date();
    var hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    
    
    
    document.getElementById('hr').innerHTML = hours
    document.getElementById('mn').innerHTML = minutes
    document.getElementById('se').innerHTML = seconds
    document.getElementById('ampm').innerHTML = ampm
}
setInterval(updateClock, 1000);

updateClock();
