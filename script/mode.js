function theme()
{
    var body = document.getElementById('bgcolor');
    var colormode = document.getElementById('switch');
    var texbg = document.getElementById('Clock');
    var stopbg = document.getElementById('stopwatch');
    
    if (colormode.checked)
    {
        body.style.background='#fff';
        texbg.style.color="#000";
        texbg.style.background="darkgrey";
        stopbg.style.color="#000";
    }
    else
    {
        body.style.background='#000';
        texbg.style.color="#fff";
        texbg.style.background="#000";
        stopbg.style.color="#fff";
    }
}