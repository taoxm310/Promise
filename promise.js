// generator function and Promise
// make the following generator function work
function* gen() {
    console.log(1)
    var a = yield Promise.resolve(1)
    console.log(a)
    var b = yield Promise.resolve(2)
    console.log(b)
}

// Solution
function run(genFn) {
    var iteratee = genFn();
    (function x(val) {
        var gened = iteratee.next(val)
        //'next' method accept an argument as a value returned from last yield
        if (!gened.done) {
            gened.value.then(x)
            //'gened.value' is a Promise, pass Promise result through 'then' to function 'x' 
        }
    }())
}

//request(url,callback), implement a function reqRetry(request, times) 
//which will execute request for specific times. The trying will stop if request succeed, otherwise, keep trying until times out.
function reqRetry(url, times) {
    var prom = request(url, callback)
    for (var i = 0; i < times; i++) {
        prom = prom.catch((result) => {
            request(url, callback)
        })
    }
    prom = prom.then((result) => {
        //do something with result
    })
}

//classic setTimeout for loop question via Promise solution
//solution 1
var task = []

function promisify(j) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(new Date(), j)
            resolve()
        }, 2000 * j)
    })
}

for (var i = 0; i < 5; i++) {
    task.push(promisify(i))
}

Promise.all(task).then(() => {
    setTimeout(() => {
        console.log(new Date(), i)
    }, 2000)
})

//solution 2
(function loop(j){
	 return new Promise((resolve) => {
        setTimeout(() => {
            console.log(new Date(), j)
            resolve()
        }, 2000 * j)
    }).then(() => j >= 5 || loop(j+1))
})(0)