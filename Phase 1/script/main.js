



// Button referencing
var button_r = document.getElementById("r");
var button_p = document.getElementById("p");
var button_bl = document.getElementById("bl");
var button_el = document.getElementById("el");
var button_y = document.getElementById("y");
var button_b = document.getElementById("b");
var button_db = document.getElementById("db");
var button_be = document.getElementById("be");
var button_aq = document.getElementById("aq");
var button_lg = document.getElementById("lg");
var button_w = document.getElementById("w").disabled = true;

// row 2
var button_pink = document.getElementById("pink");
var button_br = document.getElementById("br");
var button_gr = document.getElementById("gr");
var button_dg = document.getElementById("dg");
var button_kh = document.getElementById("kh");
var button_lb = document.getElementById("lb");
var button_gry = document.getElementById("gry");


// Color Text
var color = document.getElementById("color");
// Changes the Color Text to the name representing a button color
button_r.onclick = function () {
    color.innerHTML = button_r.style.backgroundColor;
};

button_p.onclick = function () {
    color.innerHTML = button_p.style.backgroundColor;
};

button_bl.onclick = function () {
    color.innerHTML = button_bl.style.backgroundColor;
};

button_el.onclick = function () {
    color.innerHTML = button_el.style.backgroundColor;
};

button_y.onclick = function () {
    color.innerHTML = button_y.style.backgroundColor;
};

button_b.onclick = function () {
    color.innerHTML = button_b.style.backgroundColor;
};
button_db.onclick = function () {
    color.innerHTML = button_db.style.backgroundColor;
};
button_be.onclick = function () {
    color.innerHTML = button_be.style.backgroundColor;
};
button_aq.onclick = function () {
    color.innerHTML = button_aq.style.backgroundColor;
};
button_lg.onclick = function () {
    color.innerHTML = button_lg.style.backgroundColor;
};

// row 2
button_pink.onclick = function () {
    color.innerHTML = button_pink.style.backgroundColor;
};
button_br.onclick = function () {
    color.innerHTML = button_br.style.backgroundColor;
};
button_gr.onclick = function () {
    color.innerHTML = button_gr.style.backgroundColor;
};
button_dg.onclick = function () {
    color.innerHTML = button_dg.style.backgroundColor;
};
button_kh.onclick = function () {
    color.innerHTML = button_kh.style.backgroundColor;
};
button_lb.onclick = function () {
    color.innerHTML = button_lb.style.backgroundColor;
};
button_gry.onclick = function () {
    color.innerHTML = button_gry.style.backgroundColor;
};

// Add to Cart Functionality
var cart = document.getElementById("cart");


    
var cancel = document.getElementById("cancel");
var agree = document.getElementById("agree");
var colour = document.getElementById("colour");
var add_c = document.getElementById("add_c");

var zero = document.getElementById("zero").disabled = true;

var amount = document.getElementById("amount");
var counter = 5;
var newButton;

var elements = document.getElementById("elements");
var plus = document.getElementById("plus");
var quantity = document.getElementById("quantity");
var minus = document.getElementById("minus");

plus.onclick = function () {
    let q = quantity.innerHTML;
    quantity.innerHTML = ++q;
};

minus.onclick = function() {
    let q = quantity.innerHTML;
    if (q > 0){quantity.innerHTML = --q;}
};


cart.onclick = function () {
    if (color.innerHTML.length > 0){
         document.querySelector(".bg-modal").style.display = "flex";
        colour.innerHTML = color.innerHTML;
    }
};

cancel.onclick = function () {
    document.querySelector(".bg-modal").style.display = "none";
    quantity.innerHTML = 0;
};

agree.onclick = function () {
    add_c.innerHTML = "Checkout Now";
    addElement(color.innerHTML, quantity.innerHTML);
    amount.innerHTML = quantity.innerHTML;
    document.querySelector(".bg-modal").style.display = "none";
};



function addElement(cl, count) {
    let i = 0;
    while (i < count) {
        newButton = document.createElement("button");
        newButton.setAttribute("style", "background-color: " + color.innerHTML + "; border: none");
        elements.appendChild(newButton);
        i++;
    }
}






