var womensData = JSON.parse(localStorage.getItem("womensData"));
//console.log(womensData);

function displayData(data)
{
    // document.querySelector("#container").innerHTML = "";
    data.map(function(elem)
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

        mainDiv.append(img, name, innerDiv);

        document.querySelector("#container").append(mainDiv);
    });

}

displayData(womensData);

    

