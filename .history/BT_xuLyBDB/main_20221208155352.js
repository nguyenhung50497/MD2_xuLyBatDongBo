function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

async function countDown(i) {
    while (i > 0) {
        document.querySelector('#').innerHTML = i;
        i--;
        await sleep(1000);
    }
    return "Counter finished:";
}

function timeCountdown() {
    let counter = countDown(document.querySelector('#money').value);
    counter.then((msg) => {
        document.querySelector('#result').innerHTML = msg
    });
}