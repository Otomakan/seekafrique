import React, {Component} from 'react'
import LogInForm from '../../containers/LoggedOut/UserLoggedOut/LogIn/LogInForm.js'
import DarkButton from '../CrossAssets/Button'
import HomePageLady from '../../assets/HomePageLady.png'
import SmallJobPostCard from '../CrossAssets/SmallJobPostCard'
import SearchBar from '../CrossAssets/SearchBar'
import CountryGroup from '../../assets/country-group.svg'
import StockComputerLadies from '../../assets/StockComputerLadies.png'
import TextField from '@material-ui/core/TextField'
import MediaQuery from 'react-responsive'

export default class Home extends Component {


	signup(){
		console.log("signup!")
	}
	
	render(){
		const opportunities = [
			{
				title:"",
				company: "Chevron Dakar",
				location:"Dakar, Senegal",
				description:"Our DPS Software Engineering team is looking for an intern to join our European team in our Waterloo, Belgium office for a duration of 6 months.The DPS Software Engineering team is mainly composed of developers, as well as business analysts and unit testers.",
				duration:"6 Months",
				startDate: new Date(),
			},
			{
				title:"",
				company: "Chevron Dakar",
				location:"Dakar, Senegal",
				description:"Our DPS Software Engineering team is looking for an intern to join our European team in our Waterloo, Belgium office for a duration of 6 months.The DPS Software Engineering team is mainly composed of developers, as well as business analysts and unit testers.",
				duration:"6 Months",
				startDate: new Date(),
			},
			{	
				title:"",
				company: "Chevron Dakar",
				location:"Dakar, Senegal",
				description:"Our DPS Software Engineering team is looking for an intern to join our European team in our Waterloo, Belgium office for a duration of 6 months.The DPS Software Engineering team is mainly composed of developers, as well as business analysts and unit testers.",
				duration:"6 Months",
				startDate: new Date(),
			},
		]

		return (
		<div className="logged-out-home-container">

			<div className="home-hero">
				<div className="hero-text-block">
					<h1>Unique Opportunities for Budding Talents Across Africa</h1>
					<h3>Seek Afrique provides you an opportunity to gain work experience in a different country from yours.</h3>
					<DarkButton title="Begin Here" link="/login"/>
				</div>

				<MediaQuery query="(min-width: 675px)">
				<div className="hero-image-block">
					<img src={HomePageLady}/>
				</div>
				</MediaQuery>
			</div>
			<div className="home-hero-destination">
				<h2>Destination</h2>
				<h3>Open opportunities across West Africa & Southern Africa</h3>
				<div className="country-list">
					<img src={CountryGroup}/>
				</div>
			</div>
			<div className="featured-opportunities">
				<h2>Featured Opportunities</h2>
				<div className="three-cards-container">
					{opportunities.map((content,key)=>
						<SmallJobPostCard content={content} key={key}/>
					)}
				</div>
				<div className="search-bar-container">
				<SearchBar/>
				</div>
			</div>
			<div className="research">
			</div>
			<div className="become-a-member">
				<div className="wrapper">
				<div className="image-block">
					<img src={StockComputerLadies}/>
				</div>
				<div className="text-block">
					<h1>Become a member</h1>
					<h2>Seek Afrique membership provides you awesome benefits including:</h2>
					<ul>
						<li>Exclusive Internship Opportunities</li>
						<li>CV and Applications ..</li>
						<li>Mentorship Opportunities</li>
						<li>Updates and Information</li>
					</ul>
					<DarkButton title="Join Now" link="/signup"/>
				</div>
				</div>
			</div>
			<div className="signup-hero">
				<h2>Sign Up for Updates</h2>
				<h4>Get emails of new internship opportunities, 
				 important information,
				 mentorship programmes and career prospects</h4>
				<TextField/><DarkButton action={this.signup} title="Sign Up" />
			</div>
			<LogInForm/>
		</div>
		)
	}
}