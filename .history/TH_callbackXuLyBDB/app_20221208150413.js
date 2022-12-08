function download(url, callback) {
    setTimeout(() => {
        console.log(`Downloading ${url} ...`);
        callback(url);
    }, 1000);
}

function process(picture) {
    console.log(`Processing ${picture}`);
}

let url = 'https://wwww.javascripttutorial.net/pic.jpg';
download(url, process);
Kết quả:

Downloading https://www.javascripttutorial.net/pic.jpg ... 
Processing https://www.javascripttutorial.net/pic.jpg