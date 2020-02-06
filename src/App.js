import React from 'react';
import './css/App.css';

import ContentWindow from './components/ContentWindow.js';

import Room1 from './img/room1.jpg';
import Room2 from './img/room2.jpg';
import Room3 from './img/room3.jpg';
import Cust1 from './img/cust1.jpeg';
import Cust2 from './img/cust2.jpeg';
import Cust3 from './img/cust3.jpeg';

function App() {
  return (

    <div>
      <div class="mainBody">
        <ContentWindow source={Room1} alt="Room 1" rating="⭐️⭐️⭐️⭐️⭐️" custP={Cust1} custN="Danny S" custL="United Kingdom" review="Liz was a perfect host and I recommend this place who wants a perfect stay."/>
        <ContentWindow source={Room2} alt="Room 2" rating="⭐️⭐️⭐️⭐️⭐️" custP={Cust2} custN="Sarah X" custL="Bahamas" review="Julia and her husband have a wonderful home and we enjoyed our stay. The location is great, very walkable to the sites of York, the..."/>
        <ContentWindow source={Room3} alt="Room 3" rating="⭐️⭐️⭐️⭐️⭐️" custP={Cust3} custN="Telmo S" custL="Portugal" review="He made us feel very welcome. The neighborhood was very convenient to our rental car return and within walking distance if..."/>
      </div>
    </div>
    
  );
}

export default App;
