import './style.css';
import Header from './components/Header'
import Project from './components/Project'
import Nav from './components/Nav'
import Footer from "./components/Footer"

function App() {
  return (
    <div>
    <Nav 
    />
    <Header />
    <Project 
      title="01 Poster Maker"
      description="Make your own motivational quote poster w/ random image from Unsplash"
      tag="React.js"
      demo="Demo ↗"
      demolink="https://poster-generator.ivavay.repl.co/"
      seecode ="See Code ↗"
      repolink= "https://github.com/ivavay/poster-generator" 
    />
    <Project 
      title="02 Chengyu"
      description="Open a new tab to see a random Chinese idiom w/ English translation "
      tag="Javascript"
      demo="Demo ↗"
      demolink="https://chrome.google.com/webstore/detail/chengyu/hgedahiaddaonjomddplfchiiemhifkn"
      seecode ="See Code ↗"
      repolink="https://github.com/ivavay/chengyu-extension"
    />
    <Project 
      title="03 Blackout Poetry"
      description="Block out words to start writing poetry"
      tag="CSS"
      demo="Demo ↗"
      demolink="https://blackout-poetry-digital.glitch.me/"
      seecode ="See Code ↗"
      repolink="https://github.com/ivavay/jacobs-wonderbar"
    />
    <Footer />
    </div>
  );
}

export default App;
