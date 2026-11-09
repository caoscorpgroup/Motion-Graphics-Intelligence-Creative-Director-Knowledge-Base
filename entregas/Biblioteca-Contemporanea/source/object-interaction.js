// object-interaction.js - Transferencia dinámica de libros
function transferBook(bookId, targetContainerId) {
    const book = document.getElementById(bookId);
    const container = document.getElementById(targetContainerId);
    if (book && container) {
        container.appendChild(book);
    }
}
window.transferBook = transferBook;
