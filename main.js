


// preloader start
document.addEventListener("DOMContentLoaded", () => {
    

window.addEventListener('unload', () => {
    setTimeout(() => {
        document.getElementsByClassName('preLoader')[0].style.display = "none";
        document.body.style.overflow = "scroll";
    }, 1000);
})

window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementsByClassName('preLoader')[0].style.display = "none";
        document.body.style.overflow = "scroll";
    }, 1000);
    // cartDropDown();
    login();
   imageSliders();
   showProduct();
   cartSystem();
   cartBtn();
   scrollefffect();
   




// preloader end 

// login form start
function login() {

    var loginButton = document.getElementsByClassName('login_btn')[0];
    var close_Login = document.getElementsByClassName('fa-xmark')[0];
    var wholeContainer = document.getElementsByClassName('whole-container')[0];
    var login_form = document.getElementsByClassName('login_parent')[0];
    var body = document.body;

    loginButton.addEventListener('click', () => {

        login_form.classList.toggle('login-show-hide');

        wholeContainer.classList.toggle('wblur');

        if (body.style.overflow == "scroll") {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "scroll";
        }
    })


    close_Login.addEventListener('click', () => {

        login_form.classList.remove('login-show-hide');


        wholeContainer.classList.remove('wblur');


        if (body.style.overflow == "scroll") {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "scroll";

        }
    })

    eyeOpen = document.getElementsByClassName('fa-solid')[4];
    eyeClose = document.getElementsByClassName('fa-solid')[4];
    passwordField = document.getElementById('pass');

    eyeOpen.addEventListener('mousedown', () => {
        passwordField.setAttribute('type', 'text');
        eyeOpen.className = "fa-solid fa-eye-slash";
    })

    eyeClose.addEventListener('mouseup', () => {
        passwordField.setAttribute('type', 'password');
        eyeClose.className = "fa-solid fa-eye";
    })



    var confirmBox = document.getElementsByClassName('confirm')[0];

    var yesButton = document.getElementsByClassName('btnLogin')[0].children[0];
     var noButton = document.getElementsByClassName('btnLogin')[0].children[1];

     var successMsg  = document.getElementsByClassName('suc-confirm')[0];

     var login_form = document.getElementsByClassName('login_parent')[0];

     var form =  document.forms['frm'];
     
     var login = document.getElementById('log');
     login.addEventListener('click', function (e) {
         e.preventDefault();
         
         var username = document.getElementById('user').value;
         var pattern = /^[a-zA-Z0-9\@\.]{2,40}[a-z]{2,8}$/;
         
         var password = document.getElementById('pass').value;
         var pattern1 = /^[a-zA-Z]{2,4}[0-9]{2,4}$/;
         var userError = document.getElementsByClassName('ealert')[0];


        if (!pattern.test(username)) {
            userError.innerHTML = "username is wrong";
            setTimeout(() => {
                userError.innerHTML = "";
            }, 500);

        } else if (!pattern1.test(password)) {
            userError.innerHTML = "password is wrong"
            setTimeout(() => {
                userError.innerHTML = "";
            }, 1000);
        } else {
            confirmBox.style.display = "block";
            yesButton.addEventListener('click', submit);
            noButton.addEventListener('click', cancel);
        }
    })

    function submit() {
        confirmBox.style.display = "none";
        successMsg.style.display = "block";
        
        form.reset();

        setTimeout(() => {
            successMsg.style.display = "none";

           
            login_form.classList.remove('login-show-hide');

            wholeContainer.classList.remove('wblur');


            if (body.style.overflow == "scroll") {
                body.style.overflow = "hidden";
            } else {
                body.style.overflow = "scroll";

            }

        }, 1000);
    }
    function cancel() {
        confirmBox.style.display = "none";
    }

}

// login form end

