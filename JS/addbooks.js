function AddBooks(){
    let form = document.getElementById('form');
    let fields = ['title', 'description', 'author', 'isbn', 'rating', 'seller', 'pic'];
    
    /// check for non-empty field
    let check = CheckField(form, fields);

    if(check === false)
        ShowError('No field can be empty.');
    else{
        let userId = FindUser();
        if(userId === null)
            ShowError('You are not registered to our site!');
        else{
            StoreData('books', form, fields, userId);
            alert('wait');
            ShowOk('Your book has been added to list.');
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

function FindUser(){
    let users = localStorage.getItem('users') || "[]" ;
    users = JSON.parse(users);    
     
    for(user of users){
        if(user['flag'] === 1)
            return user['id'];
    }    
    return null;
}

function StoreData(table, form, keys, modifier){
    let datas = localStorage.getItem(table) || "[]" ;
    datas = JSON.parse(datas);    
    alert('data being stored');

    let newData = {};       /// create new user
    for(let key of keys){        
        newData[key] = form[key].value;
    }
    newData['modifier'] = modifier;
    newData['id'] = datas.length || 0;
    datas.push(newData);
    datas = JSON.stringify(datas);
    localStorage.setItem(table, datas);
    
    console.log(JSON.parse(datas));
}

function ShowOk(msg){
    // send welcome message
    document.getElementById('validationmsg').style.display = 'inline';
    document.getElementById('validationmsg').innerHTML = msg;
}

function ShowError(msg){
    document.getElementById('validationmsg').style.display = 'inline';
    document.getElementById('validationmsg').innerHTML = msg;
}