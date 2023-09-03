const timer = document.querySelector('.timer')
const clickBtn = document.querySelector('.click-btn')
const clickInfo = document.querySelector('.nums')
const resBtn = document.querySelector('.restart-btn')

let num = 0

clickBtn.onclick = function () {
    num += 1
}

function timerInterval () {
    const interval = setInterval(() => {
    timer.textContent -=1
    if (timer.textContent === '0') {
        timer.textContent = 'Your Clicks:'
        timer.style = 'font-size: 50px'
        clickInfo.style = 'display: flex;'
        clickInfo.textContent = num
        setTimeout(() => {
            resBtn.style = 'display: flex;'
        },1200)
        clearInterval(interval)
    }
},1000)
}

timerInterval()

resBtn.onclick = function () {
    resBtn.style = 'display: none'
    timer.textContent = '10'
    timer.style = 'font-size: 90px;'
    clickInfo.style = 'display:none'
    num = 0

    timerInterval()
}
