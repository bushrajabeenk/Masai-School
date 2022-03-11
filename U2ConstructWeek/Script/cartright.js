var covidData = JSON.parse(localStorage.getItem("covidData")) || [];

    var rightDiv = document.createElement("div");

        var orderSummary = document.createElement("div");
        orderSummary.setAttribute("id", "orderSummary");
        orderSummary.innerText = "Order Summary";

        var cartValue = document.createElement("div");
        cartValue.setAttribute("id", "cartValue");
        var total = covidData.reduce(function(acc, item, index, array){
            return acc + item.price;
            
        }, 0);
        cartValue.innerText = "Cart Value" + " " + total;
        console.log(total);

        var deliveryChrg = document.createElement("div");
        // deliveryChrg.setAttribute("id", "deliveryChrg");
        var chrg = 30;
        deliveryChrg.innerText = "Delivery Charge" + " " + chrg;

        var amount = document.createElement("div");
        //amount.innerText = total + chrg;
        amount.innerText = "Amount to be paid" + " " + Number(total + chrg);

    rightDiv.append(orderSummary, cartValue, deliveryChrg, amount);

    document.querySelector("#container").append(rightDiv); 



