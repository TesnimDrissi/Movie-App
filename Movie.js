var data = [
{
    category:"Movie",
    imgSrc:"https://assets.gadgets360cdn.com/pricee/assets/product/202111/spider_man_no_way_home_india_1638191040.jpg  "
    name: "spider-man: no-way home"
},{
    category:"Movie",
    imgSrc:"https://upload.wikimedia.org/wikipedia/en/d/d9/Hereditary.png"
    name: "Hereditary"
},{
    category:"Movie",
    imgSrc:""
},{
    category:"Movie",
    imgSrc:"https://upload.wikimedia.org/wikipedia/en/0/0d/1922_%282017_film%29.png"
    name: "1922"
}
var each = function (coll,func){
    if (Array.isArray(coll)){
        for (var i =0;i<coll.length;i++){
        func(coll[i],i)
    }
    }
    else {
        for (var key in coll){
            func(coll[key],key)
        }
    }
}
var filter = function(array,predicate){
var acc = [];
each(array,function(e,i){
    if (predicate(e,i)){
        acc.push(e)
    }
})
return acc;
}
function displayElement (array){
    each(array, function(e,i){
        var div=$(`<div class='grid-item ${e.name}'><img src="${e.imgSrc}"></div>`)
        // var img= $("<img>")
        // img.attr("src",e.imgSrc)
        // var div = $("<div class='grid-item'></div>")
          // div.append(img)
          div.appendTo($('#container') )
          })
 }
$('.searchButton').click(function(){
    $(".grid-item").remove()
var input = $('#search').val()
var filtred = []
if(input==="spider-man: no-way home") {
 filtred=filter(data,function(e,i){
    return e.name=== "spider-man: no-way home"
}
)
}
else if (input==="Hereditary"){
     filtred=filter(data,function(e,i){
    return e.name=== "Hereditary"
})
}
else if (input===""){
     filtred=data
}
displayElement(filtred)
})