import React from "react";
import "./styles.css";
import { useState } from "react";

const dataBase = {
    Coding: [
        { name: "Head First C", rating: "4/5" },
        { name: "Let us C", rating: "3.5/5" },
        { name: "Eloquent JavaScript", rating: "5/5" },
        {
            name: "You Don't Know JS",
            rating: "4.5/5"
        }
    ],

    Management: [
        {
            name: "How to win friends and influence people",
            rating: "5/5"
        },
        {
            name: "7 Habits of Highly Effective People",
            rating: "4.5/5"
        }
    ],
    business: [
        {
            name: "Blue Ocean Strategy",
            rating: "4/5"
        },
        {
            name: "Start With WHY",
            rating: "5/5"
        }
    ]
};

export default function App() {
    const [selectedCategory, setGenre] = useState("business");
    function CategoryClickHandler(category) {
        setGenre(category);
    }
    return (
        <div className="App">
            <h1> Books Recommendation 📚 </h1>

            <h3>Checkout my favorite books.Select category from below</h3>

            <div>
                {Object.keys(dataBase).map((category) => (
                    <button
                        onClick={() => CategoryClickHandler(category)}
                        style={{
                            cursor: "pointer",
                            background: "#E5E7EB",
                            borderRadius: "0.5rem",
                            padding: "0.5rem  1rem",
                            border: "2px solid black",
                            margin: "1rem 0.3rem"
                        }}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <hr />
            <div style={{ textAlign: "left" }}>
                <ul style={{ paddingInlineStart: "0" }}>
                    {dataBase[selectedCategory].map((book) => (
                        <li
                            key={book.name}
                            style={{
                                listStyle: "none",
                                padding: "0.5rem",
                                border: "2px solid black",
                                width: "70%",
                                margin: "1rem 1rem",
                                borderRadius: "1rem"
                            }}
                        >
                            {" "}
                            <div style={{ fontSize: "larger" }}> {book.name} </div>
                            <div style={{ fontSize: "smaller" }}> {book.rating} </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}