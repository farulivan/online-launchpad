import { useEffect, useState } from 'react'

function App() {
  const [display, setDisplay] = useState('')

  // -- to Test when react Render
  // useEffect(() => {
  //   console.log('render')
  // })
  
  const musicSample = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'AcidKindaSynth',
      src: 'AcidKindaSynth.wav'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'BouncyDrums',
      src: 'BouncyDrums.wav'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'CyberpunkDrums',
      src: 'CyberpunkDrums.wav'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'CyberpunkUplifter',
      src: 'CyberpunkUplifter.wav'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'MachineGunBass',
      src: 'MachineGunBass.wav'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'PercussiveSynth',
      src: 'PercussiveSynth.wav'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "PunchierKick",
      src: 'PunchierKick.wav'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'SmackSnare',
      src: 'SmackSnare.wav'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'WobbleArpBass',
      src: 'WobbleArpBass.wav'
    }
  ];

  const LaunchPadContainer = () => {
    
    document.addEventListener('keyup', (e) => {
      const keyPad = e.key.toUpperCase()
      const sound = document.getElementById(keyPad)
      setDisplay(sound.parentElement.id)
      sound.play()
      
    })

    const handleClick = (e) => {
      const keyPad = e.target.innerText
      const sound = document.getElementById(keyPad)
      setDisplay(sound.parentElement.id)
      sound.play()
    }

    const launchPad = musicSample.map(data => {

      return (
        <button onClick={handleClick} type="button" key={data.keyTrigger} id={data.id} className="drum-pad cyan-glow">
          <audio id={data.keyTrigger} className="clip" key={data.keyCode} src={data.src} type="audio/mpeg">
          </audio>  
          {data.keyTrigger}
        </button>
      )
    })
      
    return (  
      <div>{launchPad}</div>
    )
  }

  return (
    <div id="drum-machine" className="App">
        <div className="flex h-screen bg-slate-500 p-10">
          <div className="m-auto bg-slate-900">
            <div className="grid grid-cols-3 gap-2 p-5">
              <LaunchPadContainer />
            </div>
            <div>
              <h1 id="display" className="text-slate-200">{display}</h1>
            </div> 
          </div>
        </div>
    </div>
  )
}

export default App
