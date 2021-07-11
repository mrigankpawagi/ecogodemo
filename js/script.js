M.AutoInit();
$("#nav").load((function () {
    if (typeof customNav !== "undefined")
        return "components/" + customNav;
    else return "components/nav.html";
})(), function () {

    $('.menu-item').click(function () {
        console.log(this);
        $(this).toggleClass('selected');
    });
    M.Range.init(document.querySelectorAll("input[type=range]"));
    $("#search").keyup(function () { searchForThings($("#search")); });
});
$("footer").load("components/footer.html");
$("#loader").delay(100).fadeOut(400);

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(function (registration) {

        }, function (err) {
        });
    });
}