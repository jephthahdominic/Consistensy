const today = new Date();

function dateFormating(input){
    if(input.target.name==="start-date"){
        console.log(input.target.value)   
        console.log(today.toUTCString)
    }
    const selectedDate = new Date(input.target.value);
    const formattedDate = selectedDate.toLocaleDateString('en-US', {month: 'long', day:'numeric', year:'numeric'});
    return formattedDate;
}
function timeFormating(input){
    const timeValue = input.target.value;
    const [hour, minute] = timeValue.split(":");
    const date = new Date();
    date.setHours(hour);
    date.setMinutes(minute);
    const formattedTime = date.toLocaleTimeString('en-US', {
        hour:"numeric",
        minute: "numeric",
        hour12: true
    });
    return formattedTime;
}

export {dateFormating, timeFormating}