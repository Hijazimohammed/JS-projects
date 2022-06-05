const displayTime = document.querySelector('.display-time');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const ampm = document.getElementById('ampm');
const form = document.querySelector('form');
const alarmsDiv = document.querySelector('.alarms');
const alarms = [
  {
    hour: 2,
    minute: 51,
    period: 'pm',
  },
  {
    hour: 3,
    minute: 50,
    period: 'pm',
  },
];

const display = () => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const ampm = hour >= 12 ? 'pm' : 'am';
  displayTime.innerText =
    (hour < 10 ? '0' + hour : hour) +
    ':' +
    (minute < 10 ? '0' + minute : minute) +
    ':' +
    (second < 10 ? '0' + second : second) +
    ' ' +
    ampm;
};
setInterval(display, 1000);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  //   console.log(
  //     (hour.value < 10 ? '0' + hour.value : hour.value) +
  //       ':' +
  //       (minute.value < 10 ? '0' + minute.value : minute.value) +
  //       ' ' +
  //       ampm.value
  //   );
  if (hour.value == 0 || minute.value == 0) {
    alert('check fields');
  } else {
    const div = document.createElement('div');
    const clock = {
      hour: Number(hour.value),
      minute: Number(minute.value),
      period: ampm.value,
    };
    div.innerText =
      (hour.value < 10 ? '0' + hour.value : hour.value) +
      ':' +
      (minute.value < 10 ? '0' + minute.value : minute.value) +
      ' ' +
      ampm.value;

    alarms.push(clock);
    alarmsDiv.appendChild(div);

    hour.value = '';
    minute.value = '';
  }
});

for (const alarm of alarms) {
  const div = document.createElement('div');
  div.innerText =
    (alarm.hour < 10 ? '0' + alarm.hour : alarm.hour) +
    ':' +
    (alarm.minute < 10 ? '0' + alarm.minute : alarm.minute) +
    ' ' +
    alarm.period;

  alarmsDiv.appendChild(div);
}
const audio = document.createElement('audio');
audio.src =
  'http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/ateapill.ogg';
audio.controls = 'controls';

setInterval(() => {
  const date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;

  for (const alarm of alarms) {
    if (alarm.period == 'am') {
      if (alarm.hour == hour && alarm.minute == minute) {
        audio.play();
      }
    } else {
      const h = alarm.hour + 12;

      if (h == hour && alarm.minute == minute) {
        audio.play();
      }
    }
  }
}, 1000);
