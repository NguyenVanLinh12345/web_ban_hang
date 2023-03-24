function ShowPrice(price){
    let myPrice = `${Number(price)}`.split("").reverse();
        
    let newPrice = [];
    for(let i=0; i<myPrice.length; i++){
        newPrice.push(myPrice[i]);
        if(i%3===2 && i!==myPrice.length-1) newPrice.push(".");
    }  
    return newPrice.reverse().join(""); 
}

export default ShowPrice;