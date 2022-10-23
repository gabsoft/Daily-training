import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { BookContext } from "../context/BookContext"

const Booklist = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext) // Or we can use ThemeContext.Consumer returning a function that returns context to use <ThemeContext.Consumer> ( (context) => {} ) and return all jsx inside this Consumer
  const { books } = useContext(BookContext)
  const theme = isLightTheme ? light : dark

  return (
    <div className="book-list" style={ { background: theme.bg, color: theme.syntax}}>
      <ul>
        {books && books.map(book => {
          return (
            <li key={book.id} style={{ background: theme.ui }}>{book.title}</li>
          )
        })}
      </ul>
    </div>
  );
};

export default Booklist;
