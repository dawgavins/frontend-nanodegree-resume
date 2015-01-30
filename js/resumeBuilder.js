

var bio = {
	name: "Erik Benediktson",
	role: "Programmer",
	contacts : {
		mobile: "123-456-7890",
		email: "no_mail_please@gmail.com",
		github: "dawgavins",
		twitter: "aintgotone",
	    location: "2400 Willow St, Vancouver, BC",
	},
	welcomeMessage: "Discovering the world of web development.",
	skills: [ "Console Game Development", "Mobile Development", "Web Development", "Hockey", "Mario Kart" ],
	biopic: "images/eb11.jpg",		

	display : function()
	{
		$("#header").prepend( HTMLheaderRole.replace( "%data%", bio.role ) );
		$("#header").prepend( HTMLheaderName.replace( "%data%", bio.name ) );

		// populate the header contact info
		AddContactList( "#topContacts", bio.contacts );

		$("#header").append( HTMLwelcomeStart );
		$("#welcomeDiv").append( HTMLbioPic.replace( "%data%", bio.biopic ) );
		$("#welcomeDiv").append( HTMLWelcomeMsg.replace( "%data%", bio.welcomeMessage ) );			
		$("#welcomeDiv").append( HTMLskillsStart );	
		for ( skill in bio.skills )
		{
			$("#skills").append( HTMLskills.replace( "%data%", bio.skills[skill] ) );
		}

		// populate the footer contact info
		AddContactList( "#footerContacts", bio.contacts );

		// add some animation to the name header and skills
		$("h1").addClass( "animating-scale-element");
		$("#skills").children("li").addClass( "animating-scale-element" );
	},
};

var education = {
	schools : [
		{ 
			"name" : "University of Waterloo",
			"location" : "Waterloo, ON",
			"degree" : "BMath",
			"majors" : [ "Computer Science" ],
			"dates" : "1995-2000",
			"url" : "http://uwaterloo.ca"
		}
	],

	onlineCourses : [
		{
			"title" : "Front End Developer Nanodegree",
			"school" : "Udacity",
			"date" : "2015",
			"url" : "https://www.udacity.com/course/nd001"
		}
	],

	display : function() {
		for ( i in education.schools )
		{
			school = education.schools[i];
			$("#education").append( HTMLschoolStart );
			var name = HTMLschoolName.replace( "%data%", school.name );
			var location = HTMLschoolLocation.replace( "%data%", school.location );
			var degree = HTMLschoolDegree = HTMLschoolDegree.replace( "%data%", school.degree );
 	 		var majors = HTMLschoolMajor.replace( "%data%", school.majors.join( " ") );
			var dates = HTMLschoolDates.replace( "%data%", school.dates );
			var schoolEntry = $(".education-entry:last");
			schoolEntry.append( name );					
			schoolEntry.append( location );
			schoolEntry.append( dates );
			schoolEntry.append( majors );
			schoolEntry.append( degree );
			schoolEntry.find("a").attr( "href", school.url );
		}

		$("#education").append( HTMLonlineClasses );

		for ( i in education.onlineCourses )
		{
			course = education.onlineCourses[i];
			$("#education").append( HTMLschoolStart );
			var title = HTMLonlineTitle.replace( "%data%", course.title );
			var name = HTMLonlineSchool.replace( "%data%", course.school );
			var dates = HTMLonlineDates.replace( "%data%", course.date );
			var url = HTMLonlineURL.replace( "%data%", course.url );
			courseEntry = $(".education-entry:last");
			courseEntry.append( title + name );
			courseEntry.append( dates );
			courseEntry.append( url );
			courseEntry.find("a").attr( "href", course.url );
		}

		// add some animation to the education entry - scale it up slightly
		$(".education-entry").addClass( "animating-scale-element");

	}	
}

