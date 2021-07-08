$("#slide-out").load("components/filters.html");
var customNav = "nav-shop.html";

$("#miniHero a").click(function(){
    $("#miniHero a").removeClass('selected');
    $(this).addClass('selected');
});

$("#choosesite").click(function () {
    if($("#choosesite > i").text() == "expand_less"){
        $("#choosesite > i").text("expand_more");
        $("#compressed > h2").text("Explore " + $("#miniHero a.selected").text());
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
          <img style="background-image: url('images/products/` + x + `.jpg');">
          <b class="card-title bolder">` + products[x].title + `</b>
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
        </div>
        <div class="card-content">
        <span class="price">` + products[x].price + `</span>
        <br>
        <span class="tag">` + products[x].type + `</span>
        <br><br>
        <span>` + '<span class="material-icons green-text">star</span>'.repeat(products[x].rating) + `</span>
          <p>` + products[x].description + `</p>
        </div>
      </div>
    </div>

    `);
}

$("#usermodal").html(`
<div class="modal-content">
			<h5 class="bolder"><i class="material-icons">person_pin
				</i> Ethan Song</h5>
			<p class="green-text text-darken-3"><i class="material-icons">redeem
				</i> 385 Green Points</p>
			<br>
			<p class="bolder"> <i class="material-icons">
					account_balance_wallet
				</i> History</p>
			<ul class="collapsible popout">
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
        + `
			</ul>

		</div>
		<div class="modal-footer">
			<a href="#!" class="waves-effect waves-red btn-flat"> <i class="left material-icons">
					logout
				</i> Logout</a>
			<a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
		</div>
    
    `);