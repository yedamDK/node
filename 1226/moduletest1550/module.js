function module(msg) {
  //default는 하나만 적용
  console.log("msg:" + msg);
}
function area(a, b) {
  console.log("area:" + a * b);
}

export { module, area };

/*export function module(msg) {
  //default는 하나만 적용
  console.log("msg:" + msg);
}
export function area(a, b) {
  console.log("area:" + a * b);
}
  */
