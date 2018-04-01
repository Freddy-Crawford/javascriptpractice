//var myFavoriteFoods= ['hotwings','veggie skewers','lo mein'];
//console.log (myFavoriteFoods[0]);














// var recipe = {
// 	name: "mac and cheese",
// 	ingredients:["mac","cheese","cream"],
// 	directions:"mix it all together",
// 	servings:4
// 	eat: function(letsCook){
// 		console.log(this)
// 		console.log("i\'m hungry let\'s cook ");
// 	}
// }
//  for(var i =0 i < recipe.ingredients.length; i++){
// 	 console.log("ingredient " + i + " = " + recipe.ingredients[1]);}

// recipe.eat();




var pageDiv = document.getElementsByTagName('div')[0];

var newDiv = document.createElement('div');
var newParagraphText = document.createTextNode('just created paragraph');
pageDiv.appendChild(newDiv);
newDiv.appendChild(newParagraphText);



function mouseOver (){
	newDiv.style.color = "red";
}
newDiv.addEventListener("mouseover", mouseOver);


var link = document.getElementById("gdiLink");


// displayed how to prevent link from redirecting to new page
gdiLink.addEventListener("click", function(event) {
	event.preventDefault()
});


//added alert to display name entered in text field
var submit = document.getElementById("submitBtn");
submit.addEventListener("click", function(event) {
	event.preventDefault();
	var name = document.getElementById("firstName").value;
	alert(name);
})

