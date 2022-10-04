import './App.css';
import close from './close.png'

function App() {
  return (
    <div class="App">
        <div class="Header">My Favorite Songs</div>
        
        {/* Input Form */}
        <form class="Form">
            <input class="form-input" type="text" id="name" placeholder="Song Title"></input>
            <input class="form-input" type="text" id="name" placeholder="Artist"></input>
            <button class="form-button">ADD</button>
        </form>
        
        {/* List */}
        <div class="List">
            {/* List Item 1 */}
            <div class="list-item">
                <div class='item-primary-text item-number'>1</div>
                <div>
                    <div class='item-primary-text'>Fireworks</div>
                    <div class='item-secondary-text'>Katy Perry</div>
                </div>
                <div class='item-delete item-secondary-text'><img src={close} /></div>
            </div>

            {/* List Item 2 */}
            <div class="list-item">
                <div class='item-primary-text item-number'>2</div>
                <div>
                    <div class='item-primary-text'>Party In The USA</div>
                    <div class='item-secondary-text'>Miley Cyrus</div>
                </div>
                <div class='item-delete item-secondary-text'><img src={close} /></div>
            </div>

            {/* List Item 2 */}
            <div class="list-item">
                <div class='item-primary-text item-number'>3</div>
                <div>
                    <div class='item-primary-text'>Dynamite</div>
                    <div class='item-secondary-text'>Taio Cruz</div>
                </div>
                <div class='item-delete item-secondary-text'><img src={close} /></div>
            </div>
        </div>
    </div>
  );
}

export default App;
