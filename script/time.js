function time()
{
    var date = new Date();//created obj for data
    var hour = date.getHours();//to get current hour
    var minute = date.getMinutes();//to get current minutes
    var second = date.getSeconds();//to get current seconds
    var period = "";// to store AM or PM value

    if (hour >= 12)//to find am or pm
    {
        period = "PM";
    }
    else
    {
        period = "AM";
    }

    //to convert to 12 hours format
    if (hour == 0)
    {
        hour = 12;
    }
    else
    {
        if (hour > 12)
        {
            hour = hour - 12;
        }
    }

    hour = update(hour);//update if lessthan 10
    minute = update(minute);//update if lessthan 10
    second = update(second);//updates if lessthan 10

    //to display the time
    document.getElementById("Clock").innerText = hour + " : " + minute + " : " + second + " " + period;

    //to change every 1sec
    setTimeout(time, 1000);
}
// Append 0 before time elements if they are less than 10
function update(t)
{
    if (t < 10)
    {
        return "0" + t;
    }
    else
    {
        return t;
    }
} 
time();