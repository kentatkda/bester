import React from 'react'

// @ts-expect-error TS(2307): Cannot find module './images/events/christmasparty... Remove this comment to see the full error message
import  ChristmasImg  from './images/events/christmasparty.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/events/BBQ.jpg' or it... Remove this comment to see the full error message
import  BBQImg  from './images/events/BBQ.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/events/gassyuku.jpg' ... Remove this comment to see the full error message
import  ShinkanGaImg  from './images/events/gassyuku.jpg';
// @ts-expect-error TS(2307): Cannot find module './images/events/icho.jpg' or i... Remove this comment to see the full error message
import IchoImg from './images/events/icho.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/events/bestercup.jpg'... Remove this comment to see the full error message
import BestercupImg from './images/events/bestercup.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/events/imohori.jpg' o... Remove this comment to see the full error message
import ImohoriImg from './images/events/imohori.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/events/akiga.jpg' or ... Remove this comment to see the full error message
import AkigaImg from './images/events/akiga.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/events/natuga.jpg' or... Remove this comment to see the full error message
import NatsugaImg from './images/events/natuga.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/events/hanabi.jpg' or... Remove this comment to see the full error message
import HanabiImg from './images/events/hanabi.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/events/haruga.jpg' or... Remove this comment to see the full error message
import HarugaImg from './images/events/haruga.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/events/gogatsu.jpg' o... Remove this comment to see the full error message
import GogatsuImg from './images/events/gogatsu.jpg'

const EventDetailsHeader = () => {
    return (
        <h1 className='mb-3 d-flex text-uppercase fw-bold text-align-center justify-content-center' 
        style={{
            margin:'auto'
        }}>
            BESTER &nbsp;
            <p className='text-warning'> EVENTS</p>
        </h1>
    )
}


function EventsDetails() {
    const data = [
        {title: "5/3 新歓合宿",
        src:ShinkanGaImg, 
        desc:"新歓合宿は、GWに開催される新年度最初の合宿になります。毎年新入生はこの合宿を機に仲良くなることが多く、テニスもみっちり教えてもらえるのでとても上達できるのが特徴です"
        },
        {title: "5/14 五月祭",
        src:GogatsuImg, 
        desc:"五月祭とは、5月に開催される東大の学園祭です。BESTERは毎年姑息にも、原価0円同然のかき氷を売りつけて多額の富を得ようと画策し続けています。かき氷を売るというのは、天候に売り上げが大きく左右されるいわばギャンブルなのではらはらしますが、去年はそのギャンブルに勝ち打ち上げがとても豪華になりました。"
        },
        {title: "5/21 BBQ",
        src:BBQImg, 
        desc:"毎年5月中旬に開かれるのがBBQです。BBQはOB・OGの人達が集まるイベントの一つで河川敷でわいわい肉を焼きながら盛り上がります。1年生は先輩たちと仲良くなれる絶好のチャンス！是非ご参加ください。"
        },
        {title: "7/31 花火大会",
        src:HanabiImg, 
        desc:"新歓合宿は、GWに開催される新年度最初の合宿になります。毎年新入生はこの合宿を機に仲良くなることが多く、テニスもみっちり教えてもらえるのでとても上達できるのが特徴です"
        },
        {title: "8/15 夏合宿",
        src:NatsugaImg, 
        desc:"夏合宿は、BESTER一人気のある合宿です！なぜか？?それは、花火や肝試し、BBQなど様々なエンタメが詰め込まれているからです。１年生はこの合宿ぐらいから上級生と仲を深めるチャンスかも！？"
        },
        {title: "9/13 秋合宿",
        src:AkigaImg, 
        desc:"秋合宿は夏休み2つ目の合宿で、この合宿で執行交代が行われます。執行交代とは、サークルを運営する学年が交代することを指し、この合宿から徐々に1年生を中心にしてBESTERは動いていくことになります。"
        },
        {title: "10/31 芋ほり",
        src:ImohoriImg, 
        desc:"芋ほりは、BESTERの数少ない特徴の一つです。あまりに東大テニサーが多く差別化が難しいため、数年前までは「芋ほりイベント」を差別化に用いていたほどBESTER特有のイベントになっています！毎年2男が埋められる伝統があるとかないとか..."
        },
        {title: "12/1 銀杏杯",
        src:IchoImg, 
        desc:"銀杏杯は12月に行われる銀杏系テニスサークルが一堂に会する大会です。この大会では大学1,2年生のみ出場を許されているので、1,2年生は比較的簡単に試合に出場できるのも特徴の一つです。BESTERは強豪ぞろいの中昨年は準決勝まで進むことができました。"
        },
        {title: "12/15 クリスマスパーティ",
        src:ChristmasImg, 
        desc:"クリスマスパーティはべスターを代表するイベントで、ビンゴ大会・プレゼント交換など様々な企画が盛りだくさんで毎年とても盛り上がります。イベント係がサンタコスに身を包むのも毎年の風物詩です。"
        },
        {title: "2/1 べスターカップ",
        src:BestercupImg, 
        desc:"べスターカップは、男女がペアになって出場するべスター内のダブルス大会です。毎年上位のペアには豪華景品が与えられ、とても盛り上がる一大テニスイベントとなっています。"
        },
        {title: "3/10 春合宿",
        src:HarugaImg, 
        desc:"4年生が卒業してサークルを去ってしまう為、春合宿は4年生が来れる最後の合宿です。なので春合宿に参加する人数は4年生の人望に比例するといえるでしょう。"
        },
    ]

    
    const EventCards = data.map((item) =>
    <div className='container justify-content-space-between text-align-center shadow'
    style={{
      width: '80%',
      marginBottom: '10vh'
    }}>
        <div className='row'>
            <div className='col-lg-6 d-flex justify-content-center'>
                <img src={item.src} className='img-fluid border border-4 border-warning' alt="" style={{
                    height:'80%',
                    margin:'auto',
                    justifyContent:'center',

                }}/>
            </div>
            <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-2'>
                <b>{item.title}</b>
                <div className='py-2 px-1'>
                  {item.desc}
                </div>
            </div>
        </div>
    </div>
        )
    return (
        <div>
            <div className='container py-5 justify-content-center'
            style={{
                marginTop: '150px'
            }}>
                <EventDetailsHeader/>
                <div className='eventCards'
                style={{
                    marginTop: '100px'
                }}>
                    {EventCards}
                </div>
            </div>
        </div>
    )
}

export default EventsDetails
