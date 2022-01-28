const stack = (brackets) => {
    var arr = [];


    if (brackets[0] === ')' ){
        return false;
    } 
    

    for (var i = 0; i < brackets.length; i++) {
        if (brackets[i] === '('){
            arr.push('(');
        } else if (brackets[i] === ')'){
            arr.pop('(');
        }

        
    if (arr.length === 0 ){
        return true;
    }else{
        return false;
        }
    }
}