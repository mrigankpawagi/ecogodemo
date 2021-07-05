M.AutoInit();
$("#nav").load((function(){
    if (typeof customNav !== "undefined")
        return "components/" + customNav;
    else return "components/nav.html";
})());
$("footer").load("components/footer.html");
$("#loader").delay(100).fadeOut(400);