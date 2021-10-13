function foo() {
    console.log("This is Global foo");
}

function bar() {
    
    function foo() {
        console.log("This is Local foo");
    }

    foo();
}

bar();