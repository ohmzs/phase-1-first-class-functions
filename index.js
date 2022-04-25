//describe("receivesAFunction(callback)", () => {
    //it("receives a function and calls it", () => {

function receivesAFunction(callback) {                          // take a callback function as an argument
    return callback();                                          // call the callback function}
}                                                               // it doesn't matter what this function returns, so long as it calls the callback function
    

// describe("returnsANamedFunction()", () => {
//     var fn;

//     before(() => {
//       fn = returnsANamedFunction();
//     });

//     it("returns a function", () => {
//       expect(fn).to.be.a("function");
//     });

//     it("returns a named function", () => {
//       expect(fn.name).not.to.eql("");
//     });
//   });
function returnsANamedFunction(){
       return function fn(){
       }            
 }
function returnsAnAnonymousFunction(){
       return function(){
        }
}