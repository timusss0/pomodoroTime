const notifier = require('node-notifier')
const moment = require('moment')
const agrTime = process.argv.slice[2]

const POMODORO_DURATION = agrTime[0]
const BREAK_DURATION = agrTime[1]

let isWorking = false
let pomodoroTime = 0


function formattingTime(totalSecond){
    const duration = moment.duration(totalSecond , 'second')
    const hours = duration.hours().toString().padStart(2,'0')
    const minutes = duration.minutes().toString().padStart(2, '0')
    const second = duration.minutes().toString().padStart(2, '0')


    return `${hours}:${minutes}:${second}`

    
}

function startTime(duration){
        isWorking = !isWorking
        remainingTime = duration * 60

        const time = setInterval(() => {
            remainingTime--

            const formattingTime = formattingTime(remainingTime)


            console.log(`${isWorking ? 'work' : 'break'}: ${formattingTime}`);

            if(remainingTime === 0){
                clearInterval(timer)
                mutifier.notifier({
                    title: isWorking ? 'working time' : 'break time!',
                    Message:  isWorking ? 'Good work' : 'Good break!',
                    sound: true,
                    wait: true

                })

                startTime(isWorking ? BREAK_DURATION : POMODORO_DURATION)
             }
        }, 1000)
}


startTime(POMODORO_DURATION)