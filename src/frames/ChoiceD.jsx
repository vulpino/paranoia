import ChoiceI from './ChoiceI'
import ChoiceJ from './ChoiceJ'

import Background from '../Background'

export default (panel) => ({
  background: ({ ...props }) => (<Background {...props} id='0VOmn5jZGRc' />), // TODO: Implement yt video background
  timeline: [
    panel.awaitEvent('youtube-ready'),
    panel.wait(154000), // TODO: Get length of video and place time here
    panel.showOptions(),
    panel.wait(15000),
    panel.go(ChoiceI)
  ],
  options: [
    { text: 'CHOICE D OPTION A', onSelect: () => { panel.go(ChoiceI)() } },
    { text: 'CHOICE D OPTION B', onSelect: () => { panel.go(ChoiceJ)() } }
  ]
})

// MTTR5m5xR18
