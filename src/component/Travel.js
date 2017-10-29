import './Travel.css'
import Article from './Article'
import Section from './Section'

class Travel {
	render() {
		return `
			${new Section({
				heading: 'South Lake Tahoe Travel Guide'
			}).render(`
				${new Article().render(`
					<ul>
						<li>
							Fly into Reno/ Tahoe International Airport, located 1 hour from South Lake Tahoe, or the Sacramento International Airport, located approx.. 2 hours from South Lake Tahoe.
​						</li>
						<li>
							Driving From RENO/TAHOE INTERNATIONAL AIRPORT (to South Lake Tahoe): Take I-580 S towards Carson City for 30 miles, continue straight through the intersection onto US Hwy 50 West towards South Lake Tahoe for 22 miles, until you pass through the Casino corridor into South Lake Tahoe CA.
						</li>
						<li>
							Driving From SACRAMENTO INTERNATIONAL AIRPORT: Take I-5 S towards Sacramento for 9 miles. Take exit 518 and merge onto CA-99 towards Fresno/South Lake Tahoe. Keep left to merge onto US-50 E. Continue onto US-50 E towards South Lake Tahoe for 98 miles. Turn right onto Lake Tahoe Blvd. After 5 miles turn left onto Stateline Ave. 
 						</li>
 						<li>
 							Rental Cars are available from the Airports or the Airporter Shuttle from the Reno / Tahoe Airport to Harvey’s at Stateline. www.southtahoeairporter.com
​ 						</li>
					</ul>
				`)}
			`)}
		`
	}
}

export default Travel