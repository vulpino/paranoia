import Credits from './Credits'
import Intro from './Intro'

import Background from '../Background'

export default (panel) => ({
  background: ({ ...props }) => (<Background {...props} id='N9VIxcst3Pg' />),
  timeline: [
    panel.awaitEvent('youtube-ready'),
    panel.wait(47000), // TODO: Get length of video and place time here
    panel.showOptions(),
    panel.wait(15000),
    panel.go(Credits)
  ],
  options: [
    { text: 'WELL THERES A FULL BLOWN REBELLION', onSelect: () => { panel.go(Intro)() } },
    { text: 'BUT YOURE EASY TO CONFUSE', onSelect: () => { panel.go(Credits)() } }
  ]
})

// id: w10-3FQMep0
