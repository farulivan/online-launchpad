import { useEffect, useState } from 'react'
import Pad from './components/Pad'

function App() {
  
  document.addEventListener('keydown', (e) => {
    if(e.repeat) return
    playSound(e.key.toUpperCase())
  })


  const musicSample = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'AcidKindaSynth',
      src: 'AcidKindaSynth.wav',
      isActive: false
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'BouncyDrums',
      src: 'BouncyDrums.wav',
      isActive: false
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'CyberpunkDrums',
      src: 'CyberpunkDrums.wav',
      isActive: false
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'CyberpunkUplifter',
      src: 'CyberpunkUplifter.wav',
      isActive: false
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'MachineGunBass',
      src: 'MachineGunBass.wav',
      isActive: false
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'PercussiveSynth',
      src: 'PercussiveSynth.wav',
      isActive: false
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "PunchierKick",
      src: 'PunchierKick.wav',
      isActive: false
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'SmackSnare',
      src: 'SmackSnare.wav',
      isActive: false
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'WobbleArpBass',
      src: 'WobbleArpBass.wav',
      isActive: false
    }
  ];

  const [samples, setSamples] = useState(musicSample)

  const playSound = (key) => {
    setSamples(prevSamples => prevSamples.map(sample => (
      sample.keyTrigger === key ? 
        {...sample, isActive: !sample.isActive} 
          : sample
    )))
    const audio = document.getElementById(key)
    audio.currentTime = 0
    audio.play()
    setTimeout(() => {
      setSamples(prevSamples => prevSamples.map(sample => (
        sample.keyTrigger === key ? 
          {...sample, isActive: !sample.isActive} 
            : sample
      )))
      }, 200)
  }

  const pads = samples.map(sample => {
    return (
      <Pad
        keyTrigger = {sample.keyTrigger}
        id = {sample.id}
        key = {sample.id}
        src = {sample.src}
        playSound = {() => playSound(sample.keyTrigger)}
        isActive = {sample.isActive}
      />
    )
  })

  return (
    <div id="drum-machine" className="App">
        <div className="h-screen flex justify-center items-center bg-indigo-300">
          <div className="max-w-lg rounded-xl p-8 bg-indigo-600 text-white">
            <div className="Header text-center">
              <h1 className="text-2xl">LaunchPad</h1>
              <p className="text-sm px-5 my-1">Press key to play and combine it!</p>
            </div>
            <h1 id="display" className="text-center">Display will be here!</h1>
            <div className="grid grid-cols-3 my-5 gap-4 p-6 md:gap-7 md:p-2 text-center">
              {pads}
            </div>
          </div>
        </div>
    </div>
  )
}

export default App
