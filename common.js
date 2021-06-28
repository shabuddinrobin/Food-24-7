function showClock(){
    let rtClock= new Date();
    let hour =rtClock.getHours();
    let minute =rtClock.getMinutes();
    let second =rtClock.getSeconds();
    let watch = document.getElementById("watch");
   watch.innerHTML="Time ➔ "+ hour + " : "+  minute + " : "  + second;
   setTimeout(showClock, 500);
}
