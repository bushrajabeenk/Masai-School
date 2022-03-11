//store the products array in localstorage as "products"

document.querySelector("#product_form").addEventListener("submit", displayData);

  function displayData(event) 
  {
    event.preventDefault();

    var nikeArray = JSON.parse(localStorage.getItem("products")) || [];

    var name = document.querySelector("#name").value;
    var price = document.querySelector("#price").value;
    var brand = document.querySelector("#brand").value;
    var type = document.querySelector("#type").value;

    function nikeProducts(n, p, b, t)
    {
      this.name = n;
      this.price = p;
      this.brand = b;
      this.type = t;
    }

    var nikeObj = new nikeProducts(name, price, brand, type);
    console.log(nikeObj);

    nikeArray.push(nikeObj);
    console.log(nikeArray);

    localStorage.setItem("products", JSON.stringify(nikeArray));
  }

