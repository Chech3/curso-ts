"use strict";
(() => {
    let avengers = 10;
    console.log(avengers);
    let villains = 20;
    if (villains < avengers) {
        console.log("nos salvamos");
    }
    else {
        console.log("estamos muertos");
    }
    avengers = Number("55A");
    console.log(avengers);
})();