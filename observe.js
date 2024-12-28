"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var myObservable = new rxjs_1.Observable(function (observer) {
    observer.next('Hello');
    observer.complete(); // This will mark the observable as complete
});
myObservable.subscribe({
    next: function (data) { return console.log(data); }, // Data emitted
    complete: function () { return console.log('Done!'); } // Completion handler
});
