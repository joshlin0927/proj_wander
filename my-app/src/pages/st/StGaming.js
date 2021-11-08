import React, { useEffect } from 'react'
import $ from 'jquery'
import { devUrl, SentenceGame_SOT } from '../../config'
import { withRouter } from 'react-router-dom'

import './style/gamestart.css'
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import StBgDecorationNormal from '../../components/st/StBgDecorationNormal'
import Footer from '../../components/Footer'

function StGaming(props) {
  const category = sessionStorage.getItem('category')
    ? JSON.parse(sessionStorage.getItem('category'))
    : ''
  function wordSound(e) {
    const word = e.target.innerText
    //urlencoded法
    fetch(`${SentenceGame_SOT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        word: word,
        lang: category.lang,
      }),
    })
      .then((r) => r.json())
      .then((obj) => {
        console.log('SOT ID:', JSON.stringify(obj, null, 4))
        if (obj.success) {
          const audio = new Audio(
            `https://storage.soundoftext.com/${obj.id}.mp3`
          )
          audio.play()
        } else {
          alert('發送失敗')
        }
      })
  }
  useEffect(() => {
    const dataArr = sessionStorage.getItem('array')
      ? JSON.parse(sessionStorage.getItem('array'))
      : []
    // 問題顯示部分(點了按鈕123才顯示問題)
    let question = []
    let wordArr = []
    let questionID = -1
    let result = []

    function setQuestion() {
      // 先清空陣列跟頁面顯示的word
      question = []
      document.querySelector('.selectWord').innerHTML = ''
      document.querySelector('.answer').innerHTML = ''
      $('.sendAns').show()
      $('.showAns').hide()
      $('.gameNextBtn').hide()
      $('.doneCover').hide()
      $('.answer')
        .removeClass('correct-shadow')
        .removeClass('wrong-shadow')
      // 把dataArr中的問題與答案顯示在頁面上
      questionID++
      $('#quesID').text(questionID + 1)
      $('.question-text>span').text(
        dataArr[questionID].ques
      )
      question = question.concat(
        dataArr[questionID].ans.split(' ')
      )
      // 隨機排列
      question.sort((a, b) => {
        return Math.random() - 0.5
      })
      const newQuestion = [...question]
      // 畫面呈現
      for (let i = 0; i < question.length; i++) {
        question[
          i
        ] = `<div class="word-bg"><div id="word${i}" class="word">${question[i]}</div></div>`
        document.querySelector('.selectWord').innerHTML +=
          question[i]
      }
      // 設定好答案與選擇區的高度同高
      const SH = $('.selectWord').css('height')
      $('.answer').css('height', SH)
      // 把問題單字呈現後的資訊存在wordArr中
      newQuestion.forEach((v, i) => {
        const word = $(`#word${i}`)
        wordArr[i] = {
          text: v,
          x: word.position().left,
          y: word.position().top,
        }
      })
    }
    // 設定問題&點next再觸發
    setQuestion()
    $('.gameNextBtn').on('click', function () {
      if (questionID < dataArr.length - 1) {
        setQuestion()
      } else {
        console.log('好了')
      }
    })

    // 動畫部分
    let transitionSec = 300 //word飛行動畫時間
    $('.container').on('click', '.word', function (e) {
      // 目前點到的word的座標
      const wLeft = $(this).position().left
      const wTop = $(this).position().top

      //取得word寬度
      const wordWidth =
        $(this).width() +
        parseInt($(this).css('padding-left')) +
        parseInt($(this).css('padding-right'))

      if ($(this).parent().hasClass('word-bg')) {
        wordSound(e)
        // 把原本的word藏起來
        $(this).css('opacity', 0).prop('disabled', true)
        const wordToUp = $(this)
          .clone()
          .appendTo($('.answer'))
          .css('margin', '5px')
        // 已經先UP的word的座標
        const aLeft = $(wordToUp).position().left + 5 //word-bg的margin額外加到wordToUp
        const aTop = $(wordToUp).position().top + 5
        //複製一個word到底層當動畫
        const newWord = $(this)
          .clone()
          .appendTo($('.animationWord'))
          .css('width', `${wordWidth}px`)
          .css('position', 'absolute')
          .css('transition', `${transitionSec / 1000}s`)
        // 複製過的word擺好位置
        function wordAnimation() {
          newWord
            .css('opacity', 1)
            .css(
              'transform',
              `translate(${wLeft}px, ${wTop}px)`
            )
        }
        function wordMoving() {
          setTimeout(() => {
            newWord.css(
              'transform',
              `translate(${aLeft}px, ${aTop}px)`
            )
          }, 4)
        }
        function wordUp() {
          setTimeout(() => {
            newWord.remove()
            wordToUp.css('opacity', 1)
          }, transitionSec)
        }

        async function word() {
          await wordAnimation()
          await wordMoving()
          await wordUp()
        }
        word()
      } else {
        //複製一個word到底層當動畫並擺好位置
        const newWord = $(this)
          .clone()
          .appendTo($('.animationWord'))
          .css('width', `${wordWidth}px`)
          .css('position', 'absolute')
          .css('transition', `${transitionSec / 1000}s`)
          .css('opacity', 1)
          .css(
            'transform',
            `translate(${wLeft}px, ${wTop}px)`
          )
        // 以ID搜尋在wordArr中存的原始座標
        const wordID = $(this).attr('id')
        const originLeft =
          wordArr[parseInt(wordID.replace('word', ''))].x
        const originTop =
          wordArr[parseInt(wordID.replace('word', ''))].y

        setTimeout(() => {
          newWord.css(
            'transform',
            `translate(${originLeft - 5}px, ${
              originTop - 5
            }px)`
          )
        }, 4)
        setTimeout(() => {
          newWord.remove()
          $('.word-bg>.word').each(function () {
            if ($(this).attr('id') === wordID) {
              $(this)
                .css('opacity', 1)
                .prop('disabled', false)
            }
          })
        }, transitionSec)
        $(this).remove()
      }
    })

    // 送出答案部分
    $('.sendAns').on('click', function () {
      let str = ''
      $('.answer>.word').each(function () {
        str += $(this).text() + ' '
      })
      $('.sendAns').hide()
      $('.gameNextBtn').show()
      $('.doneCover').show()

      if (str.indexOf(dataArr[questionID].ans) === 0) {
        $('.ansCorrect').fadeIn(500).fadeOut(1000)
        $('.answer').addClass('correct-shadow')
        result.push(1)
      } else {
        $('.ansWrong').fadeIn(500).fadeOut(1000)
        $('.answer').addClass('wrong-shadow')
        $('.showAns')
          .text(`正確答案： ${dataArr[questionID].ans}`)
          .fadeIn(500)
        result.push(0)
      }
      console.log('QID:', questionID)
      console.log('result:', result)
      if (questionID === dataArr.length - 1) {
        $('.gameNextBtn').hide()
        $('.finishBtn').show()
        console.log('到底了')
      }
    })
    $('.finishBtn').on('click', function () {
      console.log('set result:', result)
      sessionStorage.setItem(
        'gameresult',
        JSON.stringify(result)
      )
    })
  }, [])
  return (
    <>
      <div className="container-fluid mainpic mainContent">
        <div className="container">
          <div className="row justify-content-center">
            <MultiLevelBreadCrumb />
          </div>
          <div className="row">
            <div className="stGamingContent container">
              <div className="row my-3 no-wrap align-items-center">
                <h2 className="m-0">請用英文拼出此句子</h2>
                <div className="quesID" id="quesID">
                  0
                </div>
              </div>
              <div className="row flex-nowrap">
                <div className="question-pic">
                  <img
                    src={`${devUrl}/images/gaming/stickman.png`}
                    alt=""
                  />
                </div>
                <div className="question-text d-flex align-items-center">
                  <span></span>
                </div>
              </div>
              <div className="row position-relative">
                <div className="col-12 mt-3">
                  <span>作答區：</span>
                </div>
                <div className="answer"></div>
                <div className="col-12">
                  <span>單字選擇區：</span>
                </div>
                <div className="selectWord"></div>
                <div className="animationWord"></div>
                <div className="doneCover"></div>
                <div className="ansCorrect">
                  <img
                    src={`${devUrl}/images/gaming/correct_icon.svg`}
                    alt=""
                  />
                </div>
                <div className="ansWrong">
                  <img
                    src={`${devUrl}/images/gaming/wrong_icon.svg`}
                    alt=""
                  />
                </div>
              </div>
              <div className="row gameBtns">
                <div className="showAns">正確答案：</div>
                <div className="btn sendAns">Done</div>
                <div className="btn gameNextBtn">Next</div>
                <div
                  className="btn finishBtn"
                  onClick={() => {
                    props.history.push(
                      '/StIndex/StGameFinish'
                    )
                  }}
                >
                  Finish
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StBgDecorationNormal />
      <div className="bg"> </div>
      <Footer />
    </>
  )
}

export default withRouter(StGaming)
