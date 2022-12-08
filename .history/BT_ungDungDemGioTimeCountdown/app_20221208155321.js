function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

async function countDown(i) {
    while (i > 0) {
        document.querySelector('#time-countdown').innerHTML = i;
        i--;
        await sleep(1000);
    }
    return "Counter finished:";
}

function timeCountdown() {
    let counter = countDown(document.querySelector('#time').value);
    counter.then((msg) => {
        document.querySelector('time-countdown').innerHTML = msg
    });
}