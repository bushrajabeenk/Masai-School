  
  var cartArr = JSON.parse(localStorage.getItem("CartData")) || [];
  //console.log(cartArr);

  showTotal();
  displayData(cartArr);
  

    function displayData(cartArr)
    {
      // document.querySelector("#container").innerHTML = "";
      cartArr.map(function (elem, index) {
        
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
        price.innerText = elem.price + "-" + elem.quant;
        var strikedOffPrice = document.createElement("p");
        strikedOffPrice.innerText = elem.strikedoffprice;
        strikedOffPrice.style.textDecoration = "line-through";

        innerDiv.append(price, strikedOffPrice);

        var btn1 = document.createElement("button");
        btn1.innerText = "+";
        btn1.addEventListener("click", function ()
        {
          incQuant(index);
        });

        var btn2 = document.createElement("button");
        btn2.innerText = "-";
        btn2.addEventListener("click", function ()
        {
          decQuant(index);
        });

        mainDiv.append(img, name, innerDiv, btn1, btn2);
        document.querySelector("#container").append(mainDiv);
      });
    }

    function showTotal()
    {
      var total = cartArr.reduce(function (acc, elem) {

        // everytime quant is increased/decreased, the total changes accordingly
        return acc + (elem.price * elem.quant);

      }, 0);
      console.log(total);
      document.getElementById("#totalDisplay").innerText = total;
    }

    documen.querySelector("#promo").addEventListener("click", function()
    {
        var code = document.querySelector("input").value;
        if(code == "masai30")
        {
            var total = document.getElementById("#totalDisplay").innerText;
            document.getElementById("#totalDisplay").innerText = total * 0.7;
        }
    })
    



    function incQuant(index)
    {
      // Get the index of the item for 
      // which you need to increase the count
      //console.log(index);

      // update the cartArr by increasing the quantity
      cartArr[index].quant++;
      //console.log(cartArr);
      
      // update the localStorage
      localStorage.setItem("CartData", JSON.stringify(cartArr)); 

      //show the updated data
      displayData(cartArr);

      // calculate the updated total
      // calling the showTotal again as we want to display the total value after increasing the quantity
      showTotal();
    }

    function decQuant(index)
    {
      cartArr[index].quant--;
      localStorage.setItem("CartData", JSON.stringify(cartArr)); 
      displayData(cartArr);
      showTotal();
    }