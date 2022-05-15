function randomRecipe(){
  var theRandomRecipe=Math.round(Math.random()*3)
  var link1="../recipe1/recipe1.html"
  var link2="../recipe3/recipe3.html"
  var link3="../recipe4/recipe4.html"
  var link4="../recipe5/recipe5.html"
  if (theRandomRecipe==0){
    window.location=link1
    }
    else if
      (theRandomRecipe==1){
        window.location=link2
      }
      else if (theRandomRecipe==2){
        window.location=link3
      }
      else if (theRandomRecipe==3){
        window.location=link4
      }
    }