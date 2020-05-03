const str = '380 (97) 517-37-98'
const trimmer =(el) => {
  
return  Number(el.replace(/\(|\)|\+|\ |\-/g, ''))
}
console.log(trimmer(str));
