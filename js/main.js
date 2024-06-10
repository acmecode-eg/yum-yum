// loading icon
var loading = document.querySelector(".loading") ;


var Data ;
var responseData ;
var currentMeal = `` ;

async function getData () {
   Data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s${currentMeal}`) ;
   responseData =  await Data.json() ;
   loading.classList.add("d-none") ;
   displayData() ;
}

// show some meals
getData() ;

var searchByName = document.querySelector("#searchByName") ;
// var searchByFirstLetter = document.querySelector("#searchByFirstLetter") ;
searchByName.addEventListener("keyup",function(){
    currentMeal = `=${searchByName.value}` ;
    meals.innerHTML = "" ;
    getData() ;
})

var meals = document.querySelector("#meals") ;
function displayData() {
    var content ;
    for (var i = 0 ; i<responseData.meals.length ; i++) {
     content =  ` <div onclick="getInstructions(${responseData.meals[i].idMeal})" class="col-md-3 layer shadow" id="layer">
        <div class="post rounded-2">
            <img class="w-100 rounded-2" src="${responseData.meals[i].strMealThumb}" alt="${responseData.meals[i].strMeal}">
            <div class="post-info rounded-2">
                <h2 class="position-relative top-50 translate-middle-y ms-3">${responseData.meals[i].strMeal}</h2>
            </div>
        </div>
    </div>` ;
    meals.innerHTML += content ;
    }   
}

var instructions = document.querySelector("#instructions") ;
function showInstructions () {
    meals.classList.add("d-none") ;
    ContactUs.classList.add("d-none") ;
    instructions.classList.remove("d-none") ;
    searchPlace.classList.add("d-none") ;

    instructions.innerHTML =  `
    <div class="col-md-4 text-center text-white">
        <div class="mealImage">
            <img class="w-100 rounded-2" src="${responseInstructionsData.meals[0].strMealThumb}" alt="${responseInstructionsData.meals[0].strMeal}">
        </div>
        <h1>${responseInstructionsData.meals[0].strMeal}</h1>
    </div>

    <div class="col-md-8 text-white">
        <div class="mealInstructions mb-3">
            <h2> <i class="fa-solid fa-utensils"></i> Instructions</h2>
            <p>${responseInstructionsData.meals[0].strInstructions} </p>
            <p><b>Area : </b>${responseInstructionsData.meals[0].strArea} </p> 
            <p><b>Category : </b>${responseInstructionsData.meals[0].strCategory}</p> 
            <h3>Recipes :</h3>
            <ul class="list-unstyled d-flex flex-wrap">
            ${showRecipe()}
            </ul>
            <h3>Tags :</h3>
            <ul class="list-unstyled d-flex flex-wrap">
            ${showTags()}
            </ul>
            <a class="btn btn-success text-white" target="_blank" href="${responseInstructionsData.meals[0].strSource}">source</a>
            <a class="btn btn-danger text-white" target="_blank" href="${responseInstructionsData.meals[0].strYoutube}">youtube</a>
            <button type="button" onclick="window.print()" class="btn btn-info">Print</button>
        </div>
    </div>`
    
}

function showRecipe() {
    var content="" ;
        if(responseInstructionsData.meals[0].strMeasure1 !="" && responseInstructionsData.meals[0].strMeasure1 !=null  && responseInstructionsData.meals[0].strIngredient1 !="" && responseInstructionsData.meals[0].strIngredient1 !=null) {
            content+=` <li class="my-3 mx-1 p-1 bg-primary rounded" > ${responseInstructionsData.meals[0].strMeasure1} ${responseInstructionsData.meals[0].strIngredient1}</li>` ;
        }
        if(responseInstructionsData.meals[0].strMeasure2 !="" && responseInstructionsData.meals[0].strMeasure1 !=null && responseInstructionsData.meals[0].strIngredient2 !="" && responseInstructionsData.meals[0].strIngredient1 !=null) {
            content+=` <li class="my-3 mx-1 p-1 bg-primary rounded" > ${responseInstructionsData.meals[0].strMeasure2} ${responseInstructionsData.meals[0].strIngredient2}</li>` ;
        }
        if(responseInstructionsData.meals[0].strMeasure3 !="" && responseInstructionsData.meals[0].strMeasure1 !=null && responseInstructionsData.meals[0].strIngredient3 !="" && responseInstructionsData.meals[0].strIngredient1 !=null) {
            content+=` <li class="my-3 mx-1 p-1 bg-primary rounded" > ${responseInstructionsData.meals[0].strMeasure3} ${responseInstructionsData.meals[0].strIngredient3}</li>` ;
        }
        if(responseInstructionsData.meals[0].strMeasure4 !="" && responseInstructionsData.meals[0].strMeasure1 !=null && responseInstructionsData.meals[0].strIngredient4 !="" && responseInstructionsData.meals[0].strIngredient1 !=null) {
            content+=` <li class="my-3 mx-1 p-1 bg-primary rounded" > ${responseInstructionsData.meals[0].strMeasure4} ${responseInstructionsData.meals[0].strIngredient4}</li>` ;
        }
        if(responseInstructionsData.meals[0].strMeasure5 !="" && responseInstructionsData.meals[0].strMeasure1 !=null && responseInstructionsData.meals[0].strIngredient5 !="" && responseInstructionsData.meals[0].strIngredient1 !=null) {
            content+=` <li class="my-3 mx-1 p-1 bg-primary rounded" > ${responseInstructionsData.meals[0].strMeasure5} ${responseInstructionsData.meals[0].strIngredient5}</li>` ;
        }
        if(responseInstructionsData.meals[0].strMeasure6 !="" && responseInstructionsData.meals[0].strMeasure1 !=null && responseInstructionsData.meals[0].strIngredient6 !="" && responseInstructionsData.meals[0].strIngredient1 !=null) {
            content+=` <li class="my-3 mx-1 p-1 bg-primary rounded" > ${responseInstructionsData.meals[0].strMeasure6} ${responseInstructionsData.meals[0].strIngredient6}</li>` ;
        }
        if(responseInstructionsData.meals[0].strMeasure7 !="" && responseInstructionsData.meals[0].strMeasure1 !=null && responseInstructionsData.meals[0].strIngredient7 !="" && responseInstructionsData.meals[0].strIngredient1 !=null) {
            content+=` <li class="my-3 mx-1 p-1 bg-primary rounded" > ${responseInstructionsData.meals[0].strMeasure7} ${responseInstructionsData.meals[0].strIngredient7}</li>` ;
        }
        if(responseInstructionsData.meals[0].strMeasure8 !="" && responseInstructionsData.meals[0].strMeasure1 !=null && responseInstructionsData.meals[0].strIngredient8 !="" && responseInstructionsData.meals[0].strIngredient1 !=null) {
            content+=` <li class="my-3 mx-1 p-1 bg-primary rounded" > ${responseInstructionsData.meals[0].strMeasure8} ${responseInstructionsData.meals[0].strIngredient8}</li>` ;
        }
        if(responseInstructionsData.meals[0].strMeasure9 !="" && responseInstructionsData.meals[0].strMeasure1 !=null && responseInstructionsData.meals[0].strIngredient9 !="" && responseInstructionsData.meals[0].strIngredient1 !=null) {
            content+=` <li class="my-3 mx-1 p-1 bg-primary rounded" > ${responseInstructionsData.meals[0].strMeasure9} ${responseInstructionsData.meals[0].strIngredient9}</li>` ;
        }
        if(responseInstructionsData.meals[0].strMeasure10 !="" && responseInstructionsData.meals[0].strMeasure1 !=null && responseInstructionsData.meals[0].strIngredient10 !="" && responseInstructionsData.meals[0].strIngredient1 !=null) {
            content+=` <li class="my-3 mx-1 p-1 bg-primary rounded" > ${responseInstructionsData.meals[0].strMeasure10} ${responseInstructionsData.meals[0].strIngredient10}</li>` ;
        }
        if(responseInstructionsData.meals[0].strMeasure11 !="" && responseInstructionsData.meals[0].strMeasure1 !=null && responseInstructionsData.meals[0].strIngredient11 !="" && responseInstructionsData.meals[0].strIngredient1 !=null) {
            content+=` <li class="my-3 mx-1 p-1 bg-primary rounded" > ${responseInstructionsData.meals[0].strMeasure11} ${responseInstructionsData.meals[0].strIngredient11}</li>` ;
        }
        if(responseInstructionsData.meals[0].strMeasure12 !="" && responseInstructionsData.meals[0].strMeasure1 !=null && responseInstructionsData.meals[0].strIngredient12 !="" && responseInstructionsData.meals[0].strIngredient1 !=null) {
            content+=` <li class="my-3 mx-1 p-1 bg-primary rounded" > ${responseInstructionsData.meals[0].strMeasure12} ${responseInstructionsData.meals[0].strIngredient12}</li>` ;
        }
        if(responseInstructionsData.meals[0].strMeasure13 !="" && responseInstructionsData.meals[0].strMeasure1 !=null && responseInstructionsData.meals[0].strIngredient13 !="" && responseInstructionsData.meals[0].strIngredient1 !=null) {
            content+=` <li class="my-3 mx-1 p-1 bg-primary rounded" > ${responseInstructionsData.meals[0].strMeasure13} ${responseInstructionsData.meals[0].strIngredient13}</li>` ;
        }
        if(responseInstructionsData.meals[0].strMeasure14 !="" && responseInstructionsData.meals[0].strMeasure1 !=null && responseInstructionsData.meals[0].strIngredient14 !="" && responseInstructionsData.meals[0].strIngredient1 !=null) {
            content+=` <li class="my-3 mx-1 p-1 bg-primary rounded" > ${responseInstructionsData.meals[0].strMeasure14} ${responseInstructionsData.meals[0].strIngredient14}</li>` ;
        }
        if(responseInstructionsData.meals[0].strMeasure15 !="" && responseInstructionsData.meals[0].strMeasure1 !=null && responseInstructionsData.meals[0].strIngredient15 !="" && responseInstructionsData.meals[0].strIngredient1 !=null) {
            content+=` <li class="my-3 mx-1 p-1 bg-primary rounded" > ${responseInstructionsData.meals[0].strMeasure15} ${responseInstructionsData.meals[0].strIngredient15}</li>` ;
        }
        if(responseInstructionsData.meals[0].strMeasure16 !="" && responseInstructionsData.meals[0].strMeasure1 !=null && responseInstructionsData.meals[0].strIngredient16 !="" && responseInstructionsData.meals[0].strIngredient1 !=null) {
            content+=` <li class="my-3 mx-1 p-1 bg-primary rounded" > ${responseInstructionsData.meals[0].strMeasure16} ${responseInstructionsData.meals[0].strIngredient16}</li>` ;
        }
        if(responseInstructionsData.meals[0].strMeasure17 !="" && responseInstructionsData.meals[0].strMeasure1 !=null && responseInstructionsData.meals[0].strIngredient17 !="" && responseInstructionsData.meals[0].strIngredient1 !=null) {
            content+=` <li class="my-3 mx-1 p-1 bg-primary rounded" > ${responseInstructionsData.meals[0].strMeasure17} ${responseInstructionsData.meals[0].strIngredient17}</li>` ;
        }
        if(responseInstructionsData.meals[0].strMeasure18 !="" && responseInstructionsData.meals[0].strMeasure1 !=null && responseInstructionsData.meals[0].strIngredient18 !="" && responseInstructionsData.meals[0].strIngredient1 !=null) {
            content+=` <li class="my-3 mx-1 p-1 bg-primary rounded" > ${responseInstructionsData.meals[0].strMeasure18} ${responseInstructionsData.meals[0].strIngredient18}</li>` ;
        }
        if(responseInstructionsData.meals[0].strMeasure19 !="" && responseInstructionsData.meals[0].strMeasure1 !=null && responseInstructionsData.meals[0].strIngredient19 !="" && responseInstructionsData.meals[0].strIngredient1 !=null) {
            content+=` <li class="my-3 mx-1 p-1 bg-primary rounded" > ${responseInstructionsData.meals[0].strMeasure19} ${responseInstructionsData.meals[0].strIngredient19}</li>` ;
        }
        if(responseInstructionsData.meals[0].strMeasure20 !="" && responseInstructionsData.meals[0].strMeasure1 !=null && responseInstructionsData.meals[0].strIngredient20 !="" && responseInstructionsData.meals[0].strIngredient1 !=null) {
            content+=` <li class="my-3 mx-1 p-1 bg-primary rounded" > ${responseInstructionsData.meals[0].strMeasure20} ${responseInstructionsData.meals[0].strIngredient20}</li>` ;
        }
    return content ;
}

function showTags() {
    var content = "";
    if (responseInstructionsData.meals[0].strTags !=null) {
        content = `<li class="my-3 mx-1 p-1 bg-warning rounded">${responseInstructionsData.meals[0].strTags}</li>` ;
    }
    return content ;
}



var InstructionsData ;
var responseInstructionsData ;

async function getInstructions (idMeal) {
   InstructionsData = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`) ;
   responseInstructionsData =  await InstructionsData.json() ;
   showInstructions () ;
 }


