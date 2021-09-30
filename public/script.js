function display_dt() {
    
    const ts = Math.round((new Date()).getTime() / 1000);
    const dt = new Date(ts*1000);
    const day = dt.toLocaleString("en-US", {weekday:"long"});
    const month = dt.toLocaleString("en-US", {month:"long"});
    const date = dt.toLocaleString("en-US", {day:"numeric"});
    const time = dt.toLocaleString("en-US", {hour:"numeric", minute: "numeric", hour12: true});


    document.querySelector('.date').textContent = `${day}, ${date} ${month}`;
    document.querySelector('.time').textContent = `${time}`;

    update();
}

    
    function update(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout(display_dt,refresh)
    }

    display_dt();