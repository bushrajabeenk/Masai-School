        
        var stuArr = [
            // the key names here and the key names in the stuObj should be same
            {name: "Trevor", sci: 70, math: 85, eng: 95},
            {name: "Tim", sci: 60, math: 90, eng: 85},
            {name: "Elena", sci: 75, math: 80, eng: 85}
        ];



        // creating dynamic data using a form, where we can give custom values
        document
        .querySelector('#myForm')
        .addEventListener('submit', genReportCard);

        displayData(stuArr);

        function genReportCard(event)
        {
            event.preventDefault();

            var name = document.querySelector("#name").value;
            var science = document.querySelector("#science").value;
            var maths = document.querySelector("#maths").value;
            var english = document.querySelector("#english").value;
            
            var stuObj = {
                name: name,
                sci: science,
                math: maths,
                eng: english,
            };

            stuArr.push(stuObj);
            console.log(stuArr);
            displayData(stuArr);
        }

        function displayData(stuArr)
        {
            document.querySelector("tbody").innerHTML = "";

            stuArr.map(function(item, index, array){

            var row = document.createElement("tr");

            var col1 = document.createElement("td");
            col1.innerText = item.name;

            var col2 = document.createElement("td");
            col2.innerText = item.sci;

            var col3 = document.createElement("td");
            col3.innerText = item.math;

            var col4 = document.createElement("td");
            col4.innerText = item.eng;

            var total = item.sci + item.math + item.eng;
            var col5 = document.createElement("td");
            col5.innerText = total;

            row.append(col1, col2, col3, col4, col5);

            document.querySelector("tbody").append(row);

            });
        }
