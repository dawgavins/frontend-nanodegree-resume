

var bio = {
	name: "Erik Benediktson",
	role: "Programmer",
	contacts : {
		mobile: "123-456-7890",
		email: "no_mail_please@gmail.com",
		github: "dawgavins",
		twitter: "aintgotone",
	    location: "Vancouver, BC",
	},
	welcomeMessage: "Entering the world of web development.",
	skills: [ "Console Game Development", "Mobile Development", "Web Development", "Hockey", "Mario Kart" ],
	biopic: "images/fry.jpg",		

	display : function()
	{
		$("#header").prepend( HTMLheaderRole.replace( "%data%", bio.role ) );
		$("#header").prepend( HTMLheaderName.replace( "%data%", bio.name ) );
		AddContactList( "#topContacts", bio.contacts );
		$("#header").append( HTMLbioPic.replace( "%data%", bio.biopic ) );
		$("#header").append( HTMLWelcomeMsg.replace( "%data%", bio.welcomeMessage ) );			
		$("#header").append( HTMLskillsStart );	
		for ( skill in bio.skills )
		{
			$("#skills").append( HTMLskills.replace( "%data%", bio.skills[skill] ) );
		}

		AddContactList( "#footerContacts", bio.contacts );
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
	}	
}

var work = { 
	jobs : [
		{
			"employer" : "Electronic Arts Canada",
			"title" : "Software Engineer",
			"location" : "Sanderson Way, Burmaby, BC",
			"dates" : "2001 - 2006",
			"description" : "Console game programming for the SSX and NBA Street franchises.  Gameplay, cameras, tools, online, front end."				
		},
		{
			"employer" : "Next Level Games",
			"title" : "Software Engineer",
			"location" : "Cambie St, Vancouver, BC",
			"dates" : "2006 - 2011",
			"description" : "Console game programming for a variety of games including Spiderman: Friend or Foe (Xbox, PS3, Wii), Punch Out (Wii), Transformers (Wii), Luigi's Mansion (3DS).  Mostly gameplay and tools."				
		},
		{
			"employer" : "United Front Games",
			"title" : "Software Engineer",
			"location" : "Mainland St, Vancouver, BC",
			"dates" : "2012",
			"description" : "Contract console game programming for Little Big Planet: Karting for the PS3.  Gameplay and tools-related tasks."				
		},
		{
			"employer" : "Hothead Games",
			"title" : "Software Engineer",
			"location" : "Great Northern Way, Vancouver, BC",
			"dates" : "2013 - 2014",
			"description" : "Mobile development - client and back-end programming for the BigWin franchise of sports games."				
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
		}
	}
};

var projects = {

	projects : [
		{
			"title" : "Luigi's Mansion - Dark Moon",
			"dates" : "2010 - 2011",
			"description" : "Adventure/puzzle game for the Nintendo 3DS",
			"images" : [ "images/luigis-mansion-02.jpg"],
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


// display each section of the resume
bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);

