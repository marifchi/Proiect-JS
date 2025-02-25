import './light-mode.js';

const hoursHand = document.getElementById('hours');
const minutesHand = document.getElementById('minutes');
const secondsHand = document.getElementById('seconds');

const dateLabel = document.getElementById('date-label');
const timezoneSelector = document.getElementById("timezone");

//Documentatia: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf
const timeZones = Intl.supportedValuesOf('timeZone');
timeZones.forEach((timezone) => {
    let option = document.createElement('option');
    option.value = timezone;
    option.text = timezone;
    timezoneSelector.appendChild(option);
});


timezoneSelector.addEventListener('change', displayTime);

function displayTime(){
    
    const currentLocale = navigator.language;
    const selectedTimezone = timezoneSelector.value;
    const date = new Date().toLocaleDateString(currentLocale,  {timeZone: selectedTimezone});
    const dateTime = new Date().toLocaleString('en-EN',  {timeZone: selectedTimezone});

    dateLabel.innerText = date;
    const currentTime = new Date(dateTime);

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    //Aflam rotatia acelor in grade
    const hoursHandRotation = 30*hours + minutes/2;
    const minutesHandRotation = 6*minutes;
    const secondsHandRotation = 6*seconds;

    hoursHand.style.transform = `rotate(${hoursHandRotation}deg)`;
    minutesHand.style.transform = `rotate(${minutesHandRotation}deg)`;
    secondsHand.style.transform = `rotate(${secondsHandRotation}deg)`;

}

displayTime();
setInterval(displayTime, 1000);


