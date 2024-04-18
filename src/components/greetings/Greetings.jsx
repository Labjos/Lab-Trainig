import './Greetings.css';


const language = {
    "de":"Hallo",
    "en":"Hello",
    "es":"Hola",
    "fr":"Bonjour" 
}
function Greetings({ lang, children }) {
  return (
    <div className='greetings'>
        {language[lang]} : {children}
    </div>
  )
}

export default Greetings