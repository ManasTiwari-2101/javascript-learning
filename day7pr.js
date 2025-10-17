function createbook(){
    title=prompt("Enter book title:");
    author=prompt("Enter book author:");
    year=prompt("Enter book year:");
    let book={
        title:title,
        author:author,
        year:year
    };
    return book;
}

function displaybook(book){
    console.log("Book Details:");
    console.log(`Title: ${book.title},Author: ${book.author},year: ${book.year}`); // "" aur ye `` alag hai 
    // `` ye template literal hai jisme hum ${} ka use kar sakte hai variable ko print karne ke liye
    //"" ye double quotes hai jisme hum ${} ka use nahi kar sakte hai variable ko print karne ke liye 
    // // lekin dot(.) ka use kar sakte hai aur [] ka use kar sakte hai variable ko print karne ke liye
    // console.log("Title: "+book.title+",Author: "+book.author+",year: "+book.year);
    // console.log('Title: '+book['title']+',Author: '+book['author']+',year: '+book['year']);
}

function getsummary(book){
    console.log(`${book.title} was written by ${book.author} in year ${book.year}`);
}

// Main program
let library={};
for(let i=0;i<2;i++){
     library["book"+(i+1)]=createbook();
}
for(let i=0;i<2;i++){
    displaybook(library["book"+(i+1)]);
    getsummary(library["book"+(i+1)]);
}
