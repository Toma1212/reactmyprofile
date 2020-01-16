import React from 'react'
import './css/History.css';

const historyList = [
      {
        time: '2017/3',
        content: '戸畑卒業'
      },
      {
        time: '2017/4',
        content: '九州大学入学'
      },
      {
        time: '2017/34',
        content: '23wgtrgv\ntrhbtreh¥nbteynyernrywnrye4'
      },
      {
        time: '2017/34',
        content: '234'
      },
      {
        time: '2020/01 ~',
        content: '現在'
      }
    ];

class History extends React.Component {

  render() {
    return (
            <section className="timeline">
              <ol>
              {historyList.map((historyItem) => {
                 return (
                     <li>
                       <div className="timeline-content"　style={{whiteSpace: 'pre-line'}}>
                         <p className="timeline-date">{historyItem.time}</p>
                         <p>{historyItem.content}</p>
                       </div>
                     </li>
                 )
             })}
             </ol>
              <div className="arrows">
                <button className="arrow arrow__prev disabled" disabled>←</button>
                <button className="arrow arrow__next">→</button>
              </div>
            </section>

    );
  }
}

export default History;