//  strip navbar 

var xMark = document.querySelector("#xMark") ;
var headerNavbar = document.querySelector("#headerNavbar") ;
var tabMenu = document.querySelector("#tabMenu") ;

xMark.addEventListener("click",function(){

    if(xMark.classList.contains("fa-bars")){
        showNavbar () ;
    }
    else
    {
        hideNavbar () ;
    }
})

var searchPlace = document.querySelector("#searchPlace") ;
var searchBtn = document.querySelector("#searchBtn") ;

searchBtn.addEventListener("click",function(){
    searchPlace.classList.remove("d-none") ;
    hideNavbar () ;
    meals.classList.remove("d-none") ;
    instructions.classList.add("d-none") ;
    categories.classList.add("d-none") ;
    area.classList.add("d-none") ;
    ingredients.classList.add("d-none") ;
    categories.classList.add("d-none") ;
    ContactUs.classList.add("d-none") ;
})

function showNavbar () {
    xMark.classList.replace("fa-bars","fa-xmark") ;
    headerNavbar.style.left = "250px" ;
    tabMenu.classList.add("open-menu") ;
}

function hideNavbar () {
    xMark.classList.replace("fa-xmark","fa-bars") ;
    headerNavbar.style.left = "0" ;
    tabMenu.classList.remove("open-menu") ;
}


