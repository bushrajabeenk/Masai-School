    
    var nikeArray = JSON.parse(localStorage.getItem("products")) || [];
    
    document.querySelector("#menu>#add_product").addEventListener("click", addData);

    function addData(e) 
    {
        e.preventDefault();

        dispData(nikeArray);
        function dispData(nikeArray)
        {       
            document.querySelector("#products_data").innerHTML = null;

            nikeArray.map(function(item, index){

                var boxDiv = document.createElement("div");
                boxDiv.setAttribute("id", "boxDiv");

                var p1 = document.createElement("p");
                p1.innerText = item.name;

                var priceimage = document.createElement("div");
                priceimage.setAttribute("id", "priceimage");

                    var p2 = document.createElement("p");
                    p2.innerText = item.price;

                    var image = document.createElement("img");
                    image.src = item.image;
                    image.id = "imgp";

                priceimage.append(p2, image);

                var p4 = document.createElement("p");
                p4.innerText = item.type;

                var p5 = document.createElement("button");
                p5.setAttribute("id", "btn");
                p5.innerText = "Remove";
                p5.addEventListener("click", function(){
                    removeItem(item, index);
                });

                boxDiv.append(p1, p2, image, p4, p5);

                document.querySelector("#products_data").append(boxDiv);
            })
        }

        function removeItem(item, index){
            console.log(item);
            nikeArray.splice(index, 1);
            console.log(nikeArray)
            localStorage.setItem("products", JSON.stringify(nikeArray));
            dispData(nikeArray);
        }
        
    }

    
    