var work = { 
	jobs : [
		{
			"employer" : "Electronic Arts Canada",
			"title" : "Software Engineer",
			"location" : "Sanderson Way, Burmaby, BC",
			"dates" : "2001 - 2006",
			"description" : "Console game programming for the SSX and NBA Street franchises.  Gameplay, cameras, tools, online, front end.",			
			"recommendation" : "'Erik was reliable and adaptable in the tasks he took on.' - Robyn Wallace, Development Director"
		},
		{
			"employer" : "Next Level Games",
			"title" : "Software Engineer",
			"location" : "208 Robson Street, Vancouver, BC V6B 6A1",
			"dates" : "2006 - 2011",
			"description" : "Console game programming for a variety of games including Spiderman: Friend or Foe (Xbox, PS3, Wii), Punch Out (Wii), Transformers (Wii), Luigi's Mansion (3DS).  Mostly gameplay and tools.",
			"recommendation" : "'Erik is a hard worker who I could count on to solve difficult problems.' - Tedd Streibel, Senior Programmer"
		},
		{
			"employer" : "United Front Games",
			"title" : "Software Engineer",
			"location" : "Mainland St, Vancouver, BC",
			"dates" : "2012",
			"description" : "Contract console game programming for Little Big Planet: Karting for the PS3.  Gameplay and tools-related tasks.",
			"recommendation" : "'Erik's calm demeanor makes working with him a pleasure.' - Mat Thomas, Gameplay Producer"
		},
		{
			"employer" : "Hothead Games",
			"title" : "Software Engineer",
			"location" : "877 Great Northern Way, Vancouver, BC",
			"dates" : "2013 - 2014",
			"description" : "Mobile development - client and back-end programming for the BigWin franchise of sports games.",
			"recommendation" : "'Erik quickly got up to speed on mobile development.' - Kevin Wilkinson, Producer"
		} 
	],

	display : function() {
		for ( i in work.jobs )
		{
			position = work.jobs[i];
			$("#workExperience").append( HTMLworkStart );
			var employer = HTMLworkEmployer.replace( "%data%", position.employer );
			var title = HTMLworkTitle.replace( "%data%", position.title );
			var workEntry = $(".work-entry:last");
			workEntry.append( employer + title );					
			workEntry.append( HTMLworkLocation.replace( "%data%", position.location ) );
			workEntry.append( HTMLworkDates.replace( "%data%", position.dates  ) );
			workEntry.append( HTMLworkDescription.replace( "%data%", position.description ) );
			if ( position.recommendation != undefined )
			{
				console.log ("adding recommendation");
				console.log( position.recommendation );
				workEntry.append( HTMLworkRecommendation.replace( "%data%", position.recommendation) );
			}

			// Add the animating scale to the work-entry
			workEntry.addClass( "animating-scale-element");
			// Show the recommendation when the mouse is over the work-entry
			workEntry.bind(  "mouseenter", function() {
				showRecommendation( $(this) );
			});
			// Hide the recommendation when the mouse is off the work-entry
			workEntry.bind(  "mouseleave", function() {
				hideRecommendation( $(this) );
			});

		}
	}
};

var projects = {

	projects : [
		{
			"title" : "Luigi's Mansion - Dark Moon",
			"dates" : "2010 - 2011",
			"description" : "Adventure/puzzle game for the Nintendo 3DS",
			"images" : [ "images/luigi-1.jpg", "images/luigi-2.jpg" ],
		},
		{
			"title" : "Wii Punch Out!",
			"dates" : "2008 - 209",
			"description" : "Boxing/puzzle game for the Nintendo Wii",
			"images" : [ "images/punch-out-1.jpg", "images/punch-out-2.jpg"],
		},
	],

	display : function()
	{
		for ( i in projects.projects )
		{
			$("#projects").append( HTMLprojectStart );
			var projectEntry = $(".project-entry:last");
			projectEntry.append( HTMLprojectTitle.replace( "%data%", projects.projects[i].title ) )
			projectEntry.append( HTMLprojectDates.replace( "%data%", projects.projects[i].dates ) )
			projectEntry.append( HTMLprojectDescription.replace( "%data%", projects.projects[i].description ) )
			for ( image in projects.projects[i].images )
			{
				projectEntry.append( HTMLprojectImage.replace( "%data%", projects.projects[i].images[image] ) );
			}

			// Add some animation to the project title (scale up on mouse-over)
			$(".project-entry").addClass( "animating-scale-element");

		}
	},
};

function AddContactList( listID, contactDict )
{
	$(listID).append( HTMLmobile.replace( "%data%", contactDict.mobile) );
	$(listID).append( HTMLemail.replace( "%data%", contactDict.email ) );
	$(listID).append( HTMLgithub.replace( "%data%", contactDict.github ) );
	$(listID).append( HTMLtwitter.replace( "%data%", contactDict.twitter ) );
	$(listID).append( HTMLlocation.replace( '%data%', contactDict.location ) );
}	


// Display each section of the resume
bio.display();
education.display();
work.display();
projects.display();

// Add the interactive map with work/school/home locations
$("#mapDiv").append(googleMap);

// Bind the mouseenter and mouseleave events to the animating-scale-element class
$(".animating-scale-element").bind( "mouseenter", function() {
	triggerAnimatingEntry_ScaleUp( $(this) );
});
$(".animating-scale-element").bind( "mouseleave", function() {
	triggerAnimatingEntry_ScaleDown( $(this) );
});




