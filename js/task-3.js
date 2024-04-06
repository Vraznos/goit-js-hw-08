function getElementWidth(content, padding, border){
    const x = Number.parseInt(content);
    const y = (Number.parseInt(padding) + Number.parseInt(border)) * 2;
    const result = x + y;
    return result;
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px")); 
