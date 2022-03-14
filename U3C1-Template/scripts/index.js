//store the products array in localstorage as "products"

document.querySelector("#product_form").addEventListener("submit", displayData);

var nikeArray = JSON.parse(localStorage.getItem("products")) || [];

  function displayData(event) 
  {
    event.preventDefault();

    var prodName = document.querySelector("#name").value;
    var prodPrice = document.querySelector("#price").value;
    var prodImg = document.querySelector("#image").value;
    var prodType = document.querySelector("#type").value;

    function nikeProducts(n, p, i, t)
    {
      this.name = n;
      this.price = p;
      this.image = i;
      this.type = t;
    }

    var nikeObj = new nikeProducts(prodName, prodPrice, prodImg, prodType);
    console.log(nikeObj);

    nikeArray.push(nikeObj);
    console.log(nikeArray);

    localStorage.setItem("products", JSON.stringify(nikeArray));
  }

