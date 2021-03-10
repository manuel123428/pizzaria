menu=["Chicken Tandoori Pizza",
"Deluxe Veggie Pizza",
"Paneer Tikka Pizza",
"Veg Extravaganza Pizza",
"Veg Supreme Pizza"]
function get_menu(){
  var htmldata;
  htmldata="<ol class='menulist'>"  
  menu.sort()
  for(var i=0;i<menu.length;i++){
    htmldata=htmldata='<li>'+menu+'</li>'
  }
  htmldata=htmldata+"</ol>"
  document.getElementById("menu_dis").innerHTML=htmldata,menu;
}
function add_item(){
  var new_item=document.getElementById("add_toppings").nodeValue;
  menu.push(new_item)
}