import "./App.css";
import CourseList from "./components/CourseList";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      {/* You can render the component here: */}
      <Header />
      <CourseList />
      <Footer />
    </div>
  );
}

export default App;
