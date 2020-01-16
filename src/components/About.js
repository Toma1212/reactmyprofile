import React from 'react'
import Card from './Card'
// import Timeline from './Timeline'
import History from './History'
import Contact from './Contact'
import posed from 'react-pose'
import './css/About.css';
import lara from '../image/lang/laravel.svg';
import html from '../image/lang/html.svg';
import python from '../image/lang/python.svg';
import react from '../image/lang/react.svg';

const props = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
}
const Box = posed.div(props)

class About extends React.Component {
  state = { isVisible: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 750);
  }
  render(){
    return(
      <div>
       <Box pose={this.state.isVisible ? 'visible' : 'hidden'} >
          <div className="about_container">
           <div className="about_container_head">-profile-</div>
              <div className="about_description">
              <table>
                <tr>
                  <th>名前</th>
                  <td>白木　冬馬</td>
                </tr>
                <tr>
                  <th>生年月日</th>
                  <td>1998 / 12 / 12 </td>
                </tr>
                <tr>
                  <th>学校</th>
                  <td>九州大学</td>
                </tr>
                <tr>
                  <th>学部・学科</th>
                  <td>工学部地球環境工学科</td>
                </tr>
                <tr>
                  <th>希望職種</th>
                  <td>エンジニア</td>
                </tr>
              </table>
             </div>
           </div>
         <div className="about_container">
            <div className="about_container_head">-history-</div>
              <History/>
          </div>
        <div className="about_container">
          <div className="about_container_head">-skill-</div>
            <div className="about_description">
            <div className="cards">
              <Card img={html} title="HTML/CSS" explain="基本的なHTML5、CSSについては"/>
              <Card img={lara} title="PHP" explain="Laravelを利用したWebアプリ開発の勉強をしています。タスク管理アプリ等の開発を行い動作を確認することで経験値を上げています。また、チームラボのサマーインターンでLaravelを用いて画像投稿アプリの開発を行いました。学習プロセスとしては、Progateというプログラミング学習サービスを終えた後、PHPの入門書を一冊学習し、チームラボインターンの事前課題や学習サイトで勉強して、インターンに臨みました。インターン参加後、Qita記事などで調べながらタスク管理アプリの作成を行いました。そしてそれを編集してherokuで公開し学校の友達と使っています。"/>
              <Card img={python} title="Python" explain="Progateで勉強した後、参考書を１冊取り組みました。AtCorderやPaizaのような数学の問題の処理などを解く際には、PHPではなく感覚的に記述しやすく可読性の高いPythonを使用しています。"/>
              <Card img={react} title="React" explain="Progateで勉強した後、このサイトを作成。"/>
            </div>
            </div>
         </div>
         </Box>
        </div>
    )
  }
}


export default About;
