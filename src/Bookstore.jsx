import './Book.css'

export default function Singer({book}){
    console.log(book);
    return (
        <div className='book'>
            <h3>Singer : {book.name}</h3>
            <p>Age : {book.price}</p>
        </div>
    )
}