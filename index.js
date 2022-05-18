function receivesAFunction(callback){
    return callback();
}

callback(function(){return "hey there!"});


function returnsANamedFunction(){
    return function namedFunction(){return "hey there, yourself!"};
}

function returnsAnAnonymousFunction(){
    return function(){return "What a friendly group! Hey guys!"};
}