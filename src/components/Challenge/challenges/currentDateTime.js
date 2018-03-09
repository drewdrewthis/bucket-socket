const currentDateTime = () => {
  let today = new Date();
  let day = today.getDay();
  let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  // console.log("Today is : " + daylist[day] + ".");
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;

  if (hour===0 && prepand===' PM ')
  {
    if (minute===0 && second===0)
    {
      hour=12;
      prepand=' Noon';
    }
    else
    {
      hour=12;
      prepand=' PM';
    }
  }
  if (hour===0 && prepand===' AM ')
  {
    if (minute===0 && second===0)
    {
      hour=12;
      prepand=' Midnight';
    }
    else
    {
      hour=12;
      prepand=' AM';
    }
  }

  /* eslint-disable no-useless-concat */
  return "Today is : " + daylist[day] + ".\n" + "Current Time : "+hour + prepand + " : " + minute + " : " + second;
}

export default (updateScore, i) => ({
  title: 'Current Date and Time',
  description: 'Write a JavaScript program to display the current day and time in the following format.\n Current time is : 4 PM : 50 : 22',
  output: {
    description: 'Get it right',
    setup: `var answer = '';`,
    verify: (answer) => {
      console.log('Answer:', answer);
      if (answer === currentDateTime()) {
        updateScore(i);
        return true;
      }
    },
    teardown: `__verify__(answer)`
  }
});
