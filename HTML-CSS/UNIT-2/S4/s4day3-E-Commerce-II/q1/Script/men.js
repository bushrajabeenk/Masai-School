    var mensData = JSON.parse(localStorage.getItem("mensData"));
    //console.log(mensData);

    var cartArr = JSON.parse(localStorage.getItem("CartData")) || [];

    displayData(mensData);

    function displayData(mensData)
    {
        // document.querySelector("#container").innerHTML = "";
        mensData.map(function(elem) 
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
                addToCart(elem);
            });

            mainDiv.append(img, name, innerDiv, cartbtn);

            document.querySelector("#container").append(mainDiv);            
        });

        function addToCart(elem)
        {
            //console.log(elem);
            cartArr.push(elem);
            elem.quant = 1;
            console.log(cartArr);
            localStorage.setItem("CartData", JSON.stringify(cartArr)); 
        }
    }

    function sortItems()
    {
        var typeOfSort = document.getElementById("sorter").value;
        console.log(typeOfSort);

        if(typeOfSort == "h2l")
        {
            mensData.sort(function(a, b)
            {
                return b.price - a.price;
            })
            displayData(mensData);
        } 
        else if(typeOfSort == "l2h")
        {
            mensData.sort((a, b) => a.price - b.price);
            displayData(mensData);
        }
    }

    function search ()
    {
        var searchText = document.getElementById("search").value;
        console.log(searchText);
        var filteredData = mensData.filter(function(item)
        {
            return item.name.includes(searchText);
        });
        console.log(filteredData);
        displayData(filteredData);
        document.getElementById("items").innerText = filteredData.length;
    }

    function filterItems()
    {
        var filter = document.getElementById("filter").value;
        var filteredData = mensData.filter(function(item)
        {
            return item.price > Number(filter);
        });
        console.log(filteredData);
        displayData(filteredData);
        document.getElementById("items").innerText = filteredData.length;
    }
    
    function filters()
    {
        var filter = document.getElementById("filter").value;
        var searchText = document.getElementById("search").value;
        var typeOfSort = document.getElementById("sorter").value;
    }
    
    function clearAllFilters()
    {
        mensData = JSON.parse(localStorage.getItem("mensData"));
        displayData(mensData);
        document.getElementById("items").innerText = mensData.length;
    }
    