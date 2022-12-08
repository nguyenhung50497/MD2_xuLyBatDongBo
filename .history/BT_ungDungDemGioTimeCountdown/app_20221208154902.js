function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

async function countDown(i) {
    while (i > 0) {
        document.getElementById('time-countdown').innerHTML = i;
        i--;
        await sleep(1000);
    }
    return "Counter finished:";S
}



function timeCountdown() {
    let counter = countDown(document.querySelector('#time').value);
    counter.then((msg) => {
        document.getElementById('time-countdown').innerHTML = msg
    });
}