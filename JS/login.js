//import {ShowOk, ShowError} from './register.mjs';
function CheckValidation(){

    let form = document.getElementById('form');
    let fields = ['username', 'password'];

    /// check for non-empty fields
    if(CheckFields(form, fields) === false)
        ShowError('No field can be empty.');
    else{
        let userId = FindUser(form, fields);
                
        if(userId === null)
            ShowError('You are not registered to our site!');
        else{   
            AddSession(userId);
            ShowOkOnDashboard('Welcome to BookStorage');
        }
    }
}

function CheckFields(form, keys){
    for(let key of keys){
        if(form[key].value===''){                        
            return false;
        }
    }
    return true;
}

function FindUser(form, keys){

    let users = localStorage.getItem('users') || "[]" ;
    users = JSON.parse(users);
    let found = false;
     
    for(user of users){

        let matched = 0;
        for(key of keys){
            if(form[key].value===user[key]) 
                matched++;
            else
                break;
        }

        if(matched === keys.length){        // all key matched
            return user['id'];            
        }
        // else continue
    }    
    return null;
}

function AddSession(userId){
    let users = localStorage.getItem('users') || "[]" ;
    users = JSON.parse(users);
    users[userId]['flag'] = 1;
    users = JSON.stringify(users);
    localStorage.setItem('users', users);
}

function ShowOkOnDashboard(msg){
    // send welcome message   
    /*document.getElementById('validationmsg').style.display = 'inline';
    document.getElementById('validationmsg').innerHTML = msg;*/
    //window.location.replace('dashboard.html');
    document.getElementById('form').action = 'dashboard.html';
}

function ShowError(msg){
    document.getElementById('form').action = '#';    
    document.getElementById('validationmsg').style.display = 'inline';
    document.getElementById('validationmsg').innerHTML = msg;    
}

//export { ShowError, ShowOk };