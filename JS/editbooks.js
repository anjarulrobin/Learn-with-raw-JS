function removeBooks(getId){

    //console.log('book '+getId+' has been removed');

    let books = localStorage.books;
    books = JSON.parse(books);

    let result = books.filter( (book) => book.id !== getId);

    result = JSON.stringify(result);
    localStorage.books = result;

    //console.log('remainning books '+result);
    window.location.replace('dashboard.html');
}

function SaveChange(getId){

    let form = document.getElementById('form'+getId);
    console.log(form);
    let books = localStorage.books;
    books = JSON.parse(books);

    for(EachBook of books){
        
        if(EachBook['id'] === getId){
                for(key in EachBook){
                //console.log(key);
                if(form[key] === undefined)
                    continue;
                else
                    EachBook[key] = form[key].value;
            }
        }        
    }

    books = JSON.stringify(books);
    localStorage.books = books;

    //console.log('remainning books '+result);
    window.location.replace('dashboard.html');
}
