import { createContext, useState  } from "react";

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books] = useState([
        {title: 'name of the wind', id: 1},
        {title: 'name of the wind 2', id: 2},
        {title: 'name of the wind 3', id: 3},
        {title: 'name of the wind 4', id: 4},

    ])
    return ( 
        <BookContext.Provider value={{books}}>
           { props.children } 
        </BookContext.Provider>
     );
}
 
export default BookContextProvider