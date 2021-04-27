import "./App.css";
import IdCard from "./Components/IdCard/IdCard";
import Book from "./Components/Book/Book";
import Movie from "./Components/Movie/Movie";
import Wrapper from "./Components/Wrapper/Wrapper";

function App() {
  return (
    <div className="App">
      <h1>Characters:</h1>
      <Wrapper>
        <IdCard
          name="Frodo Baggins"
          date="22.09.2968"
          city="Shire"
          image="frodo.jpg"
        />
        <IdCard
          name="Aragorn Elessar"
          date="01.03.2931"
          city="Gondor"
          image="aragorn.jpg"
        />
        <IdCard
          name="Legolas Greenleaf"
          date="05.08.185"
          city="Woodland"
          image="legolas.jpg"
        />
      </Wrapper>
      <h1>Books:</h1>
      <Wrapper
        children={
          <>
            <Book
              title="The Fellowship of the Ring"
              year="29 July 1954"
              author="J. R. R. Tolkien."
              quote="I am in fact, a hobbit in all but size"
              image="book1.jpg"
            />
            <Book
              title="The Two Towers"
              year="11 November 1954"
              author="J. R. R. Tolkien."
              quote="I warn you, if you bore me, I shall take my revenge."
              image="book2.jpg"
            />
            <Book
              title="The Return of the King"
              year="20 October 1955"
              author="J. R. R. Tolkien."
              quote="She walks in starlight in another world."
              image="book3.jpg"
            />
          </>
        }
      ></Wrapper>
      <h1>Movies:</h1>
      <Wrapper>
        <Movie
          name="The Lord of the Rings: The Fellowship of the Ring"
          year="2001"
          genre="fantasy"
          producer="Peter Jackson"
          actors={[
            "Sean Astin",
            "Sean Bean",
            "Orlando Bloom",
            "Ian Holm",
            "Ian McKellen",
            "Viggo Mortensen",
            "Elijah Wood",
          ]}
          image="movie1.jpg"
        />
        <Movie
          name="The Lord of the Rings: The Two Towers"
          year="2002"
          genre="fantasy"
          producer="Peter Jackson"
          actors={[
            "Sean Astin",
            "Orlando Bloom",
            "Ian McKellen",
            "Viggo Mortensen",
            "Ian Holm",
            "John Rhys-Davies",
            "Elijah Wood",
          ]}
          image="movie2.jpg"
        />
        <Movie
          name="The Lord of the Rings: The Return of the King"
          year="2003"
          genre="fantasy"
          producer="Peter Jackson"
          actors={[
            "Sean Astin",
            "Orlando Bloom",
            "Ian Holm",
            "Ian McKellen",
            "Viggo Mortensen",
            "John Rhys-Davies",
            "Elijah Wood",
          ]}
          image="movie3.jpg"
        />
      </Wrapper>
    </div>
  );
}

export default App;
