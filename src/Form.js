import './App.css';

function Form() {
  return (
    <form className="Form">
      <input className="form-input" type="text" id="name" placeholder="Song Title"></input>
      <input className="form-input" type="text" id="name" placeholder="Artist"></input>
      <button className="form-button">ADD</button>
    </form>
  );
}

export default Form;