/*
var addStrings = function(num1, num2) {
    let result = (+num1) + (+num2);
    return result.toString();
};

console.log(addStrings("11","123"));
console.log(addStrings("456","77"));
console.log(addStrings("0","0"));
*/

function search() {
    const seachbox = document.querySelector(".search-item").value.toUpperCase();
    const product = document.querySelectorAll(".product");

    for (let i = 0; i < product.length; i++) {
        let match = product[i].getElementsByTagName("h2")[0];
        console.log(product[i].getElementsByTagName("h2")[0]);

        if (match) {
            let value = match.textContent || match.innerHTML;

            if (value.toUpperCase().indexOf(seachbox) > -1) {
                product[i].style.display = "";
            }
            else {
                product[i].style.display = "none";
            }
        }
    }
}

// function search() {
//     let searchbox = document.querySelector(".search-item").value.toUpperCase();
//     let product = document.querySelectorAll(".product");
//     for (let i = 0; i < product.length; i++) {
//         let match = product[i].getElementsByTagName("h2")[0];

//         if (match) {
//             let textvalue = match.textContent || match.innerHTML;

//             if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
//                 product[i].style.display = "";
//             }
//             else {
//                 product[i].style.display = "none";
//             }
//         }

//     }
// }