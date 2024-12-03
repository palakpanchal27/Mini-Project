let mainPage = document.querySelector(".mainPage");
let blogContent = document.querySelector(".blogContent");
let cardMen = document.querySelector(".cardMen");
let cardgirl = document.querySelector(".cardgirl");
let aboutPage = document.querySelector(".about");
let contactus = document.querySelector(".contact");




function home() {
   mainPage.style.display = "flex";
   cardMen.style.display = "block";
   cardgirl.style.display = "block";
   blogContent.style.display = "block"
   contactus.style.display="none"
   
   document.getElementById("blog").style.color = "black";
   document.getElementById("shop").style.color = "black";
   document.getElementById("home").style.color = "rgb(1, 190, 190)";
   document.getElementById("about").style.color = "black";
   document.getElementById("contact").style.color="black";





}


function shop() {
   cardMen.style.display = "block";
   cardgirl.style.display = "block";
   mainPage.style.display = "none"
   blogContent.style.display = "none";
   aboutPage.style.display = "none";
   contactus.style.display="none"
   
   document.getElementById("blog").style.color = "black";
   document.getElementById("about").style.color = "black";
   document.getElementById("shop").style.color = "rgb(1, 190, 190)"
   document.getElementById("home").style.color = "black"
   document.getElementById("contact").style.color="black";


}


function blog() {

   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "block"
   aboutPage.style.display = "none";
   contactus.style.display="none"

   document.getElementById("blog").style.color = "rgb(1, 190, 190)";
   document.getElementById("home").style.color = "black"
   document.getElementById("shop").style.color = "black"
   document.getElementById("about").style.color = "black";
   document.getElementById("contact").style.color="black";





}


function about() {
   aboutPage.style.display = "block";
   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none";
   contactus.style.display="none";

   document.getElementById("blog").style.color = "black";
   document.getElementById("home").style.color = "black"
   document.getElementById("shop").style.color = "black";
   document.getElementById("about").style.color = "rgb(1, 190, 190)"
   document.getElementById("contact").style.color="black";


}


function contact() {
   contactus.style.display="block";
   aboutPage.style.display = "none";
   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none"
   document.getElementById("blog").style.color = "black";
   document.getElementById("home").style.color = "black";
   document.getElementById("shop").style.color = "black";
   document.getElementById("about").style.color = "black";
   document.getElementById("contact").style.color="rgb(1, 190, 190)"

} 

function showCard(img){
   let newImg = document.getElementById("cartImg");
   newImg.src=img.src;
   document.querySelector(".fullPage").style.display="flex";
   contactus.style.display="none";
   aboutPage.style.display = "none";
   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none"



}

// Add to Cart

function addItem(){
   document.querySelector(".addCart").style.display="block";
   contactus.style.display="none";
   aboutPage.style.display = "none";
   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none"

 



}
 
const form = document.getElementById("signUpForm");
const emailInput = document.getElementById("email");

form.addEventListener("handleSignUp", (event) => {
    // Prevent form submission if email is invalid
    if (!emailInput.checkValidity()) {
        // Focus the input and display the native validation message
        emailInput.reportValidity();
        event.preventDefault();
    } else {
        // If valid, show success message
        alert("Sign Up Successful!");
    }
});


 
function addToCart(){
   alert("Added To Cart");
   location.reload();
}






function buyNow() {
   // Hide other sections
   document.querySelector('.fullPage').style.display = 'none';
   
   // Show the payment page
   const paymentPage = document.getElementById('paymentPage');
   paymentPage.style.display = 'block';
}
function buyNow() {
   console.log('Buy Now clicked');
   document.querySelector('.fullPage').style.display = 'none';
   document.getElementById('paymentPage').style.display = 'block';
}


const productInfoDiv = document.getElementById('selectedProductInfo');
    productInfoDiv.innerHTML = `
        <h2>Selected Product:</h2>
        <img src="${selectedProduct.image}" alt="Product Image" width="200">
        <p><strong>Product Name:</strong> ${selectedProduct.name}</p>
        <p><strong>Price:</strong> ${selectedProduct.price}</p>
    `;


// Payment completion function (you can modify this to handle the form submission)
function completePayment(event) {
    event.preventDefault();  // Prevent the form from submitting

    // Example of processing payment details
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const card = document.getElementById('card').value;

    // Simulate a payment process (this would typically involve server-side processing)
    alert(`Payment successful! \nName: ${name} \nEmail: ${email} \nAddress: ${address} \nCard: ${card}`);
    window.location.href = "index.html";
    // Optionally, you can redirect to a success page or show a confirmation message.
}



let selectedSize = null;

function selectSize(size) {
    // Remove the 'selected' class from all buttons
    const buttons = document.querySelectorAll('#sizes button');
    buttons.forEach((button) => button.classList.remove('selected'));

    // Add the 'selected' class to the clicked button
    const selectedButton = Array.from(buttons).find((btn) => btn.textContent === size);
    selectedButton.classList.add('selected');

    // Update the selected size
    selectedSize = size;

    // Display the selected size
    console.log(`Selected Size: ${selectedSize}`);
    alert(`You selected size: ${selectedSize}`);
}
