Array.prototype.chunk = function (size) {
  let result = [];

  while (this.length) {
    result.push(this.splice(0, size));
  }

  return result;
}
function render(biz) {
  for (var i = 0; i < biz.length; i++) {
    $("#businesses").append(`
    
    <div class="col s12 m6 l4">
      <div class="card" data-id="` + i + `">
        <div class="card-content">
        <b class="card-title bolder">` + biz[i].name + `</b>   
        
        ` + biz[i].type.map(function (e) {
      return `<span class="tag">` + e + `</span>`;
    }).join(' ') + `<br><br>
        <p class="green-text text-darken-3"><i class="material-icons">
        map
        </i> ` + biz[i].address + `</p>
        <br>
      <p>` + trunc(biz[i].description, 150) + `</p>
        </div>
      </div>
    </div>

    `);

    if (biz[i].products != undefined) {
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
  }
  $("#products .card").click(function () {
    [i, j] = $(this).attr('data-id').split('-');
    $("#productname").text(biz[i].products[j].name);
    $("#productsellername").text(biz[i].name);
    $("#productprice").text('HK$' + biz[i].products[j].price);
    $("#productrating").html('<span class="material-icons green-text">star</span>'.repeat(Math.round(Math.random() * 5)));
    $("#productdescription").text(biz[i].products[j].description);
    $("#producttags").html((biz[i].products[j].tag != undefined ? biz[i].products[j].tag.map(function (e) {
      return `<span class="tag">` + e + `</span>`;
    }) : ''));
    $("#productimage").attr('src', 'images/products/' + biz[i].name + '/' + j + '.png');
    $("#viewproduct").modal('open');
  });

  $("#businesses .card").click(function () {

    i = $(this).attr('data-id');
    $("#businessname").text(biz[i].name);
    $("#businesstags").html(biz[i].type.map(function (e) {
      return `<span class="tag">` + e + `</span>`;
    }).join(' '));
    $("#businessdescription").text(biz[i].description);
    $("#businessaddress").text(biz[i].address);

    $("#businessproducts").attr("data-query", biz[i].name);
    $("#businesslink, #businesscontact").html('');
    if (biz[i].link != 0) {
      $("#businesslink").html('<i class="material-icons">link</i> ' + biz[i].link);
    }
    if (biz[i].email != 0) {
      $("#businesscontact").append('<i class="material-icons">email</i> ' + biz[i].email + "<br>");
    }
    if (biz[i].phone != 0) {
      let ph = biz[i].phone.replace(' ', '');
      if (ph.slice(0, 4) !== "+852") {
        ph = "+852" + ph;
      }

      $("#businesscontact").append('<i class="material-icons">call</i> ' + ph + "<br>");
    }
    if (biz[i].other != 0) {
      $("#businesscontact").append('<i class="material-icons">sms</i> ' + biz[i].other + "<br>");
    }

    $("#viewbusiness").modal('open');
  });

}

head = ["index", "name", "address", "description", "type", "link", "email", "phone", "other", "latitude", "longitude"];

var biz = [];
$.ajax({
  url: 'https://spreadsheets.google.com/feeds/cells/1DZV8dOcOZTQ6_fIAAcShDgxJoSdlASq-pO-krHWwPD8/2/public/full?alt=json',
  method: 'GET',
  success: function (r) {
    rows = r.feed.entry.chunk(head.length);

    for (var i = 1; i < rows.length; i++) {
      let b = {};
      for (var j = 0; j < head.length; j++) {
        b[head[j]] = rows[i][j].content.$t;
      }
      b.type = b.type.replace(' ', '').toLowerCase().split(',');
      if (prods[b.index] != undefined)
        b['products'] = prods[b.index];
        biz.push(b);
    }
    render(biz);
  }
});

const prods = {
  12: [
    {
      name: "Okra chips",
      tag: ['Vegan'],
      price: "0.50",
      description: "Prevents constipation, bad breath, and acne while relieving sore throat. Good for skin health maintenance, speeds up recovery from gastritis, gastric ulcer, and wounds."
    },
    {
      name: "Travel mug",
      tag: ['Vegan'],
      price: "155.00",
      description: "These brilliant rCUPs are the first portable travel mugs made from recycled paper coffee cups. They have push lids, for easy drinking on the go, and provide a 360-degree drinking experience."
    },
    {
      name: "Coconut Matter Probiotic Deodorant Sticks",
      tag: ['Vegan'],
      price: "145.00",
      description: "MOOD Deodorant by Coconut Matter is a blend of carefully selected plants and minerals based ingredients. MOOD deodorants are fully biodegradable from content to packaging."
    },
    {
      name: "Ecostore - Shampoo Bar",
      tag: ['Vegan'],
      price: "155.00",
      description: "Triple milled for a rich creamy lather. Made from plant and mineral-based ingredients."
    },
  ],
  13: [
    {
      name: "Ethique Lip Balm",
      tag: ['Vegan'],
      price: "90.00",
      description: "Do good for your lips with our lip balms – packed with nourishing plant-based ingredients; cocoa butter, castor seed, moringa and jojoba oils to hydrate and leave your lips feeling smooth and supple for longer. Do good for the planet – 100% plastic-free, home compostable packaging (yes, the tube!). Do good for people - Carefully crafted with luxurious fairly traded sustainable ingredients from Rwanda, Ghana and Samoa to help support farming cooperatives (predominantly women owned) in these regions. Direct trade ensures that local growers receive stable prices and, reliable income which means in turn they are better able to look after their community and their environment."
    },
    {
      name: "Sienna Glass Nail File",
      tag: ['Vegan'],
      price: "120.00",
      description: "Our everlasting glass file will be the last one you will ever buy. These babies never go blunt and are the embodiment of ‘buy better, buy less’. This glass nail file is a beautiful, sustainable addition to your manicure kit. You can use it for years, avoiding disposable lower-quality files."
    },
    {
      name: "Biona - Jackfruit Stew (Organic)",
      tag: ['Vegan'],
      price: "50.00",
      description: "A hearty jackfruit stew made with tender organic jackfruit pieces, potatoes and carrots in a rich lightly seasoned tomato sauce. This ready-to eat stew is perfect for creating quick and easy plant-based meals in a hurry. Delicious served with rice or fresh crusty bread to mop up any remaining sauce."
    },
    {
      name: "Porter Bowl - Ceramic",
      tag: ['Vegan'],
      price: "380.00",
      description: "The Porter Bowl’s minimalist design & muted hues let you cut down on single-use plastics and look good doing it. Roomy, one-litre capacity packs everything from big salads and grain bowls to pasta and veggies."
    },
  ],
  17: [
    {
      name: "Basil Extra Virgin Olive Oil",
      tag: ['Vegan'],
      price: "56.00",
      description: "This oil is excellent for marinating vegetables & is a fine addition to pasta. The King of Herbs as basil is still termed, shows its advantage in combination with tomatoes and mozzarella. Fabulous with lettuce, pasta, risotto and caprese. This oil shouldn't be heated too much to preserve the fine aroma."
    },
    {
      name: "Smoked Sea Salt",
      tag: ['Vegan'],
      price: "86.00",
      description: "Our Smoked Salt, also called hickory salt, is a pure sea salt of the Dead Sea. It gets its intense taste from being gently cold-smoked over hickory wood. Add a rich, smoky flavor to poultry, grilled meat, and fish."
    },
    {
      name: "Wasabi Fig Mustard",
      tag: ['Vegan'],
      price: "58.00",
      description: "The sharpness of wasabi combined with the fruitiness of figs is mouth-watering! Try it with fish, seafood, sushi, beef and more."
    },
    {
      name: "Sea Salt Lemon & Pink Peppercorns",
      tag: ['Vegan'],
      price: "59.00",
      description: "This salt and spice mix is a wonderful summery composition with coarse sea salt, aromatic fresh lemon zest and exquisite pink berries. Perfect for refining fish, poultry or even vegetables."
    },
  ],
  7: [
    {
      name: "Miu Miu Sleeveless Top",
      price: "1,300.00",
      description: "Floral printed black halter neck ruched cropped top with smocked back."
    },
    {
      name: "Calvin Klein Maxi Dress",
      price: "1,500.00",
      description: "Grey, red, and white check button up maxi shirt dress."
    },
    {
      name: "Chanel Pearl Dress",
      price: "5,000.00",
      description: "Pearl chain belt with CC logo."
    },
    {
      name: "Sergio Rossi High Heels",
      price: "1,200.00",
      description: "Brown leather high heels with red knee-length lace up ropes."
    },
  ],
  5: [
    {
      name: "The Paisley",
      tag: ['Vegan'],
      price: "800.00",
      description: "Peach melony roses highlighted by lilac Dutch carnations, The Paisley is simple, carefree and sweet to the eyes - the perfect pick-me-up bouquet suitable for all occasions or no reason at all."
    },
    {
      name: "The Luisia",
      tag: ['Vegan'],
      price: "700.00",
      description: "Does it get any better than fresh greens and bright whites? Add a pop of pink to the mix and its perfection! The Luisia is like sipping on an exotic frozen concoction served on a hot summer day at a far-away beach...and it's just as Instagrammable. So send now, and get those spring vibes going!"
    },
    {
      name: "The Tulipa",
      tag: ['Vegan'],
      price: "1,200.00",
      description: "The Tulipa, as it is named, is a handheld arrangement of pink Tulips. Pink tulips are known for affection, send this unique tulip arrangement to a family member delivered to their door!"
    },
    {
      name: "The Paige",
      tag: ['Vegan'],
      price: "600.00",
      description: "Stylish + sweet - get everyone on the same Paige with these swoon-worthy stems. Take a closer look and you will see its multiple colors slowly bursting with joy and sunshine! Perfect for anyone who wants to send that little something that will make their crush, love, or bestie's day! Thankfully for you, that's also what we're best at! We've packed multiple colors of Dianthus and there you have it: the perfect \"I was just thinking of you\" gift!"
    },
  ],
  /*{
    name: "reBooked",
    description: "ReBooked is a non-profit social enterprise that aims to promote a circular economy for children's books.",
    address: "No. 9 Mee Lun Street",
    type: "Bookstore",
    products: [
      {
        name: "A Ball for Daisy",
        tag: ['Vegan'],
        price: "25.00",
        description: "A Ball for Daisy is a 2011 children's wordless picture book written and illustrated by Chris Raschka. The book tells the story of a dog named Daisy, who has a beloved ball destroyed and then replaced."
      },
      {
        name: "The Owl and the Pussycat",
        tag: ['Vegan'],
        price: "15.00",
        description: "The Owl and the Pussy-cat is a nonsense poem by Edward Lear, first published during 1871 as part of his book Nonsense Songs, Stories, Botany, and Alphabets."
      },
      {
        name: "The Baby Bible Storybook",
        tag: ['Vegan'],
        price: "20.00",
        description: "Introduce your toddler to the excitement of reading the Bible in a way that he or she can really enjoy. The specially selected stories and brightly colored illustrations will provide new people to meet, places to see, and stories to hear. Each story includes simple activities and hand motions to go with the stories."
      },
      {
        name: "Harry Potter and the Cursed Child",
        tag: ['Vegan'],
        price: "30.00",
        description: "Harry Potter and the Cursed Child is a 2016 British two-part play written by Jack Thorne based on an original story by J. K. Rowling, John Tiffany, and Thorne."
      },
    ]
  },*/
};