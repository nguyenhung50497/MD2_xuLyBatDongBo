function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

async function check(i) {
    while (i > 0) {
        i--;
        await sleep(1000);
    }
    return "Counter finished:";
}

function timeCountdown() {
    let counter = check(document.querySelector('#money').value);
    counter.then((msg) => {
        document.querySelector('#result').innerHTML = msg
    });
}