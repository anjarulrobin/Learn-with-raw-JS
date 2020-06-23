function CheckValidation(){

    let form = document.getElementById('form');
    let keys = ['username', 'fullname', 'email', 'password', 'confirmpass'];

    /// check for non-empty field
    let check = CheckField(form, keys);

    if(check === false){
        ShowError('No field can be empty.');
    }
    else {
        if(form['password'].value !== form['confirmpass'].value){        
            ShowError('Sorry! Password Mismatched. Try again');
        }
        else{
            keys.pop();         /// remove confirm password. to avoid duplication
            StoreData('users',form, keys);
            ShowOk('Thanks for registering');
        }
    }
}

function CheckField(form, keys){

    for(let key of keys){
        if(form[key].value === '')
            return false;
    }
    return true;
}

function StoreData(table,form, keys){
        
    let datas = localStorage.getItem(table) || "[]" ;
    datas = JSON.parse(datas);    
    
    let newData = {};       /// create new user
    for(let key of keys){        
        newData[key] = form[key].value;
    }
    newData['id'] = datas.length || 0;
    newData['flag'] = 0;

    datas.push(newData);
    datas = JSON.stringify(datas);
    localStorage.setItem(table, datas);
    
    console.log(JSON.parse(datas));
}

function ShowOk(msg){
    // send welcome message
    /*document.getElementById('validationmsg').style.display = 'inline';
    document.getElementById('validationmsg').innerHTML = msg;*/
    document.getElementById('form').action = 'dashboard.html';
    //window.location.replace('home.html')
}

function ShowError(msg){
    /*document.getElementById('validationmsg').style.display = 'inline';
    document.getElementById('validationmsg').innerHTML = msg;*/
    document.getElementById('form').action = '#';
}
