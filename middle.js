var bestSellerData = [
    {
      imageUrl: "https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/4f2023a6-ec0e-84c7-ae4e-1090534a2210/original/1584770367.3699--2020-03-2111_29_27--738.jpeg?format=webp",
      name: "Chicken Curry Cut (Small Pcs) ",
      price: "139",
      netWt: "Net wt:500gms",
      gross: "Gross:526gms",
      smallpara:"Bone-in chunky pieces of skinless meat including one le...",
      link: "curry(J).html"
  },
  {
      imageUrl: "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_3nqjtznab5c/1/prod_display_image/1636908289.9261--2021-11-1422:14:49--1818?format=webp",
      name: "Chicken Breast - Boneless",
      price: "239",
      netWt: "Net wt:450gms",
      gross: "Gross:600gms",
      smallpara:"Tender, boneless fillets of chicken meat cut from the bre...",
      link: "breastbone(J).html"
  },
  {
      imageUrl: "https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/0c9912b9-343c-92b4-ca88-ce887bc2ac7d/original/1585487159.8419--2020-03-2918_35_59--472.jpeg?format=webp",
      name: "Tender Spring Chicken- Whole Bird Curry Cut",
      price: "269",
      netWt: "Net wt:800gms",
      gross: "Gross:841gms",
      smallpara:"A whole spring chicken cut into meaty pieces including...",
      link: "Tender(J).html"
  },
  ];
  
    var bonelessData = [
    {
      imageUrl: "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_3nqjtzosblz/1/prod_display_image/1636890738.8399--2021-11-1417:22:18--905?format=webp",
      name: "Chicken Thigh- Boneless",
      price: "275",
      netWt: "Net wt:450gms",
      gross: "Gross:565gms",
      smallpara:"Skinless, pale pink, boneless meat from the upper chick...",
      link: "ChickenThighBoneless.html"
  },
  {
      imageUrl: "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_579a52ccd74d7/1/prod_display_image/1636890967.7006--2021-11-1417:26:07--905?format=webp",
      name: "Goat - Boneless",
      price: "735",
      netWt: "Net wt:500gms",
      gross: "Gross:758gms",
      smallpara:"Chunky, even pieces of fat-trimmed, boneless goat mea...",
      link: "GoatBoneless.html"
  },
  {
      imageUrl: "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_3rkjm1v51mm/1/prod_display_image/1636890938.9032--2021-11-1417:25:38--905?format=webp",
      name: "Basa (Pangas) - Boneless Cubes",
      price: "349",
      netWt: "Net wt:400gms",
      gross: "Gross:1600gms",
      smallpara:"Relish the smooth, soft texture of Indian Basa cubes in e...",
      link: "Basa(pangas).html"
  }
  ];
  
      var breakfastData = [
         {
             imageUrl: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/344a9b80-5975-563a-979e-f0bea01a3b93/original/Chunky-Butter-Chicken-Spread_(4).jpg?format=webp",
             name: "Chunky Butter Chicken Spread",
             price: "199",
             netWt: "Net wt:200gms",
             gross: "Gross:200gms",
             smallpara:"Mildly spiced chunks of freshly roasted chicken blended...",
             link: "ButterSpread(jspread).html"
         },
         {
             imageUrl: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/0d28ad62-9409-c682-3c22-8e0ebc1697d5/original/Chunky-Continental-Chicken-Spread.jpg?format=webp",
             name: "Chunky Continental Chicken Spread",
             price: "199",
             netWt: "Net wt:200gms",
             gross: "Gross:200gms",
             smallpara:"A meaty delight mix of freshly roasted chicken chunk...",
             link: "ChunkyContinental(jspread).html"
         },
         {
             imageUrl: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/5aac262d-d37c-4d19-ecfb-f3ce4dfd4d5f/original/Peppery-Chicken-Salami+NEw.jpg?format=webp",
             name: "Peppery Chicken Salami (Mini) | Ready To Eat",
             price: "199",
             netWt: "Net wt:125gms",
             gross: "Pieces:8",
             smallpara:"8 pieces of Peppery Chicken Salami.",
             link: "Peppery.html"
         },
      ];
  
  
   var cartarr = JSON.parse(localStorage.getItem("cartitems"))||[];
  
   bestSellerData.map(function(item){
       var div = document.createElement("div");
  
       var megaimage = document.createElement("img");
       megaimage.setAttribute("src", item.imageUrl);
       megaimage.setAttribute("class" , "megaimg1")
  
       var megaName = document.createElement("p");
       megaName.textContent = item.name;
       megaName.setAttribute("class", "megaName1")
  
       var megapara = document.createElement("p");
       megapara.textContent = item.smallpara;
       megapara.setAttribute("class", "megapara1")
  
       var divWt = document.createElement("div");
       divWt.setAttribute("class" , "Megaflex1")
       
       var mp1 = document.createElement("p");
       mp1.textContent = item.netWt;
       var mp2 = document.createElement("p");
       mp2.textContent = item.gross;
       divWt.append(mp1, mp2);
  
       var divPr = document.createElement("div");
       
       var divPrinside = document.createElement("div");
       divPrinside.setAttribute("class" , "Megaflex2")
       
       var mp3 = document.createElement("p");
       mp3.textContent = item.strikedOffPrice;
       mp3.setAttribute("class" , "mp3")
       var mp4 = document.createElement("p");
       mp4.textContent = `MRP: ₹${item.price}`;
       mp4.setAttribute("class" , "mp4")
  
       var megabutton = document.createElement("button");
       megabutton.textContent = "ADD TO CART";
  
       megabutton.addEventListener("click", function(){
             addTocart(item);
         });
  
       megabutton.setAttribute("class" , "megabutton")
  
       divPrinside.append(mp4 ,megabutton );
  
       divPr.append(divPrinside)
  
       divhr = document.createElement("hr")
       divhr.setAttribute("class" , "Megadivhr")
  
       var divDvy = document.createElement("div");
  
       var divDinside = document.createElement("div");
       divDinside.setAttribute("class" , "Megaflex3")
  
       var megaicon = document.createElement("img");
       megaicon.setAttribute("src", "https://www.licious.in/img/default/express_delivery.svg");
  
       var mp5 = document.createElement("p");
       mp5.textContent = "Tommorrow 7AM-10AM";
  
       divDinside.append(megaicon, mp5)
       divDvy.append(divDinside)
  
       megaimage.onclick = function () {
         location.href = item.link;
         };
  
       div.append(megaimage , megaName, megapara, divWt, divPr,divhr,divDvy );
  
       document.querySelector(".Container-prod1").append(div)
   });
   
  
   bonelessData.map(function(item){
       var div = document.createElement("div");
  
       var megaimage = document.createElement("img");
       megaimage.setAttribute("src", item.imageUrl);
       megaimage.setAttribute("class" , "megaimg1")
  
       var megaName = document.createElement("p");
       megaName.textContent = item.name;
       megaName.setAttribute("class", "megaName1")
  
       var megapara = document.createElement("p");
       megapara.textContent = item.smallpara;
       megapara.setAttribute("class", "megapara1")
  
       var divWt = document.createElement("div");
       divWt.setAttribute("class" , "Megaflex1")
       
       var mp1 = document.createElement("p");
       mp1.textContent = item.netWt;
       var mp2 = document.createElement("p");
       mp2.textContent = item.gross;
       divWt.append(mp1, mp2);
  
       var divPr = document.createElement("div");
       
       var divPrinside = document.createElement("div");
       divPrinside.setAttribute("class" , "Megaflex2")
       
       var mp3 = document.createElement("p");
       mp3.textContent = item.strikedOffPrice;
       mp3.setAttribute("class" , "mp3")
       var mp4 = document.createElement("p");
       mp4.textContent = `MRP: ₹${item.price}`;
       mp4.setAttribute("class" , "mp4")
  
       var megabutton = document.createElement("button");
       megabutton.textContent = "ADD TO CART";
  
       megabutton.addEventListener("click", function(){
             addTocart(item);
         });
  
       megabutton.setAttribute("class" , "megabutton")
  
       divPrinside.append(mp4 ,megabutton );
  
       divPr.append(divPrinside)
  
       divhr = document.createElement("hr")
       divhr.setAttribute("class" , "Megadivhr")
  
       var divDvy = document.createElement("div");
  
       var divDinside = document.createElement("div");
       divDinside.setAttribute("class" , "Megaflex3")
  
       var megaicon = document.createElement("img");
       megaicon.setAttribute("src", "https://www.licious.in/img/default/express_delivery.svg");
  
       var mp5 = document.createElement("p");
       mp5.textContent = "Tommorrow 7AM-10AM";
  
       divDinside.append(megaicon, mp5)
       divDvy.append(divDinside)
  
       megaimage.onclick = function () {
         location.href = item.link;
         };
  
       div.append(megaimage , megaName, megapara, divWt, divPr,divhr,divDvy );
  
       document.querySelector(".Container-prod2").append(div)
   });
  
  
   breakfastData.map(function(item){
       var div = document.createElement("div");
  
       var megaimage = document.createElement("img");
       megaimage.setAttribute("src", item.imageUrl);
       megaimage.setAttribute("class" , "megaimg1")
  
       var megaName = document.createElement("p");
       megaName.textContent = item.name;
       megaName.setAttribute("class", "megaName1")
  
       var megapara = document.createElement("p");
       megapara.textContent = item.smallpara;
       megapara.setAttribute("class", "megapara1")
  
       var divWt = document.createElement("div");
       divWt.setAttribute("class" , "Megaflex1")
       
       var mp1 = document.createElement("p");
       mp1.textContent = item.netWt;
       var mp2 = document.createElement("p");
       mp2.textContent = item.gross;
       divWt.append(mp1, mp2);
  
       var divPr = document.createElement("div");
       
       var divPrinside = document.createElement("div");
       divPrinside.setAttribute("class" , "Megaflex2")
       
       var mp3 = document.createElement("p");
       mp3.textContent = item.strikedOffPrice;
       mp3.setAttribute("class" , "mp3")
       var mp4 = document.createElement("p");
       mp4.textContent = `MRP: ₹${item.price}`;
       mp4.setAttribute("class" , "mp4")
  
       var megabutton = document.createElement("button");
       megabutton.textContent = "ADD TO CART";
  
       megabutton.addEventListener("click", function(){
             addTocart(item);
         });
  
       megabutton.setAttribute("class" , "megabutton")
  
       divPrinside.append(mp4 ,megabutton );
  
       divPr.append(divPrinside)
  
       divhr = document.createElement("hr")
       divhr.setAttribute("class" , "Megadivhr")
  
       var divDvy = document.createElement("div");
  
       var divDinside = document.createElement("div");
       divDinside.setAttribute("class" , "Megaflex3")
  
       var megaicon = document.createElement("img");
       megaicon.setAttribute("src", "https://www.licious.in/img/default/express_delivery.svg");
  
       var mp5 = document.createElement("p");
       mp5.textContent = "Tommorrow 7AM-10AM";
  
       divDinside.append(megaicon, mp5)
       divDvy.append(divDinside)
  
       megaimage.onclick = function () {
         location.href = item.link;
         };
  
       div.append(megaimage , megaName, megapara, divWt, divPr,divhr,divDvy );
  
       document.querySelector(".Container-prod3").append(div)
   });
  
  //id- home-container-Explore-by-category
  //id- sub-container-Explore-by-category
  // Explore by category
  var HomeCategoryData = [
    {
      title : "Mega Deals",
      image_url:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/42f51cd6-50ca-9a72-db46-1d09665563ab/original/cat-image.png?format=webp",
      link : "Megadeal.html",
    },
    {
      title : "Chicken",
      image_url:"https://dao54xqhg9jfa.cloudfront.net/Category/e883d949-b5c7-b95d-3652-3bc2c53b0816/original/1603646230.3323--2020-10-2522_47_10--738.jpeg?format=webp",
      link : "chicken.html",
    },
    {
      title : "Fish & Seafood",
      image_url:"https://dao54xqhg9jfa.cloudfront.net/Category/7948e90c-5b27-abdc-c33c-29fc3ca485ea/original/1603646285.4662--2020-10-2522_48_05--738.jpeg?format=webp",
      link : "fishSeafood.html",
    },
    {
      title : "Mutton",
      image_url:"https://dao54xqhg9jfa.cloudfront.net/Category/ae9f4c10-4fdb-633a-9688-de8a0693381f/original/1603646326.9208--2020-10-2522_48_46--738.jpeg?format=webp",
      link : "mutton.html",
    },
    {
      title : "Ready to Cook",
      image_url:"https://s3-ap-southeast-1.amazonaws.com/licious/cat/4/cat_tile_img/1609086575.0106--2020-12-2721:59:35--738?format=webp",
      link : "readytocook.html",
    },
    {
      title : "Spreads",
      image_url: "https://dao54xqhg9jfa.cloudfront.net/Category/4073bb7f-24ac-d482-06cf-1aa87d471940/original/1603646492.575--2020-10-2522_51_32--738.jpeg?format=webp",
      link : "spread.html",
    },
    {
      title : "Eggs",
      image_url:"https://dao54xqhg9jfa.cloudfront.net/Category/bdfca08e-566b-4439-0aac-9c100704cb0b/original/1603646527.5457--2020-10-2522_52_07--738.jpeg?format=webp",
      link : "Megadeal.html",
    },
    {
      title : "Cold Cuts",
      image_url:"https://dao54xqhg9jfa.cloudfront.net/Category/5b7cb503-fe25-430e-cd71-43b044b0273e/original/1603646565.5089--2020-10-2522_52_45--738.jpeg?format=webp",
      link : "chicken.html",
    },
    {
      title : "Combo",
      image_url:"https://dao54xqhg9jfa.cloudfront.net/Category/8209cc57-cc85-4e5d-ac6b-4d8f2f36c1ce/original/1604645369.2866--2020-11-0612_19_29--738.jpeg?format=webp",
      link : "fishSeafood.html",
    },
    {
      title : "Prawans",
      image_url:"https://dao54xqhg9jfa.cloudfront.net/Category/2105beee-e9a9-3efd-4912-2b9657f32d99/original/1604284739.3526--2020-11-0208_08_59--472.jpeg?format=webp",
      link : "mutton.html",
    },
    {
      title : "Kebabs & Tandoor",
      image_url:"https://s3-ap-southeast-1.amazonaws.com/licious/cat/39/cat_tile_img/1615189680.1921--2021-03-0813:18:00--472?format=webp",
      link : "readytocook.html",
    },
    {
      title : "Super Saver Packs",
      image_url:"https://s3-ap-southeast-1.amazonaws.com/licious/cat/31/cat_tile_img/1615563449.8908--2021-03-1221:07:29--472?format=webp",
      link : "spread.html",
    },
    ];
  
    HomeCategoryData.map(function(item){
    var div = document.createElement("div");
  
    var catImage = document.createElement("img");
    catImage.setAttribute("src",item.image_url)
    catImage.setAttribute("class","catImg")
  
    var catTitle = document.createElement("p");
    catTitle.textContent = item.title;
    catTitle.setAttribute("class","catTitles")
    catImage.onclick = function () {
         location.href = item.link;
         };
    div.append(catImage,catTitle);
    document.querySelector("#sub-container-Explore-by-category").append(div);
  });
  
  
  
  // Check out our blog
  
  var CheckBlogData = [
         {
             imageUrl: "https://www.licious.in/blog/wp-content/uploads/2022/01/shutterstock_1450591601.jpg",
             name: "How to Make Egg Puffs at Home - it’s Easy and Tastes Great!",
             link: "https://www.licious.in/blog/recipe/how-to-make-egg-puffs-bakery-style",
         },
         {
             imageUrl: "https://www.licious.in/blog/wp-content/uploads/2022/01/shutterstock_1244579434.jpg",
             name: "Learn how to Make Delicious Fish Curry in a Hurry!",
             link: "https://www.licious.in/blog/food-for-thought/tengra-fish",
         },
         {
             imageUrl: "https://www.licious.in/blog/wp-content/uploads/2022/01/shutterstock_738605269.jpg",
             name: "Celebrate Pie Day by Creating a Delicious Chicken Frankfurter",
             link: "https://www.licious.in/blog/recipe/pie-day-recipe",
         },
      ];
    
    CheckBlogData.map(function(item){
    var div = document.createElement("div");
    div.setAttribute("class","blogDiv")
  
    var blogImage = document.createElement("img");
    blogImage.setAttribute("src",item.imageUrl)
    blogImage.setAttribute("class","blogImgs")
  
    var blogTitle = document.createElement("p");
    blogTitle.textContent = item.name;
    blogTitle.setAttribute("class","blogTitles")
    
    div.onclick = function () {
         location.href = item.link;
    };
  
    div.append(blogImage,blogTitle);
    document.querySelector("#sub-Check-out-our-blog").append(div);
  });
  
  //Add to Cart All
  function addTocart(item){
  
  var cartData = {
      name : item.name,
      netWt : item.netWt,
      price : item.price,  
  };
  //    console.log(item.name, item.netWt, item.price);
  //    cartarr.push(item.name, item.netWt, item.price);
  
  cartarr.push(cartData)
  console.log(cartarr)
  localStorage.setItem("cartitems" , JSON.stringify(cartarr));
  
  }
  