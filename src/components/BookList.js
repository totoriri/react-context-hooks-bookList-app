import React, { Component } from "react";

class BookList extends Component{
    render() {
        return (
            <nav className='book-list'>
                <ul>
                    <li>the way of kings</li>
                    <li>the name of the wind</li>
                    <li>the final empire</li>
                </ul>
            </nav>
        )
    }
}

export default BookList;