// slider start
function imageSliders()
{

    var imageSlides = document.getElementsByClassName('slide_img');
    var dotsParents = document.getElementsByClassName('circle-point')[0];

    for (var i = 0; i < imageSlides.length; i++) {
        
        dotsParents.insertAdjacentHTML("beforeend", "<div class='point'></div>");
        
    }
    var slideIndex = 1;
    
    
    
    function plus(n) {
        slideshow(slideIndex += n);
        
    }
    function minus(n) {
        slideshow(slideIndex -= n);
        
    }
    setInterval(slideshow, 1500);
    function slideshow(n) {
        
        var dots = document.getElementsByClassName('point');
        if (n > imageSlides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = imageSlides.length }
        var i = 0;
        for (i = 0; i < imageSlides.length; i++) {
            imageSlides[i].style.display = "none";
            imageSlides[i].className =imageSlides[i].className.replace(" fade","");
            dots[i].className = dots[i].className.replace(" active", " ");
        }
        imageSlides[slideIndex - 1].style.display = "block";
        imageSlides[slideIndex - 1].className += " fade";
        dots[slideIndex - 1].className += " active";
        slideIndex++;
        if (slideIndex > imageSlides.length) {
            slideIndex = 1;
        }
    }
    
    
} 
// slider end



// show product  start
function showProduct()
{

    var showProductBtn = document.getElementsByClassName('mobilecart-container')[0];
    showProductBtn.addEventListener('click', () => {
        showProductBtn.style.display = "none";
    })
    
    var tileButtons = document.getElementsByClassName('tile');
    
    for (var i = 0; i < tileButtons.length; i++) {
        var tButton = tileButtons[i];
        
        tButton.addEventListener('click', showProduct);
    }
    function showProduct(e) {
        
        var cart_btn = document.getElementsByClassName('cart_btn');
        var buy = document.getElementsByClassName('buy');
    for (var i = 0; i < cart_btn.length; i++) {
        if (e.target == cart_btn[i] || e.target == buy[i]) {
            
            return;
            
        }
    }
    
    
    var getTarget = e.target.parentElement.parentElement;
    var pimage = getTarget.getElementsByClassName('img1')[0].firstElementChild.getAttribute('src');
    var ptitle = getTarget.getElementsByClassName('p_name')[0].firstElementChild.innerHTML;
    var prate = getTarget.getElementsByClassName('price_rate')[0].firstElementChild.innerHTML;
    var pprice = getTarget.getElementsByClassName('price_rate')[0].lastElementChild.innerHTML;
    var pdesc = getTarget.getElementsByClassName('tile-description')[0].children[1].innerHTML;
    
    setProductDetails(pimage, ptitle, prate, pprice, pdesc);
}

function setProductDetails(pimg, ptl, prt, ppr, pds) {
    showProductBtn.style.display = "flex";
    var product_image = document.getElementsByClassName('pro-img')[0].setAttribute('src', pimg);
    var img_title = document.getElementsByClassName('pro-name')[0].innerHTML = ptl;
    var product_rate = document.getElementsByClassName('rates')[0].innerHTML = prt;
    var product_price = document.getElementsByClassName('mobile-price')[0].innerHTML = ppr;
    var product_desc = document.getElementsByClassName('description')[0].lastElementChild.innerHTML = pds;
    
}

}

// show product  end

