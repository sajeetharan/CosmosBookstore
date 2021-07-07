import React from 'react';

export const BooksListItem = ({ book }) => {

    const title = (book.title.length < 100 ) ? book.title : (book.title.substring(0, 100) + '...');
    const author = book.author.length < 100 ? book.author : book.author.substring(0,100) + '...';

    let myStyle;
    let titleTextImg;
    let authorTextImg;
    if (book.img != "") {
        const imageUrl = book.img;
        myStyle = {backgroundImage: 'url(' + imageUrl + ')', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '450px', borderRadius: '1rem'};
        titleTextImg = "";
        authorTextImg = "";
    } else {
        const imageUrl = "/bookcover.png";
        myStyle = {backgroundImage: 'url(' + imageUrl + ')', 
                    backgroundPosition: 'center', 
                    backgroundSize: 'cover', 
                    backgroundRepeat: 'no-repeat', 
                    height: '450px', 
                    borderRadius: '1rem',
                    textAlign: "center",
                    fontSize: "30px",
                    color: "black",
                    lineHeight: "80px",
                    fontFamily: "Times New Roman",
                    textTransform: "uppercase",
                    };
        titleTextImg = title;
        authorTextImg = author;
    }

    return (<li>
        <a href={"/books/" + book._id } target="_blank">
        <div className="item" style={myStyle}>{titleTextImg}
            <div className="item-overlay">
                <div className="book-title">{title}</div>
                <div className="book-author">By {author}</div>
            </div>
        </div>
        
        </a>
    </li>);

};