let a = prompt('enter end date')
const enddate = a;
document.getElementById('end-date').innerHTML = enddate;
const ip = document.querySelectorAll('input');

// function clk() {
//     const end = new Date(enddate);
//     const now = new Date();
//     if (end < now) {
//         document.getElementById('end-date').innerHTML = "Time's up!";
//         return;
//     }
//     const diff = (end - now)/1000;
//     ip[0].value = Math.floor(diff/(24*60*60));
//     ip[1].value = Math.floor(diff/(60*60)%24);
//     ip[2].value = Math.floor(diff / 60) % 60;
//     ip[3].value = Math.floor(diff) % 60;


    
// }



setInterval(clk =  ()=> 
    {
        const end = new Date(enddate);
    const now = new Date();
    if (end < now) {
        document.getElementById('end-date').innerHTML = "Time's up!";
        return;
    }
    const diff = (end - now)/1000;
    ip[0].value = Math.floor(diff/(24*60*60));
    ip[1].value = Math.floor(diff/(60*60)%24);
    ip[2].value = Math.floor(diff / 60) % 60;
    ip[3].value = Math.floor(diff) % 60;


    }, 1000);
    clk();