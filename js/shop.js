$("#slide-out").load("components/filters.html");
var customNav = "nav-shop.html";

$("#miniHero a").click(function(){
    $("#miniHero a").removeClass('selected');
    $(this).addClass('selected');
});

$("#choosesite").click(function () {
    if($("#choosesite > i").text() == "expand_less"){
        $("#choosesite > i").text("expand_more");
        $("#compressed > h2").text("Shop " + $("#miniHero a.selected").text());
        $("#compressed").show();
        $("#expanded").hide();
    }
    else{
        $("#choosesite > i").text("expand_less");
        $("#compressed").hide();
        $("#expanded").show();
    }
});

for(var x = 0; x < products.length; x++){
    $("#products").append(`
    
    <div class="col s12 m6 l4">
      <div class="card">
        <div class="card-image">
          <img src="images/products/` + x + `.jpg">
          <span class="card-title">` + products[x].title + `</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
      </div>
    </div>

    `);
}