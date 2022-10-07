import React from 'react';
import './about.css';
import AboutImg from '../../assets/about.jpg';
import CV from '../../assets/Smith-Cv.pdf';
import Info from './Info';

const About = () => {
	return (
		<section className="about section" id="about">
			<h2 className="section__title">About The Day</h2>
			<span className="section__subtitle">oveview and what not</span>

			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignContent: 'space-evenly',
				}}
			>
				<div className="about__container container grid">
					{/* <img src={AboutImg} alt="" className="about__img" /> */}
					{/* <div className="about__img"></div> */}
					<div className="about__data">
						<h5 className="about__description">
							First and foremost, if you are reading this, we really really hope
							you can come celebrate with us because we love you and think you
							totally rock.
						</h5>
						<h6 className="about__description">
							So what are we doing? Well, we aren't getting married on this
							exact day, we are absconding off to Scotland a week later and
							eloping in the Highlands (sorry, but not really). And so, for this
							day, we are celebrating our marriage-to-be with a sort of wedding
							pre-ception (i.e., a pre-weeding receptions, a term coined by us
							😜)
						</h6>
					</div>
				</div>

				<div className="about__container container grid">
					<p className="about__description">desctription...</p>
				</div>
			</div>
		</section>
	);
};

export default About;
