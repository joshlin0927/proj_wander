import React, { useEffect } from 'react'
import Slider from '@material-ui/core/Slider'
import Tooltip from '@material-ui/core/Tooltip'

function PlayerControls(props) {
  const {
    handlePlayNPause,
    playing,
    fade,
    handleMute,
    muted,
    handleVolumeChange,
    handleVolumeUp,
    volume,
    toggleFullScreen,
    played,
    seeking,
    seekingMouseDown,
    seekingMouseUp,
    elapsedTime,
    totalDuration,
  } = props

  function ValueLabelComponent(props) {
    const { children, open, value } = props

    return (
      <Tooltip
        open={open}
        enterTouchDelay={0}
        placement="top"
        title={value}
      >
        {children}
      </Tooltip>
    )
  }

  useEffect(() => {})

  return (
    <>
      <div
        className={
          playing
            ? 'playerControlWrap playerBGCChange'
            : 'playerControlWrap'
        }
      >
        <div
          id="MainPlayerControl"
          className={'MainPlayerControl'}
          onClick={handlePlayNPause}
        >
          <div id="bigPlayIcon" className="playIcon">
            {playing ? (
              <i className={`fas fa-pause ${fade}`}></i>
            ) : (
              <i className="fas fa-play"></i>
            )}
          </div>
        </div>

        {/* 下方控制列 */}
        <div className="bottomControlGRP">
          <div className="videoProgressSlider w-100">
            <Slider
              min={0}
              max={100}
              value={played * 100}
              ValueLabelComponent={ValueLabelComponent}
              onChange={seeking}
              onMouseDown={seekingMouseDown}
              onChangeCommitted={seekingMouseUp}
            />
          </div>

          <div className="bottomButtonControlGRP">
            <div className="d-flex align-items-center pl-2 w-100">
              <div
                id="smallPlayIcon"
                className="bottomIcons p-2"
                onClick={handlePlayNPause}
              >
                {playing ? (
                  <i className="fas fa-pause"></i>
                ) : (
                  <i className="fas fa-play"></i>
                )}
              </div>
              <div className="volumeControl">
                <div
                  id="muteIcon"
                  className="bottomIcons p-2"
                  onClick={handleMute}
                >
                  {muted ? (
                    <i className="fas fa-volume-mute"></i>
                  ) : (
                    <i className="fas fa-volume-up"></i>
                  )}
                </div>
                <Slider
                  size="small"
                  min={0}
                  max={100}
                  value={volume * 100}
                  className="volumeSlider"
                  onChange={handleVolumeChange}
                  onChangeCommitted={handleVolumeUp}
                />
              </div>
            </div>
            <div className="d-flex align-items-center ml-auto px-2 ">
              <div className="vidDuration">
                <span>
                  {elapsedTime}/{totalDuration}
                </span>
              </div>
              <div
                id="fullScreen"
                className="bottomIcons pr-2"
                onClick={toggleFullScreen}
              >
                <i className="fas fa-expand"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default PlayerControls
