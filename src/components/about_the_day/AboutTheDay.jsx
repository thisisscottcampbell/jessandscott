import React from 'react'
import './about.css'

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About The Day</h2>
      <span className="section__subtitle">oveview and what not</span>

      <div className="about__container container grid">
        {/* <img src={AboutImg} alt="" className="about__img" /> */}
        {/* <div className="about__img"></div> */}

        <div>
          <h5 className="about__description_overview">
            First and foremost, if you are reading this, we really really hope
            you can come celebrate with us because we love you and think you
            totally rock.
          </h5>
          <h6 className="about__description_overview">
            So what are we doing? Well, we aren't getting married on this exact
            day, we are absconding off to Scotland a week later and eloping in
            the Highlands (sorry, but not really). And so, for this day, we are
            celebrating our marriage-to-be with a "pre-ception" (i.e., a
            pre-wedding reception, a term coined by us for this day 😜)
          </h6>
        </div>

        <div>
          <p className="about__description_description">
            <span className="bold">Pre-ception</span>: it should be noted that
            no pre-ception is the same, ours will be something like if
            Thanksgiving were celebrated on the 4th of July at a BBQ joint in
            Venice Beach in the 60s that only allows chillers to patron and
            offers your favorite libations, outdoor seating, and sweet music.
          </p>
          <p className="about__description_description">
            In the Thanksgiving spirit, we'd like to make the day something of a
            pot luck. To be sure,{' '}
            <span className="bold">no one is expected to bring anything</span> ,
            but if you have some beer you particularly like, or wine, or maybe
            some craft soda or something, bring some and share. If you have a
            dish or party snack you like to make, if you have time, please do
            whip up a batch. More than anything, we want this to be a day where
            all the people we love get to meet each other, come together and
            enjoy themselves, and so any and all communal provisioning would be
            way more than appreciated as a way to contribute, share, and take
            part in our celebration.
          </p>
          <p className="about__description_description">
            So, what does one wear to a pre-ception? A suit? A dress? Fancy
            shoes that give you blisters? Nothing at all? Well, you should for
            sure wear something but, truthfully, wear whatever you want. Dress
            as yourself. We just want you to come and be you. Not some
            overheated and uncomfortably festooned version of you (remember, we
            are talking mid-August). If you need inspo, imagine you are going on
            a first date with someone way cooler than you, but you don't want
            them to know, at least not just yet, so you do the nonchallantly
            cool thing and keep it light, casual, and breezy.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