// Categories 

var categories = document.querySelector("#categories") ;
var categoriesBtn = document.querySelector("#categoriesBtn") ;

categoriesBtn.addEventListener("click",function(){
    categories.innerHTML = "" ;
    hideNavbar() ;
    searchPlace.classList.add("d-none") ;
    meals.classList.add("d-none") ;
    instructions.classList.add("d-none") ;
    area.classList.add("d-none") ;
    ingredients.classList.add("d-none") ;
    ContactUs.classList.add("d-none") ;
    categories.classList.remove("d-none") ;
    getCategories () ;
})


var categoriesData ;
var responseCategoriesData ;

async function getCategories () {
    categoriesData = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`) ;
    responseCategoriesData = await categoriesData.json() ;
    showCategories () ;
}

function showCategories () {
    var content ;
    for (var i = 0 ; i<responseCategoriesData.categories.length ; i++) {
     content =  ` <div onclick="getCategoriesMeals('${responseCategoriesData.categories[i].strCategory}')" class="col-md-3 layer shadow overflow-hidden">
        <div class="post rounded-2">
            <img class="w-100 rounded-2" src="${responseCategoriesData.categories[i].strCategoryThumb}" alt="${responseCategoriesData.categories[i].strCategory}">
            <div class="post-info rounded-2 text-center">
                <h2>${responseCategoriesData.categories[i].strCategory}</h2>
                <p>${responseCategoriesData.categories[i].strCategoryDescription}</p>
            </div>
        </div>
    </div>` ;
    categories.innerHTML += content ;
    }   
}

async function getCategoriesMeals(strCategory) {
    meals.innerHTML = "" ;
    Data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`) ;
    responseData = await Data.json() ;
    loading.classList.add("d-none") ;
    categories.classList.add("d-none") ;
    ContactUs.classList.add("d-none") ;
    meals.classList.remove("d-none") ;
    displayData() ;
}


