
//use strict to prevent undeclared variables


//self executing func i.e  IIFE Immideatly Invoked Functio Expression
(function()
{

    function start()
    {
        let demo =0;
        console.log("App Started");
        console.log(`App Started ${demo}`);
    }

/*

 let start = function()
    {
        console.log("App Started");
    }


*/

    window.addEventListener("load", start)
   /* window.addEventListener("load", function()
    {
        console.log("App Started");
    })*/

/* window.addEventListener("load", () =>
    {
        console.log("App Started");
    })*/



})();