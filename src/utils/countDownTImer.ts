import { useState, useEffect } from "react"
const countDownTimer = (timestamp : any) => {
    const [time, setTime] = useState<string>('')
    useEffect(() => {
        setInterval(() => {
            let distance : any = timestamp - new Date().getTime() 
            if (distance > 0) setTime(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + 'H : ' + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) + 'M : ' + Math.floor((distance % (1000 * 60)) / 1000) + 'S')
            else setTime('0 : 00 : 00')
        }, 1000)
    }, [])
    
    return time
}

export default countDownTimer