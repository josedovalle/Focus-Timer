// DOM
// Document Object Model
// Event-driven
// programação imperativa
// callback
// refatoração: mudar o código para deixa-lo mais legivel
// deixar o código mais performático
// SEM ALTERAR suas funcionalidades
// EcmaScript - 2015 ES6 Modules

import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

const sound = Sound()

Events({controls, timer, sound})