// cart system start
function cartSystem()
{
        var cartButton = document.getElementsByClassName('cart')[0];
        var targetCart = document.getElementsByClassName('cart_containers')[0];
        
        cartButton.addEventListener('click', () => {
            targetCart.classList.toggle('cart-show-hide');
            if (document.body.style.overflow == "scroll") {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "scroll";
                
            }
        })
        

          var BuyBtn = document.getElementsByClassName('buy');
        for (var i = 0; i < BuyBtn.length; i++) {
            var button = BuyBtn[i];
            button.addEventListener('click', BuyProduct);
        }


        function BuyProduct(e) {
            e.preventDefault();
            
            var Target = e.target.parentElement.parentElement;
            var pimage = Target.getElementsByClassName('img1')[0].firstElementChild.getAttribute('src');
            var ptitle = Target.getElementsByClassName('p_name')[0].firstElementChild.innerHTML;
            var pprice = Target.getElementsByClassName('price_rate')[0].lastElementChild.innerHTML;
            var pdesc = Target.getElementsByClassName('tile-description')[0].children[1].innerHTML;

            localStorage.setItem('pimg', pimage);
            localStorage.setItem('ptitle', ptitle);
            localStorage.setItem('pprice', pprice);
            localStorage.setItem('pdesc', pdesc);

            window.location.href = "productsDetails.html";


        }


    }


    function cartBtn(){

    
        var btn = document.getElementsByClassName('cart_btn');
        for (var i = 0; i < btn.length; i++) {
            var button = btn[i];
            button.addEventListener('click', addToCart);
        }

        function addToCart(e) {
            e.preventDefault();
            var Target = e.target.parentElement.parentElement;
            var pimage = Target.getElementsByClassName('img1')[0].firstElementChild.getAttribute('src');
            var ptitle = Target.getElementsByClassName('p_name')[0].firstElementChild.innerHTML;
            var pprice = Target.getElementsByClassName('price_rate')[0].lastElementChild.innerHTML;
            var pdesc = Target.getElementsByClassName('tile-description')[0].children[1].innerHTML;

            saveCart(pimage, ptitle, pprice, pdesc);
        }


        function saveCart(pimage, ptitle, pprice, pdesc) {
            var celem = document.createElement('div');
            celem.setAttribute('class', 'cart_box');

            var table_row = document.createElement('tr');

            var titleTar = document.getElementsByClassName('ctitle');

            var amount = pprice.replace(/[₹ , : / -]/g, "");


            for (var i = 0; i < titleTar.length; i++) {

                if (titleTar[i].innerText === ptitle) {
                    alert("allready exists");
                    return;
                } else {

                }
            }

            var iHtml = `
                
                        <div class="cr cart-img">
                        <img src="${pimage}" alt="">
                    </div>
                    <div class="cr cart-name">
                        <h2 class='ctitle'>${ptitle}</h2><br>
                        <p>${pdesc}</p>
                        <div class="ratings">
                            <p>Rating:
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </p>
                            <h2 class='cart-amt'>${pprice}</h2>
                            <h2 class='final_total' style='display:none;'>${amount}</h2>
                        </div>
                    </div>
                    <div class="cr cart-quantity">
                        <button class="cr-btn minus">-</button>
                        <input type="text" class="inp" value='1'>
                        <button class="cr-btn plus">+</button>
                    </div>
                    <button class="cr cart-delete">
                       <i class="fa-solid fa-trash-can"></i>
                    </button>`;


            celem.innerHTML = iHtml;

            var table_data_html = `<td class='title_td'>${ptitle}</td><td class='counter_td'>1</td><td>${pprice}</td><td class='price_td'>${amount}</td>`;

            table_row.innerHTML = table_data_html;

            var product_billing = document.getElementsByClassName('product_billings')[0];

            product_billing.appendChild(table_row);

            var target = document.getElementsByClassName('cart_container')[0];
            target.appendChild(celem);


            var counter = document.getElementsByClassName('cart-counter')[0].firstElementChild.innerHTML = titleTar.length;
            var titles = document.getElementsByClassName('qitem')[0].innerHTML = titleTar.length;


            grandCalculation();
            removeButton();
            QuantityIncDec();
        }


        function grandCalculation() {
            var getCartAmt = document.getElementsByClassName('final_total');
            var counter_input_get = document.getElementsByClassName('inp');
            var final_total = 0;
            var total_quantity = 0;
            for (var i = 0; i < getCartAmt.length; i++) {
                final_total = final_total + Number(getCartAmt[i].innerText);
                total_quantity = total_quantity + Number(counter_input_get[i].value);
            }

            var total_qty_set = document.getElementsByClassName('qty')[0].innerText = total_quantity;

            var total_price = Number(document.getElementsByClassName('total_price')[0].innerHTML = final_total);

            var discount = Number(document.getElementsByClassName('d_iscount')[0].innerHTML) / 100;

            var discount_amt = Number(document.getElementsByClassName('d_amt')[0].innerHTML = (discount * total_price).toFixed(2));

            var tax = Number(document.getElementsByClassName('tax')[0].innerHTML) / 100;



            var tax_amt = Number(document.getElementsByClassName('tax_amt')[0].innerHTML = (discount_amt * tax).toFixed(2));

            var Delivery_charge = Number(document.getElementsByClassName('d_charge')[0].innerHTML);


            var final_amt = ((final_total - discount_amt) + (tax_amt + Delivery_charge)).toFixed(2);

            var grand_total = Number(document.getElementsByClassName('grand_total')[0].innerHTML = final_amt);
        }

        function removeButton() {
            var removeBtn = document.getElementsByClassName('cart-delete');
            var removeBtn1 = document.getElementsByClassName('fa-trash-can');



            for (var i = 0; i < removeBtn.length; i++) {

                var rbtn = removeBtn[i];
                var rbtn1 = removeBtn1[i];

                rbtn.addEventListener('click', removeCart);
                rbtn1.addEventListener('click', (e) => {
                    var btn = e.target.parentElement;
                    var cart_box = btn.parentElement;
                    var tar = btn.parentElement.parentElement;
                    tar.removeChild(cart_box);

                    var product_title = cart_box.getElementsByClassName('ctitle')[0].innerHTML;

                    var title_td = document.getElementsByClassName('title_td');
                    for (var i = 0; i < title_td.length; i++) {
                        if (title_td[i].innerHTML == product_title) {
                            var remove_td = document.getElementsByClassName('product_billings')[0];
                            var t_td = title_td[i].parentElement;
                            remove_td.removeChild(t_td);
                            
                        }
                    }

                    var titleTar = document.getElementsByClassName('ctitle');
                    document.getElementsByClassName('cart-counter')[0].firstElementChild.innerHTML = titleTar.length;
                    document.getElementsByClassName('qitem')[0].innerHTML = titleTar.length;
                });
            }


        }

        function removeCart(e) {
            var btn = e.target;
            var cart_box = btn.parentElement;
            var tar = btn.parentElement.parentElement;
            tar.removeChild(cart_box);

            var product_title = cart_box.getElementsByClassName('ctitle')[0].innerHTML;

            var title_td = document.getElementsByClassName('title_td');
            for (var i = 0; i < title_td.length; i++) {
                if (title_td[i].innerHTML == product_title) {
                    var remove_td = document.getElementsByClassName('product_billings')[0];
                    var t_td = title_td[i].parentElement;
                    remove_td.removeChild(t_td);
                }
            }

            var titleTar = document.getElementsByClassName('ctitle');
            document.getElementsByClassName('cart-counter')[0].firstElementChild.innerHTML = titleTar.length;
            document.getElementsByClassName('qitem')[0].innerHTML = titleTar.length;
            grandCalculation();
        }

        function QuantityIncDec() {
            var plus = document.getElementsByClassName('plus');
            var minus = document.getElementsByClassName('minus');
            var no;
            for (var i = 0; i < plus.length; i++) {
                plus[i].setAttribute('onclick', 'incrementFun(' + i + ')');
                minus[i].setAttribute('onclick', 'decrementFun(' + i + ')');
            }
           
        }
         incrementFun=function(no){
            var inputValue = document.getElementsByClassName('inp');
            var price = document.getElementsByClassName('cart-amt');
            var final_total = document.getElementsByClassName('final_total');
            var counter_td = document.getElementsByClassName('counter_td');
            var price_td = document.getElementsByClassName('price_td');

            for (var i = 0; i < inputValue.length; i++) {
                if (i == no) {
                    var inputGet = Number(inputValue[no].value);
                    var incementValue = inputGet;
                    incementValue++;
                    inputValue[i].value = incementValue;

                    counter_td[i].innerHTML = incementValue;

                    var priceInner = price[i].innerHTML;
                    var amount = Number(priceInner.replace(/[₹ , : / -]/g, ""));
                    final_total[i].innerHTML = incementValue * amount;
                    price_td[i].innerHTML = incementValue * amount;
                }


            }

            grandCalculation();

            Total_Quantity();
        }

        decrementFun =function(no) {
            var inputValue = document.getElementsByClassName('inp');

            var counter_td = document.getElementsByClassName('counter_td');

            var final_total = document.getElementsByClassName('final_total');
            var price = document.getElementsByClassName('cart-amt');

            var price_td = document.getElementsByClassName('price_td');

            for (var i = 0; i < inputValue.length; i++) {
                if (i == no) {
                    var inputGet = Number(inputValue[i].value);
                    var incementValue = inputGet;
                    incementValue--;
                    inputValue[i].value = incementValue;

                    counter_td[i].innerHTML = incementValue;

                    var priceInner = price[i].innerHTML;
                    var amount = Number(priceInner.replace(/[₹ , : / -]/g, ""));
                    final_total[i].innerHTML = incementValue * amount;
                    price_td[i].innerHTML = incementValue * amount;


                }
            }
            grandCalculation();

            Total_Quantity();
        }

        function Total_Quantity() {

            var cart_quantity = document.getElementsByClassName('inp');
            var final_total = document.getElementsByClassName('final_total');
            var result = document.getElementsByClassName('total_price')[0];

            var qty_sum = 0;
            var total_amt = 0;

            for (var i = 0; i < cart_quantity.length; i++) {

                qty_sum = qty_sum + Number(cart_quantity[i].value);

                total_amt = total_amt + Number(final_total[i].innerHTML);

            }

            document.getElementsByClassName('qty')[0].innerHTML = qty_sum;

            result.innerHTML = total_amt;

        }
    }

