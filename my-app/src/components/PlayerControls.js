import React from 'react'
import {
  Slider,
  FormattedTime,
  Direction,
  PlayerIcon,
} from 'react-player-controls'

export default function PlayerControls(props) {
  const { hide, handlePlayNPause } = props
  return (
    <>
      <div className={`playerControlWrap  ${hide}`}>
        <div
          id="MainPlayerControl"
          class="MainPlayerControl"
        >
          <div
            className="playIcon"
            onClick={handlePlayNPause}
          >
            <i class="far fa-play-circle"></i>
          </div>
        </div>

        {/* 下方控制列 */}
        <div className="bottomControlGRP">
          <div item xs={12}>
            <Slider
              min={0}
              max={100}
              defaultValue={20}
              // ValueLabelComponent={ValueLabelComponent}
            />
          </div>

          <div>
            <div className="bottomButtonControlGRP">
              <div className="bottomIcons">
                <PlayerIcon fontSize="large" />
              </div>

              <div className="bottomIcons">
                <i class="fas fa-volume-up"></i>
              </div>

              <Slider
                min={0}
                max={100}
                defaultValue={100}
                className="volumeSlider"
              />

              <div className="vidDuration">
                <span>05:05</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
