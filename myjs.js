
m=0;//screen starting
var y;
function start()
{
    y=setInterval(run,100);//The setInterval() method repeats a given function[here fun] at every given time-interval.
    function run()
    {
        if(m==1200)
        {
            clearInterval(y);//The clearInterval() method stops the executions of the function specified in the setInterval() method.
            m=0;//return the cursor to the starting of the screen
        }
        else{
            m+=8;//increment of the car
        var x=document.getElementById("img");//select img and store in x as we have to move that image
        x.style.marginLeft=m+'px';//The marginLeft property sets or returns the left margin of an element.
        }
    }
}
function stop()
{
    clearInterval(y)//The clearInterval() method stops the executions of the function specified in the setInterval() method.
}