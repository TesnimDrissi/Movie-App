var data = [
{
    category:"Horror",
    name:"It",
    imgSrc:"https://m.media-amazon.com/images/M/MV5BYTJlNjlkZTktNjEwOS00NzI5LTlkNDAtZmEwZDFmYmM2MjU2XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg",
    link: "https://youtu.be/xhJ5P7Up3jA"
},{
    category:"Horror",
    name: "The Nun",
    imgSrc:"https://m.media-amazon.com/images/M/MV5BMjM3NzQ5NDcxOF5BMl5BanBnXkFtZTgwNzM4MTQ5NTM@._V1_.jpg",
    link:"https://youtu.be/zwAM5UnGd2s"
},{
    category:"Horror",
    name:"Annabelle Creation",
    imgSrc:"https://m.media-amazon.com/images/I/912jBYxgW-L._SL1500_.jpg",
    link: "https://youtu.be/EjZkJa6Z-SY"
},{
    category:"Horror",
    name: "The Conjuring",
    imgSrc:"https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_.jpg",
    link: "https://youtu.be/k10ETZ41q5o"
},{
    category:"Horror",
    name: "1922",
    imgSrc:"https://upload.wikimedia.org/wikipedia/en/0/0d/1922_%282017_film%29.png" ,
    link: "https://youtu.be/3E_fT0aTsjI"
},{
    category:"Horror",
    name: "Heraditery",
    imgSrc:"https://upload.wikimedia.org/wikipedia/en/d/d9/Hereditary.png",
    link: "https://youtu.be/V6wWKNij_1M"
},{
    category:"Action",
    name: "The Mummy",
    imgSrc:"https://upload.wikimedia.org/wikipedia/en/a/a2/The_Mummy_%282017%29.jpg",
    link: "https://youtu.be/IjHgzkQM2Sg"
},{
    category:"Action",
    name: "The 5th Wave",
    imgSrc:"https://m.media-amazon.com/images/M/MV5BMTUxMTAxYzktZjE0NC00Y2E1LWI1MjktYzc5N2ZlMDk2ODEyXkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg",
    link: "https://youtu.be/DMKg8-9pLlY"
},{
    category:"Action",
    name: "Oblivion",
    imgSrc:"https://pics.filmaffinity.com/Oblivion-617448176-large.jpg",
    link: "https://youtu.be/A27xPYvqERw"
},{
    category:"Science Fiction",
    name: "Intersteller",
    imgSrc:"https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    link: "https://youtu.be/zSWdZVtXT7E"
},{
    category:"Science Fiction",
    name: "Prometheus",
    imgSrc:"https://m.media-amazon.com/images/I/91yxrciowNL._SL1500_.jpg",
    link:"https://youtu.be/34cEo0VhfGE"
},{
    category:"Science Fiction",
    name: "Passengers",
    imgSrc: "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/chameleon/title-movie/DP_3244378_PASSENGERS%20%282016%29_1400x2100_English%20%28US%29_2.jpg?itok=TYolDZ12",
    link:"https://youtu.be/yVXQq2u6OP0"
},
];

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
    each(array, function(e){
        var div=$(`<div class='grid-item'><div><img src="${e.imgSrc}"><p class='title'>${e.name}</p><a href="${e.link}">See trailer</a> </div>`)
        
          div.appendTo($('#container') )
          })
 } 
 displayElement (data)
   

$('.searchButton').click(function(){
    $(".grid-item").remove()
var input = $('#search').val()
var filtred = []
if(input==="Action") {
 filtred=filter(data,function(e,i){
    return e.category=== "Action"
}
)
} 
else if (input==="Horror"){
     filtred=filter(data,function(e,i){
    return e.category=== "Horror"
})
}
else if (input==="Science Fiction"){
     filtred=filter(data,function(e,i){
    return e.category=== "Science Fiction"
})
}
else if (input==="It"){
     filtred=filter(data,function(e,i){
    return e.name=== "It"
})
}
else if (input==="Annabelle Creation"){
     filtred=filter(data,function(e,i){
    return e.name=== "Annabelle Creation"
})
}
else if (input==="The Nun"){
     filtred=filter(data,function(e,i){
    return e.name=== "The Nun"
})
}
else if (input==="The Conjuring"){
     filtred=filter(data,function(e,i){
    return e.name=== "The Conjuring"
})
}
else if (input==="1922"){
     filtred=filter(data,function(e,i){
    return e.name=== "1922"
})
}
else if (input==="The Mummy"){
     filtred=filter(data,function(e,i){
    return e.name=== "The Mummy"
})
}
else if (input==="The 5th Wave"){
     filtred=filter(data,function(e,i){
    return e.name=== "The 5th Wave"
})
}
else if (input==="Oblivion"){
     filtred=filter(data,function(e,i){
    return e.name=== "Oblivion"
})
}
else if (input==="Intersteller"){
     filtred=filter(data,function(e,i){
    return e.name=== "Intersteller"
})
}
else if (input==="Prometheus"){
     filtred=filter(data,function(e,i){
    return e.name=== "Prometheus"
})
}
else if (input==="Passengers"){
     filtred=filter(data,function(e,i){
    return e.name=== "Passengers"
})
}

else if (input===""){
     filtred=data
}
displayElement(filtred)
})










