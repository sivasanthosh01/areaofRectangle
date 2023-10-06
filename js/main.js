let width=prompt("Enter the Width of Rectangle");
let height=prompt("Enter the Height of Rectangle");
document.write(`Width of Rectangle ${width} <br>`);
document.write(`Height of Rectangle ${height} <br>`);
let rectangle=(w,h)=>{
    let rect=w*h;
    console.log(rect);
    document.write(`Area of Rectangle ${rect}`)
    
}
rectangle(width,height);