// Area

var area = document.querySelector("#area") ;
var areaBtn = document.querySelector("#areaBtn") ;

areaBtn.addEventListener("click",function(){
    area.innerHTML = "" ;
    searchPlace.classList.add("d-none") ;
    meals.classList.add("d-none") ;
    instructions.classList.add("d-none") ;
    categories.classList.add("d-none") ;
    ingredients.classList.add("d-none") ;
    ContactUs.classList.add("d-none") ;
    area.classList.remove("d-none") ;
    hideNavbar () ;
    getArea () ;
})


var areaData ;
var responseAreaData ;

async function getArea () {
    areaData = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`) ;
    responseAreaData = await areaData.json() ;
    showArea () ;
}

function showArea () {
    var content ;
    for (var i = 0 ; i<responseAreaData.meals.length ; i++) {
     content =  ` <div onclick="getAreaMeals('${responseAreaData.meals[i].strArea}')" class="col-md-3 shadow area rounded-circle">
        <div class="rounded-2 text-center">
            <i class="fa-solid fa-map-location-dot"></i>   
            <div class="rounded-2 text-center">
                <h2>${responseAreaData.meals[i].strArea}</h2>
            </div>
        </div>
    </div>` ;
    area.innerHTML += content ;
    }   
}

async function getAreaMeals (strArea) {
    meals.innerHTML = "" ;
    Data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${strArea}`) ;
    responseData = await Data.json() ;
    loading.classList.add("d-none") ;
    categories.classList.add("d-none") ;
    area.classList.add("d-none") ;
    ContactUs.classList.add("d-none") ;
    meals.classList.remove("d-none") ;
    displayData() ;
}


// ingredients

