    var womensData = JSON.parse(localStorage.getItem("womensData"));
    //console.log(womensData);

    var cartArr = JSON.parse(localStorage.getItem("CartData")) || [];

    displayData(womensData);

    function displayData(womensData)
    {
        // document.querySelector("#container").innerHTML = "";
        womensData.map(function(elem)
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
            cartbtn.innerText = "Add To Cart";
            cartbtn.addEventListener("click", function()
            {
                addToCart(elem);
            });

            mainDiv.append(img, name, innerDiv, cartbtn);

            document.querySelector("#container").append(mainDiv);
        });

        function addToCart(elem)
        {
            console.log(elem);
            elem.quant = 1;
            cartArr.push(elem);
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
            womensData.sort(function(a, b)
            {
                return b.price - a.price;
            })
            displayData(womensData);
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
        var filteredData = womensData.filter(function(item)
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
    
    // to make all the different filters work together, call the above function in every click function    
    function filters()
    {
        var filter = document.getElementById("filter").value;
        var searchText = document.getElementById("search").value;
        var typeOfSort = document.getElementById("sorter").value;
    }
    
    function clearAllFilters()
    {
        womensData = JSON.parse(localStorage.getItem("womensData"));
        displayData(womensData);
        document.getElementById("items").innerText = womensData.length;
    }
    

        

