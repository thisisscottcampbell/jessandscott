import React from 'react';
import './qualification.css';

export const FirstAboutUsCard = (title, subtitle, date) => (
	<div>
		<div className="qualification__data">
			<div>
				<h3 className="qualification__title">{title}</h3>
				<span className="qualification__subtitle">{subtitle}</span>
				<div className="qualification__calender">
					<i className="uil uil-calendar-alt"></i>
					{date}
				</div>
			</div>

			<div>
				<span className="qualification__rounder"></span>
				<span className="qualification__line"></span>
			</div>
		</div>
	</div>
);

{/* <AboutUsCard title msg date isFirst={false} isScott={false} isJess={false} /> */ }

export const AboutUsCard = ({ isFirst, title, msg, date, isJess, isScott }) => {

	if (isScott) return (
		<div className="qualification__data">
			<div>
				<h3 className="qualification__title">{title}</h3>
				<span className="qualification__subtitle">
					{msg}
				</span>
				<div className="qualification__calender">
					<i className="uil uil-calendar-alt"></i>{date}
				</div>
			</div>

			<div>
				<span className="qualification__rounder"></span>
				<span className="qualification__line"></span>
			</div>
		</div>
	);
	if (isJess) return (
		<>
			<div className="qualification__data">
				<div></div>

				<div>
					<span className="qualification__rounder"></span>
					<span className="qualification__line"></span>
				</div>

				<div>
					<h3 className="qualification__title">{title}</h3>
					<span className="qualification__subtitle">{msg}</span>
					<div className="qualification__calender">
						<i className="uil uil-calendar-alt"></i> {date}
					</div>
				</div>
			</div>
		</>
	);

	if (isFirst) return (
		<div className="qualification__data">
			<div>
				<h3 className="qualification__title">{title}</h3>
				<span className="qualification__subtitle">{msg}</span>
				<div className="qualification__calender">
					<i className="uil uil-calendar-alt"></i>
					{date}
				</div>
			</div>

			<div>
				<span className="qualification__rounder"></span>
				<span className="qualification__line"></span>
			</div>
		</div>
	)
};
