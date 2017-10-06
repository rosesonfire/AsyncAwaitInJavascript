const fetch = require("node-fetch");

function normal() {
    async function hello() {
    
        const p = await fetch("http://google.com");
        console.log("1");
        const q = await fetch("http://google.com");
        console.log("2");
        const r = await fetch("http://google.com");
        console.log("3");
    }
    
    hello();
    console.log("4");
}

function myAsyncAwait() {

    function hello() {

        fetch("http://google.com").then(response => {
            const p = response;
            console.log("1");
            fetch("http://google.com").then(response => {
                const q = response;
                console.log("2");
                fetch("http://google.com").then(response => {
                    const r = response;
                    console.log("3");
                });
            });
        });
    }

    hello();
    console.log("4");
}

// normal();
myAsyncAwait();

console.log("here");