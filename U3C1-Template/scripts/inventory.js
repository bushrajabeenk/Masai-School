    
    document.querySelector("#add_product").addEventListener("click", addData);


    function addData() 
    {
        var nikeArray = JSON.parse(localStorage.getItem("products")) || [];

        dispData(nikeArray);
        function dispData(nikeArray)
        {
            document.querySelector("#products_data").innerHTML = "";

            nikeArray.map(function(item, index){

                var boxDiv = document.createElement("div");
                boxDiv.setAttribute("id", "boxDiv");

                var p1 = document.createElement("p");
                p1.innerText = item.name;

                var pricebrand = document.createElement("div");
                pricebrand.setAttribute("id", "pricebrand");

                    var p2 = document.createElement("p");
                    p2.innerText = item.price;

                    var p3 = document.createElement("p");
                    p3.innerText = item.brand;

                pricebrand.append(p2, p3);

                var p4 = document.createElement("p");
                p4.innerText = item.type;

                var p5 = document.createElement("button");
                p5.setAttribute("id", "btn");
                p5.innerText = "Remove";
                p5.addEventListener("click", function(){
                    removeItem(item, index);
                });

                boxDiv.append(p1, pricebrand, p4, p5);

                document.querySelector("#products_data").append(boxDiv);
            })
        }

        function removeItem(item, index){
            nikeArray.splice(index, 1);
            localStorage.setItem("products", JSON.stringify(nikeArray));
            dispData(nikeArray);
        }
    }

   

    