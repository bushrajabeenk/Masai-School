    var mensData = JSON.parse(localStorage.getItem("mensData"));
    //console.log(mensData);

    var cartArr = JSON.parse(localStorage.getItem("CartData")) || [];

    function displayData(data)
    {
        // document.querySelector("#container").innerHTML = "";
        data.map(function (elem) 
        {
            var mainDiv = document.createElement("div");
            mainDiv.setAttribute("class", "mainDiv");

            var img = document.createElement("img");
            img.setAttribute("src", elem.image_url);
            img.setAttribute("id", "img");

            var name = document.createElement("p");
            name.innerText = elem.name;

            var innerDiv = document.createElement("div");
            innerDiv.setAttribute("class", "innerDiv");

            var price = document.createElement("p");
            price.innerText = elem.price;

            var strikedOffPrice = document.createElement("p");
            strikedOffPrice.innerText = elem.strikedoffprice;
            strikedOffPrice.style.textDecoration = "line-through";

            innerDiv.append(price, strikedOffPrice);

            var cartbtn = document.createElement("button");
            cartbtn.innerText = "Add to cart";
            cartbtn.addEventListener("click", function() 
            {
                console.log(elem);
                elem.quant = 1;
                cartArr.push(elem);
                console.log(cartArr);
                localStorage.setItem("CartData", JSON.stringify(cartArr)); 
            });

            mainDiv.append(img, name, innerDiv, cartbtn);

            document.querySelector("#container").append(mainDiv);            
        });

    }

    // function addToCart(elem)
    //     {
    //       console.log(elem);
    //       cartArr.push(elem);
    //       elem.quant = 1;
    //       console.log(cartArr);
    //       localStorage.setItem("CartItems", JSON.stringify(cartArr)); 
    //     }

    displayData(mensData);