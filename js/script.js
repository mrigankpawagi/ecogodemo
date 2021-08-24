$("#loader").delay(100).fadeOut(400);

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(function (registration) {

        }, function (err) {
        });
    });
}