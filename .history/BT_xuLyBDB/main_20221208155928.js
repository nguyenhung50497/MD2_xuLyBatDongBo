function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

async function check(i, m) {
    while (i > 0) {
        i--;
        await sleep(1000);
    }
    if (m === 10000) return "Enough buy a car";
    else return "Not enough buy a car"
}

function timeCountdown() {
    let counter = check(2, document.querySelector('#money').value);
    counter.then((msg) => {
        document.querySelector('#result').innerHTML = msg
    });
}