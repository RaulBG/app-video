import React from 'react'
import Media from './media.js'
import './playlist.css'
import Play from '../../icons/components/play'
import Pause from '../../icons/components/pause'
import Volume from '../../icons/components/volume'
import FullScreen from '../../icons/components/fullscreen'


function Playlist (props) {
  const playlist = props.data.categories[0].playlist
  return (
    <div className="Playlist">
      <Play
        size={60}
        color="red"
      />
      <Pause
        size={60}
        color="deepskyblue"
      />
      <Volume
        size={60}
        color="orange"
      />
      <FullScreen
        size={60}
        color="crimson"
      />
      {
        playlist.map((item) => {
          return <Media {...item} key={item.id} />
        })
      }
    </div>
  )
}

export default Playlist
