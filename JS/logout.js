function LogOut(){

    let users = localStorage.getItem('users') || "[]" ;
    users = JSON.parse(users);
    // console.log(users);
    let found = false;    
    for(user of users){        
        if(user['flag'] === 1){
            user['flag'] = 0;
        }
    }
    users = JSON.stringify(users);
    localStorage.setItem('users', users);
    window.location.replace('home.html');    
}