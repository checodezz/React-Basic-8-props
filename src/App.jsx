import "./App.css";

//1. Create a React component called WelcomeMessage to display the message "Welcome, Emily!". Pass the user name, Emily as props.

const WelcomeMessage = (props) => {
  return <h1>Welcome {props.name}</h1>;
};

//2. Create a React component called BookDetails to display the following details. Pass the book data object as props.

const bookData = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  genre: "Classic",
};

const BookDetails = (props) => {
  return (
    <div>
      <h2>Book Details</h2>
      <p>Title: {props.data.title}</p>
      <p>Author: {props.data.author}</p>
      <p>Genre: {props.data.genre}</p>
    </div>
  );
};

//3. Create a React component called ArticleInformation to display the following details. Pass the article data object as props.

const articleData = {
  title: "The Power of Habit",
  author: "Charles Duhigg",
  publishedDate: "March 1, 2024",
};

const ArticleInformation = (props) => {
  return (
    <div>
      <h2>Article Information</h2>
      <p>Title: {props.data.title}</p>
      <p>Author: {props.data.author}</p>
      <p>Published Date: {props.data.publishedDate}</p>
    </div>
  );
};

//4. Create a React component called ProductDetails to display the following details. Pass the product data object as props.

const productData = {
  name: "Smartphone",
  brand: "Samsung",
  price: 799.99,
};

const ProductDetails = (props) => {
  return (
    <div>
      <h2>Product Details</h2>
      <p>Name: {props.data.name}</p>
      <p>Brand: {props.data.brand}</p>
      <p>Price: ${props.data.price}</p>
    </div>
  );
};

//5. Create a React component called EventDetails to display the following details. Pass the event data object as props.

const eventData = {
  title: "Tech Conference 2024",
  location: "San Francisco",
  date: "April 15, 2024",
};

const EventDetails = (props) => {
  return (
    <div>
      <h2>Event Details</h2>
      <p>Title: {props.data.title}</p>
      <p>Location: {props.data.location}</p>
      <p>Date: {props.data.date}</p>
    </div>
  );
};

//6. Create a React component called UserProfile to display the name and avatar image. Pass the name and avatar URL as props.
const UserProfile = (props) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {props.name}</p>
      <img src={props.img} alt={props.alt} />
    </div>
  );
};

export default function App() {
  return (
    <div>
      <WelcomeMessage name="Emily" />
      <BookDetails data={bookData} />
      <ArticleInformation data={articleData} />
      <ProductDetails data={productData} />
      <EventDetails data={eventData} />
      <UserProfile
        name="Chris"
        img="https://via.placeholder.com/150"
        alt="placehold"
      />
    </div>
  );
}
