// Search box 
let div1 = create("div");
div1.innerHTML = `
<div class="container-fluid ">
    
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-dark  p-4 ">
        <div class="container-fluid justify-content-center p">
          <a class="navbar-brand bg-warning rounded-3 p-2 fw-bold " href="#" style="font-family:'Dancing Script', cursive; ;">Beauty & Cosmetics</a>
          
            <div class="d-flex w-50">
              <input class="form-control me-2 "  id="find" type="text" placeholder="eg..eyeliner,lipstick" aria-label="Search">
              <button class=" btn btn-success w-50" type="submit" onclick="Search()">Find</button>
              
            </div>
          </div>
        </div>
      </nav>
</div>

`
document.body.append(div1);

// Create Element Function
function create (element,cname){
    let divTag  = document.createElement(element);
    divTag.className = cname;
    return divTag;

}
// Element
let containerTag = create("div","container-fluid tag");

let rowTag = create("div","row");
// Element append
document.body.append(containerTag);

containerTag.append(rowTag);

// fetch 
async function Search() {
    let find = document.getElementById("find").value;
    let list1 = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=${find}`);
    let list2  = await list1.json();

// for Each Card create
    list2.forEach(productList => {

        let colTag = create("div","col ");
        colTag.innerHTML  =`
        <div class="card m-3 p-1 z " style="width: 18rem;">
        <img height="200" src="${productList.image_link}" class="card-img-top" alt="...">
        <div class="card-body  text-center">
          
          <h5 class="card-title">Brand: ${productList.brand}</h5>
          <p class="fw-bold">Name: ${productList.name}</p>
          <p class="fw-bold">Price: $ ${productList.price}</p>
          <a href="${productList.product_link}" target=_blank><button class = "btn btn-success"> Buy Now</button></a>
          <a href="${productList.website_link}" target=_blank><button class = "btn btn-danger"> Know More</button></a>
        </div>
      </div>
        
        `
        // append
        rowTag.append(colTag);
    });
}