var ingredients = document.querySelector("#ingredients") ;
var ingredientsBtn = document.querySelector("#ingredientsBtn") ;

ingredientsBtn.addEventListener("click",function(){
    ingredients.innerHTML = "" ;
    hideNavbar() ;
    meals.classList.add("d-none");
    instructions.classList.add("d-none");
    categories.classList.add("d-none");
    area.classList.add("d-none");
    ContactUs.classList.add("d-none") ;
    ingredients.classList.remove("d-none") ;
    getIngredients () ; 
})

var ingredientsData ;
var ingredientsResponseData ;

async function getIngredients () {
    ingredientsData = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`) ;
    ingredientsResponseData = await ingredientsData.json() ;
    showIngredients () ;
}


function showIngredients () {
    var content ;
    for (var i = 0 ; i<32 ; i++) {
     content =  ` <div onclick="getIngredientsMeals('${ingredientsResponseData.meals[i].strIngredient}')" class="col-md-3 shadow ingredients rounded-circle">
        <div class="rounded-2 text-center">
            <i class="fa-solid fa-bowl-food"></i>   
            <div class="rounded-2 text-center">
                <h2>${ingredientsResponseData.meals[i].strIngredient}</h2>
            </div>
        </div>
    </div>` ;
    ingredients.innerHTML += content ;
    }   
}

async function getIngredientsMeals (strIngredient) {
    meals.innerHTML = "" ;
    Data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${strIngredient}`) ;
    responseData = await Data.json() ;
    loading.classList.add("d-none") ;
    searchPlace.classList.add("d-none") ;
    categories.classList.add("d-none") ;
    area.classList.add("d-none") ;
    ingredients.classList.add("d-none") ;
    ContactUs.classList.add("d-none") ;
    meals.classList.remove("d-none") ;
    displayData() ;
}
 



// share website link
var stripShare = document.querySelector("#stripShare") ;
stripShare.addEventListener("click", event => {
    if (navigator.share) {
        navigator.share({
          text: "Go to Mohamed Essam's website 😍 and get your favorite food's recipe 😋🍔",
          url: 'https://1762002.github.io/yum-yum/'
        }).then(() => {
          alert("Thanks for sharing!😍")
        })
        .catch(console.error);
      } else {
        console.log("Sorry your browser does't support that...😥");
      }
})

// contact

var ContactUs = document.querySelector("#ContactUs") ;
var ContactUsBtn = document.querySelector("#ContactUsBtn") ;

ContactUsBtn.addEventListener("click",function () {
    hideNavbar() ;
    loading.classList.add("d-none") ;
    searchPlace.classList.add("d-none") ;
    categories.classList.add("d-none") ;
    area.classList.add("d-none") ;
    ingredients.classList.add("d-none") ;
    meals.classList.add("d-none") ;
    instructions.classList.add("d-none");
    ContactUs.classList.remove("d-none") ;
})


var showPass = document.querySelector("#showPass") ;
var showRePass = document.querySelector("#showRePass") ;

showPass.addEventListener("click",function(){
    if (showPass.classList.contains("fa-eye")) {
        userPassword.setAttribute('type','text') ;
        showPass.classList.replace("fa-eye","fa-eye-slash") ;
    }
    else
    {
        userPassword.setAttribute('type','password') ;
        showPass.classList.replace("fa-eye-slash","fa-eye") ;
    }
})


showRePass.addEventListener("click",function(){
    if (showRePass.classList.contains("fa-eye")) {
        userRePassword.setAttribute('type','text') ;
        showRePass.classList.replace("fa-eye","fa-eye-slash") ;
    }
    else
    {
        userRePassword.setAttribute('type','password') ;
        showRePass.classList.replace("fa-eye-slash","fa-eye") ;
    }
})


var userFirstName = document.querySelector("#userFirstName") ;
var userSecondName = document.querySelector("#userSecondName") ;
var userPhone = document.querySelector("#userPhone") ;
var userAge = document.querySelector("#userAge") ;
var userPassword = document.querySelector("#userPassword") ;
var userRePassword = document.querySelector("#userRePassword") ;
var contactBtn = document.querySelector("#contactBtn") ;

var nameRejex = /^([a-z]|[A-Z]|\s){3,15}$/ ;
var emailRejex =  /^([a-z]|[A-Z]|[0-9]){3,15}[@]([a-z]|[A-Z]){2,8}[.]([a-z]|[A-Z]){2,6}$/ ;
var phoneRejex = /^(02)?([0][0-9]{10})$/ ;
var ageRejex = /^[1-9][0-9]{0,1}$/ ;
var passRejex = /^\D{8,16}$/ ;