// cart system end

// scroll start
function scrollefffect(){


    var tiles_A = document.getElementsByClassName('tiles')[0].children;
    var tiles_B = document.getElementsByClassName('tiles')[1].children;
    var tiles_C = document.getElementsByClassName('tiles')[2].children;
    for (var i = 0; i < tiles_A.length; i++) {
        if (i == 0) {
            tiles_A[i].style.cssText = "transform:translateX(-100%);opacity:0;transition:.5s;";
            tiles_B[i].style.cssText = "transform:translateX(-100%);opacity:0;transition:.5s;";
            tiles_C[i].style.cssText = "transform:translateX(-100%);opacity:0;transition:.5s;";
        }
        if (i == 1 || i == 3) {

            tiles_A[i].style.cssText = "transform:translateY(-100%);opacity:0;transition:.5s;";
            tiles_B[i].style.cssText = "transform:translateY(-100%);opacity:0;transition:.5s;";
            tiles_C[i].style.cssText = "transform:translateY(-100%);opacity:0;transition:.5s;";
        }
        if (i == 4) {
            tiles_A[i].style.cssText = "transform:translateX(100%);opacity:0;transition:.5s;";
            tiles_B[i].style.cssText = "transform:translateX(100%);opacity:0;transition:.5s;";
            tiles_C[i].style.cssText = "transform:translateX(100%);opacity:0;transition:.5s;";
        }
        if (i == 2) {
            tiles_A[i].style.cssText = "transform:scale(0);opacity:0;transition:.5s;";
            tiles_B[i].style.cssText = "transform:scale(0);opacity:0;transition:.5s;";
            tiles_C[i].style.cssText = "transform:scale(0);opacity:0;transition:.5s;";
        }
    }

    var furniture1 = document.getElementsByClassName('sub-con4')[0].children;

    for (var i = 0; i < furniture1.length; i++) {
        furniture1[i].style.cssText = "transform:scale(0);opacity:0;transition:.5s;";
    }

    var appliance = document.getElementsByClassName('sub-con5')[0].children;
    for (var i = 0; i < appliance.length; i++) {
        if (i == 0) {
            appliance[i].style.cssText = "transform:translateX(-100%);opacity:0;transition:.5s;";
        }
        if (i == 1) {
            appliance[i].style.cssText = "transform:translateX(100%);opacity:0;transition:.5s;";
        }
    }
window.addEventListener('scroll',()=>{

    var header = document.getElementsByTagName('header');
        var windowHeight = window.pageYOffset;
        if (windowHeight > 0) {
            header[0].style.position = "fixed";
            header[0].style.zIndex = "1";

        }
        else {

            header[0].style.position = "relative";
        }


        var tiles_A = document.getElementsByClassName('tiles')[0].children;
        var tiles_B = document.getElementsByClassName('tiles')[1].children;
        var tiles_C = document.getElementsByClassName('tiles')[2].children;


        for (var a = 0; a < tiles_A.length; a++) {
            var wHeight = window.innerHeight;
            var tileA_height = tiles_A[a].getBoundingClientRect().top;
            var no_of_pixel = 150;
            if (a == 0) {
                if (tileA_height < wHeight - no_of_pixel) {

                    tiles_A[a].style.cssText = "transform:translateX(0%);opacity:1;transition:.5s;";
                } else {

                    // tiles_A[a].style.cssText="transform:translateX(-100%);opacity:0;transition:.5s;";

                }
            }
            if (a == 1 || a == 3) {
                if (tileA_height < wHeight - no_of_pixel) {

                    tiles_A[a].style.cssText = "transform:translateY(0%);opacity:1;transition:.5s;";
                } else {

                    // tiles_A[a].style.cssText="transform:translateY(-100%);opacity:0;transition:.5s;";

                }
            }
            if (a == 2) {
                if (tileA_height < wHeight - no_of_pixel) {

                    tiles_A[a].style.cssText = "transform:scale(1);opacity:1;transition:.5s;";
                } else {

                    // tiles_A[a].style.cssText="transform:scale(0);opacity:0;transition:.5s;";

                }
            }

            if (a == 4) {
                if (tileA_height < wHeight - no_of_pixel) {

                    tiles_A[a].style.cssText = "transform:translateX(0%);opacity:1;transition:.5s;";
                } else {

                    // tiles_A[a].style.cssText="transform:translateX(100%);opacity:0;transition:.5s;";

                }
            }


        }
        for (var a = 0; a < tiles_B.length; a++) {
            var wHeight = window.innerHeight;
            var tileB_height = tiles_B[a].getBoundingClientRect().top;
            var no_of_pixel = 150;
            if (a == 0) {
                if (tileB_height < wHeight - no_of_pixel) {

                    tiles_B[a].style.cssText = "transform:translateX(0%);opacity:1;transition:.5s;";
                } else {

                    // tiles_B[a].style.cssText="transform:translateX(-100%);opacity:0;transition:.5s;";

                }
            }
            if (a == 1 || a == 3) {
                if (tileB_height < wHeight - no_of_pixel) {

                    tiles_B[a].style.cssText = "transform:translateY(0%);opacity:1;transition:.5s;";
                } else {

                    // tiles_B[a].style.cssText="transform:translateY(-100%);opacity:0;transition:.5s;";

                }
            }
            if (a == 2) {
                if (tileB_height < wHeight - no_of_pixel) {

                    tiles_B[a].style.cssText = "transform:scale(1);opacity:1;transition:.5s;";
                } else {

                    // tiles_B[a].style.cssText="transform:scale(0);opacity:0;transition:.5s;";

                }
            }

            if (a == 4) {
                if (tileB_height < wHeight - no_of_pixel) {

                    tiles_B[a].style.cssText = "transform:translateX(0%);opacity:1;transition:.5s;";
                } else {

                    // tiles_B[a].style.cssText="transform:translateX(100%);opacity:0;transition:.5s;";

                }
            }


        }

        for (var a = 0; a < tiles_C.length; a++) {
            var wHeight = window.innerHeight;
            var tileC_height = tiles_C[a].getBoundingClientRect().top;
            var no_of_pixel = 150;
            if (a == 0) {
                if (tileC_height < wHeight - no_of_pixel) {

                    tiles_C[a].style.cssText = "transform:translateX(0%);opacity:1;transition:.5s;";
                } else {

                    // tiles_C[a].style.cssText="transform:translateX(-100%);opacity:0;transition:.5s;";

                }
            }
            if (a == 1 || a == 3) {
                if (tileC_height < wHeight - no_of_pixel) {

                    tiles_C[a].style.cssText = "transform:translateY(0%);opacity:1;transition:.5s;";
                } else {

                    // tiles_C[a].style.cssText="transform:translateY(-100%);opacity:0;transition:.5s;";

                }
            }
            if (a == 2) {
                if (tileC_height < wHeight - no_of_pixel) {

                    tiles_C[a].style.cssText = "transform:scale(1);opacity:1;transition:.5s;";
                } else {

                    // tiles_C[a].style.cssText="transform:scale(0);opacity:0;transition:.5s;";

                }
            }

            if (a == 4) {
                if (tileC_height < wHeight - no_of_pixel) {

                    tiles_C[a].style.cssText = "transform:translateX(0%);opacity:1;transition:.5s;";
                } else {

                    // tiles_C[a].style.cssText="transform:translateX(100%);opacity:0;transition:.5s;";

                }
            }


        }

        var furniture1 = document.getElementsByClassName('sub-con4')[0].children;


        for (var a = 0; a < furniture1.length; a++) {
            var wHeight = window.innerHeight;
            var furniture1_hight = furniture1[a].getBoundingClientRect().top;
            var no_of_pixel = 150;
            if (a == 0) {
                if (furniture1_hight < wHeight - no_of_pixel) {

                    furniture1[a].style.cssText = "transform:scale(1);opacity:1;transition:.5s;";
                } else {

                    // furniture1[a].style.cssText="transform:scale(0);opacity:0;transition:.5s;";

                }

            }
            if (a == 1) {
                if (furniture1_hight < wHeight - no_of_pixel) {

                    furniture1[a].style.cssText = "transform:scale(1);opacity:1;transition:.5s;";
                } else {

                    // furniture1[a].style.cssText="transform:scale(0);opacity:0;transition:.5s;";

                }

            }
            if (a == 2) {
                if (furniture1_hight < wHeight - no_of_pixel) {

                    furniture1[a].style.cssText = "transform:scale(1);opacity:1;transition:.5s;";
                } else {

                    // furniture1[a].style.cssText="transform:scale(0);opacity:0;transition:.5s;";

                }

            }
            if (a == 3) {
                if (furniture1_hight < wHeight - no_of_pixel) {

                    furniture1[a].style.cssText = "transform:scale(1);opacity:1;transition:.5s;";
                } else {

                    // furniture1[a].style.cssText="transform:scale(0);opacity:0;transition:.5s;";

                }

            }

        }

        var appliance = document.getElementsByClassName('sub-con5')[0].children;


        for (var a = 0; a < appliance.length; a++) {
            var wHeight = window.innerHeight;
            var appliance_hight = appliance[a].getBoundingClientRect().top;
            var no_of_pixel = 150;
            if (a == 0) {
                if (appliance_hight < wHeight - no_of_pixel) {

                    appliance[a].style.cssText = "transform:translateX(0%);opacity:1;transition:.5s;";
                } else {

                    // appliance[a].style.cssText="transform:translateX(-100%);opacity:0;transition:.5s;";

                }

            }
            if (a == 1) {
                if (appliance_hight < wHeight - no_of_pixel) {

                    appliance[a].style.cssText = "transform:translateX(0%);opacity:1;transition:.5s;";
                } else {

                    // appliance[a].style.cssText="transform:translateX(100%);opacity:0;transition:.5s;";

                }

            }

        }


    let h = document.documentElement;
    let stop = h.scrollTop || document.body.scrollTop;
    let sh = h.scrollHeight || document.body.scrollHeight;
    
    let percetange  = stop /(sh - h.clientHeight)*100;
    document.getElementsByClassName('scrollBars')[0].style.width = percetange+"%";
    
})
}
// scroll end

})
});