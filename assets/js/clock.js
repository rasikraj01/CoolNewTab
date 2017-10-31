
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var h_dis = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    h = checkTime(h);
    var time = "#" + h +""+ m +""+ s ;
    var disptime = `${h_dis}:${m}:${s}`;
    document.getElementById('clock').innerHTML =`<p style="color:#ffffff">${disptime}</p>`
    
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
startTime();