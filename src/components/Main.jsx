import React, { useState } from 'react'
import anishaImg from '../images/avatar-anisha.png'
import aliBravo from '../images/avatar-ali.png'
import richardImg from '../images/avatar-richard.png'
import shanaiImg from '../images/avatar-shanai.png'

const Main = () => {

  const [currentImg, setNewImg] = useState(0)

  const changeImage = (index) => {
    setNewImg(index)
  }

  const manageItemsArr = [{
    item_no: "01",
    heading: "Track company-wide progress",
    para: " See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
  },
  {
    item_no: "02",
    heading: "Advanced built-in reports",
    para: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
  },
  {
    item_no: "03",
    heading: "Everything you need in one place",
    para: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
  }]

  const cardArr = [{
    image: anishaImg,
    name: "Anisha Li",
    info: " “Manage has supercharged our team’s workflow. The ability to maintain  visibility on larger milestones at all times keeps everyone motivated.”"
  },
  {
    image: aliBravo,
    name: "Ali Bravo",
    info: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
  },
  {
    image: richardImg,
    name: "Richard Watts",
    info: "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”"
  }, {
    image: shanaiImg,
    name: "Shanai Gough",
    info: "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”"
  }]

  return (<>

    <main className="main container">
      <section className="first-section">
        <div className="manage-data flex flex-col">
          <h2 className="common-h2">What’s different about Manage?</h2>
          <p className="common-para">Manage provides all the functionality your team needs, without
            the complexity. Our software is tailor-made for modern digital
            product teams.</p>
        </div>
        <div className="manage-list flex flex-col">

          {
            manageItemsArr.map((elem, index) => {

              return <div key={index} className="manage-list-items flex">
                <div className="manage-list-items-top">
                  <div className="item-number">{elem.item_no}</div>
                </div>
                <div className="manage-list-items-bottom flex flex-col">
                  <h3 className="common-h3">{elem.heading}</h3>
                  <p className="common-para">{elem.para}</p>
                </div>
              </div>

            })
          }

        </div>
      </section>

      <section className='second-section'>

        <h2 className="common-h2">What they’ve said</h2>
        <div className="desk-card card-crousel">

          {
            cardArr.map((elem, index) => <div key={index} className="card">
              <div className="card-data">
                <div className="card-img-container">
                  <img src={elem.image} alt="" className="card-img" />
                </div>
                <div className="card-heading">
                  <h3 className="common-h3">{elem.name}</h3>
                  <p className="common-para">{elem.info}</p>
                </div>
              </div>
            </div>


            )
          }

        </div>

        <div className="mob-card card-crousel">

          {
            cardArr.map((elem, index) => index === currentImg && <div key={index} className="card">
              <div className="card-data">
                <div className="card-img-container">
                  <img src={elem.image} alt="" className="card-img" />
                </div>
                <div className="card-heading">
                  <h3 className="common-h3">{elem.name}</h3>
                  <p className="common-para">{elem.info}</p>
                </div>
              </div>
            </div>


            )
          }

        </div>

        <ul className="card-ul">
          {
            cardArr.map((elem, index) => {
              return <li onClick={() => changeImage(index)} className={currentImg === index ? "card-li active" : "card-li"}>{ }</li>
            })
          }
        </ul>

        <button className="btn">Get Started</button>
      </section>


    </main>


    <section className="third-section container">
      <h2 className="common-h2 bottom-h2">
        Simplify how your team works today.</h2>
      <div className="">
        <button className="btn bottom-btn">Get Started</button></div>
    </section>
  </>
  )
}

export default Main