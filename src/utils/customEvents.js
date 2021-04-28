const fireViewEndCustomEvent = () => {
  console.log("Firing Custom Event 'event-view-end'")
  const event = new CustomEvent('event-view-end')
  const obj = document.querySelector('#app')
  obj.dispatchEvent(event)
}

const fireViewStartCustomEvent = (data) => {
  console.log("Firing Custom Event 'event-view-start'")
  const event = new CustomEvent('event-view-start', data)
  document.body.dispatchEvent(event)
}

const fireActionTriggerCustomEvent = (target, data) => {
  console.log('Firing Custom Triggered Event')
  const event = new CustomEvent('event-action-trigger', data)
  const obj = target.dispatchEvent(event)
}

export {
  fireViewEndCustomEvent,
  fireViewStartCustomEvent,
  fireActionTriggerCustomEvent
}
