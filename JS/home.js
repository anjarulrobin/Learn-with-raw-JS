function showBooks(){
    let books = localStorage.getItem('books') || "[]";          /// load all the books from server
    books = JSON.parse(books);

    let booklist = '';        /// create HTML dynamically
    let bookno = 1;
    
    for( let book of books){
        let b = 
            `<div class="col-sm" style="margin-bottom: 50px;">
                <div class="card shadow-lg" style="width: 200px; padding: 5px !important">
                    <img src="${book.pic}" width="100%" height="200px" style="padding:10px" >                    
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text" style="overflow: ellipsis"> Rating: ${book.rating}</p>
                        <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter${bookno}" >Details</a>
                    </div>

                    <div class="modal fade" id="exampleModalCenter${bookno}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                                        <h5> About: </h5>
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

                </div>
            </div>
          </br>
          `;
      
        bookno++;
        
        booklist+=b;
        booklist+=b;
        booklist+=b;   
    }
   document.getElementsByClassName('row')[0].innerHTML = booklist;  
} 

window.addEventListener('load', function(){
    showBooks();
});
