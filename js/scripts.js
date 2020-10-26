$(document).ready(function(){
  $("form#list").submit(function(event) {

    let groceryList = [];

    groceryList [0] = $("#item1").val();
    groceryList [1] = $("#item2").val();
    groceryList [2] = $("#item3").val();
    groceryList [3] = $("#item4").val();
    groceryList [4] = $("#item5").val();


    let newGrocery = groceryList.sort();
    console.log(newGrocery);
    
    newGrocery.forEach(function(element) {
      $("ul.groceryList").append("<li>" + element + "</li>")
    });

    $(".groceryList").show();

    
  event.preventDefault();
  });
});