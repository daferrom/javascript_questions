// 21. What is the purpose of the following JavaScript code?

// A variable scope is declared in the global scope with the value "global scope".
var scope = "global scope";

// Inside the check function, a new scope variable is declared with the value "local scope". This variable is local to the check function and shadows the global scope variable within the function's body.

function check()
{
    var scope = "local scope";

    function f()
        {
            return scope;
        }
    
    return f;
}

// The inner function f returns the value of the scope variable. Due to lexical scoping, f looks for the nearest scope variable in its lexical environment. Since f is defined inside the check function, it refers to the scope variable declared in check, which is "local scope".

// Example of usage:

var result = check(); // This calls check(), which returns the function f.
console.log(result()); // This calls the returned function f, which returns "local scope".

// Key concepts demonstrated:
// Lexical scoping: f refers to the scope variable within its lexical environment (inside check), not the global one.
// Closure: When check() is called, it returns the inner function f, which retains access to the scope variable even after check has finished executing.
// Thus, the output of result() would be "local scope".
