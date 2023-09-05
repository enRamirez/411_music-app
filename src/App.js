import React, { useState } from 'react';
import Header from './components/Header';
import SignIn from './components/SignIn';
import OnlineMode from './components/OnlineMode'
import './App.css';
import MasterVolume from './components/MasterVolume';
import Message from './components/Message'
import CardBlock from './components/Cards';
import Quality from './components/Quality'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOnline, setIsOnline] = React.useState(false);
  const [volume, setVolume] = useState(20);
  const [quality, setQuality] = useState('Normal');

  const offlineNotification = "Your application is offline. You won't be able to share or stream music to other devices.";
  const highVolumeNotification = "Listening to music at a high volume could cause long-term hearing loss.";
  const lowQualityNotification = "Music quality is degraded. Increase quality if your connection allows it.";

  const highVolume = volume > 80;
  const lowQuality = quality === 'Low';
  
  return (
    <div className="App">
      <Header />
      {isLoggedIn ? 
        (
          <>
            <section className="container">
          <CardBlock
            title="Online Mode"
            description="Is this application connected to the internet?"
            component={OnlineMode}
            isOnline={isOnline}
            setIsOnline={setIsOnline}
          />
          <CardBlock
            title="Master Volume"
            description="Overrides all other sound settings in this application"
            component={MasterVolume}
            volume={volume}
            setVolume={setVolume}
          />
          <CardBlock
            title="Sound Quality"
            description="Manually control the music quality in event of poor connection"
            component={Quality}
            quality={quality}
            setQuality={setQuality}
          />
        </section>


            <div>
              <h3>System Notifications:</h3>
              {/* show the notifications here*/}
              <Message toggle={!isOnline} message={offlineNotification} />
              <Message toggle={highVolume} message={highVolumeNotification} />
              <Message toggle={lowQuality} message={lowQualityNotification} />
            </div>
          </>
        ) : (
          
          <SignIn setIsLoggedIn = {setIsLoggedIn}/>
        )     
      }
    </div>
  );
}

export default App;
