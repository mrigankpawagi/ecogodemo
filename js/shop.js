$("#slide-out").load("components/filters.html");
var customNav = "nav-shop.html";

$("#miniHero a").click(function () {
  $("#miniHero a").removeClass('selected');
  $(this).addClass('selected');
  $("#exploreproducts, #explorebusinesses, #productsfilter, #businessesfilter").hide();
  $("#explore" + $(this).text().toLowerCase()).show();
  $("#" + $(this).text().toLowerCase() + "filter").show();
});

$("#choosesite").click(function () {
  if ($("#choosesite > i").text() == "expand_less") {
    $("#choosesite > i").text("expand_more");
    $("#compressed > h2").text("Explore " + $("#miniHero a.selected").text());
    $("#compressed").show();
    $("#expanded").hide();
  }
  else {
    $("#choosesite > i").text("expand_less");
    $("#compressed").hide();
    $("#expanded").show();
  }
});

function trunc(txt, l) {
  if (txt.length <= l)
    return txt;
  else
    return txt.slice(0, l) + "…";
}

for (var i = 0; i < biz.length; i++) {
  $("#businesses").append(`
    
    <div class="col s12 m6 l4">
      <div class="card" data-id="` + i + `">
        <div class="card-content">
        <b class="card-title bolder">` + biz[i].name + `</b>   
        
        <span class="tag">` + biz[i].type + `</span>     <br><br>
        <p class="green-text text-darken-3"><i class="material-icons">
        map
        </i> ` + biz[i].address + `</p>
        <br>
      <p>` + trunc(biz[i].description, 150) + `</p>
        </div>
      </div>
    </div>

    `);
  
  for (var j = 0; j < biz[i].products.length; j++) {
    p = biz[i].products[j];
    $("#products").append(`
    
    <div class="col s12 m6 l4">
      <div class="card" data-id="` + i + `-` + j + `">
        <div class="card-image">
          <img style="background-image: url('images/products/` + biz[i].name + '/' + j + `.png');">
          <b class="card-title bolder">` + p.name + `</b>
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
        </div>
        <div class="card-content">
        <span class="price">` + p.price + `</span>
        <br>
        ` + (p.tag != undefined ? p.tag.map(function (e) {
      return `<span class="tag">` + e + `</span>`;
    }) : '') + `
        <br><br>
        <span>` + '<span class="material-icons green-text">star</span>'.repeat(Math.round(Math.random() * 5)) + `</span>
          <p>` + trunc(p.description, 100) + `</p>
        </div>
      </div>
    </div>

    `);
  }
}

$("#usermodal .collapsible").html(`

				` +
  `<li>
        <div class="collapsible-header">
          <i class="material-icons">local_mall</i> <span class="businessname">Rebooked</span>
          <br>
          <span class="spent red-text"><span class="material-icons">remove</span> <span>50</span> <span
              class="material-icons">
              attach_money
            </span></span><span class="earned green-text"><span class="material-icons">
              add
            </span> <span>10</span> <span class="material-icons">
              auto_awesome
            </span></span>
        </div>
        <div class="collapsible-body">

            <p><i class="material-icons">
              schedule
            </i> <span>10:30 AM, 6 July 2021</span>
            </p>

            
    <table class="striped">
      <tbody>
        <tr>
          <td>Eclair</td>
          <td>$0.87</td>
        </tr>
        <tr>
          <td>Jellybean</td>
          <td>$3.76</td>
        </tr>
        <tr>
          <td>Lollipop</td>
          <td>$7.00</td>
        </tr>
      </tbody>
    </table>
          </div>
      </li>`.repeat(5)
);

$('.like-btn').on('click', function () {
  $(this).toggleClass('is-active');
});
$('.minus-btn').on('click', function (e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('div').find('input');
  var value = parseInt($input.val());

  if (value >= 1) {
    value = value - 1;
  } else {
    value = 0;
  }

  $input.val(value);

});

$('.plus-btn').on('click', function (e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('div').find('input');
  var value = parseInt($input.val());

  if (value < 100) {
    value = value + 1;
  } else {
    value = 100;
  }

  $input.val(value);
});

function searchForThings(e) {
  v = e.val().trim().toLowerCase();
  var bcards = $("#businesses .card");
  var pcards = $("#products .card");

  bcards.map(function (e){
    if(JSON.stringify(biz[$(bcards[e]).attr('data-id')]).toLowerCase().search(v) == -1){
      $(bcards[e]).hide();
    }
    else{
      $(bcards[e]).show();
    }
  });

  
  pcards.map(function (e){
    if(JSON.stringify(biz[$(pcards[e]).attr('data-id').split('-')[0]]).toLowerCase().search(v) == -1){
      $(pcards[e]).hide();
    }
    else{
      $(pcards[e]).show();
    }
  });

}