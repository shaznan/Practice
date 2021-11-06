const getSleepHour = (day) =>{
    switch(day){
        case 'monday':
            return 1;
            break;
        case 'tuesday':
            return 8;
            break;
        case 'wednesday':
            return 6;
            break;
        case 'thursday':
            return 8;
            break;
        case 'friday':
            return 6;
            break;
        case 'saturday':
            return 8;
            break;
        case 'Sunday':
            return 7
            break;
        default:
        return 'There was an error!'
    }
};

const getActualSleepHours = () =>{
 return getSleepHour('monday') +
 getSleepHour('tuesday') +
 getSleepHour('wednesday') +
 getSleepHour('thrusday') +
 getSleepHour('friday') +
 getSleepHour('saturday') +
 getSleepHour('sunday');
};


const getIdealSleepHours = () =>{
    const idealHours = 7;
    return idealHours * 7;
};

const calculatedSleepDebt = () =>{
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    actualSleepHours < idealSleepHours ? console.log('You did not get enough sleep!'):
    actualSleepHours > idealSleepHours ? console.log('Good job! You got more than your goal!'):
    actualSleepHours === idealSleepHours ? console.log('You got the exact amount of sleep you wanted! '):
    console.log('Error Somthing went wrong!')
};

calculatedSleepDebt()

