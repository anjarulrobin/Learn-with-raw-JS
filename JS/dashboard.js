function showBooks(){
    let books = localStorage.getItem('books') || "[]";          /// load all the books from server
    books = JSON.parse(books);

    let booklist = '';        /// create HTML dynamically
    let bookno = 1;
    let userId = FindUser();

    if(userId === null)
        ShowError('You are not logged in currently.');
    else{        
        for( let book of books){
            if(book['modifier'] !== userId)
                continue;
            else{
                    let b = 
                        `<div class="col-sm" style="margin-bottom: 50px;">
                            <div class="card shadow-lg" style="width: 280px; padding: 2px !important">
                                <img src="${book.pic}" width="100%" height="200px" style="padding:10px" >                    
                                <div class="card-body" style="width: 260px">
                                    <h5 class="card-title">${book.title}</h5>
                                    <p class="card-text" style="overflow: ellipsis"> Rating: ${book.rating}</p>
                                    <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter${book.id}" >Details</a>
                                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#edit${book.id}"> Edit </button>
                                    <a href="#" class="btn btn-primary" onclick = "removeBooks(${book.id})"> Remove </a>
                                </div>

                                <div class="modal fade" id="exampleModalCenter${book.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content" style="width:400px;">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalCenterTitle">${book.title}</h5>
                                                
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="modal-image mb-3" style="display:flex; justify-content: space-between"> 
                                                    <h5> Cover Page: </h5>
                                                    <img src="${book.pic}" width="150px" height="200px">
                                                </div>
            
                                                <div class="modal-author mb-3" style="display:flex; justify-content: space-between"> 
                                                    <h5> Author: </h5>
                                                    <h6>${book.author}</h6>
                                                </div>
            
                                                <div class="modal-seller mb-3" style="display:flex; justify-content: space-between"> 
                                                    <div> <h5> About: </h5> </div>
                                                    <div style="padding-top: 4px; padding-left: 6px;"> <h6>${book.description}</h6> </div>
                                                </div>
            
                                                <div class="modal-image mb-3" style="display:flex; justify-content: space-between"> 
                                                    <h5> Rating: </h5>
                                                    <h6>${book.rating}</h6>
                                                </div>
            
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Modal -->
                                <div class="modal fade" id="edit${book.id}" tabindex="-1" role="dialog" aria-labelledby="editModal" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="editModal">Modal title</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <form id="form${book.id}" method="POST">
                                            <div class="form-group">
                                            <label for="title"> Title </label>
                                            <input required type="text" name="title" value = "${book.title}" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">                
                                            </div>
                                            
                                            <div class="form-group">
                                                <label for="description"> Description : </label>
                                                <input required type="text" name="description"  value = "${book.description}" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">                    
                                            </div>
                                            
                                            <div class="form-group">
                                                <label for="author"> Author </label>
                                                <input required type="text" name="author"  value = "${book.author}"class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">                    
                                            </div>
                            
                                            <div class="form-group">
                                                <label for="isbn"> ISBN  </label>
                                                <input required type="text" name="isbn" value = "${book.isbn}" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">                    
                                            </div>
                            
                                            <div class="form-group">
                                                <label for="rating"> Rating </label>
                                                <input required type="number" name="rating"  value = "${book.rating}" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">                    
                                            </div>
                            
                                            <div class="form-group">
                                                <label for="seller"> Seller </label>
                                                <input required type="text" name="seller"  value = "${book.seller}"class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">                    
                                            </div>
                            
                                            <div class="form-group">
                                                <label for="pic"> Image </label>
                                                <input required type="text" name="pic" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">                    
                                            </div>                                                                                        
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary" onclick="SaveChange(${book.id})">Save changes</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </br>
                    `;                    
                    booklist+=b;
                    booklist+=b;
                    booklist+=b;
                }
            }
        document.getElementsByClassName('row')[0].innerHTML = booklist;  
    }
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

function ShowError(msg){
    document.getElementById('validationmsg').style.display = 'inline';
    document.getElementById('validationmsg').innerHTML = msg;
}

window.addEventListener('load', function(){
    console.log('User is in Dashboard');
    showBooks();
});
