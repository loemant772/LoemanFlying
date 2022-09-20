let facts = 
["The average cruising altitude of a commercial plane still is approximately 90,000m below the Karman line, which is defined as the official border between the earth's surface and outer space.",
"One of my favorite aviation facts: 95% of the world's population has never been on a flight. That means 7,410,000,000 people have never boarded an airplane.",
"The atmosphere in an airline cabin reduces your ability to detect tastes by about 30 percent, think of it as your taste buds go numb.",
"In 1987 American Airlines saved $40,000 annually by removing one olive from the first-class salads.",
"80% of the world's population is afraid of flying, so called aerophobia.",
"Alaska Airlines was the first airline that introduced online Check In in 1999.",
"The highest price that has ever been paid for a flight ticket is $123,000. An Australian millionaire bought that ticket for a flight from Singapore to Sydney in 2007, at it was the maiden flight of the A380.",
"The safest section of an aircraft is the back third. The fatality rate of passengers is 'only' 32%, whereas mid and front third the fatality rate is ~38%. So make sure to chose a seat at the back!",
"225 kilometers! Inside of a 747 aircraft 225 kilometers of cable are routed.",
"The first transatlantic flight took place in 1919. Operated by the US NAVY the flight took 24 days!",
"Qantas Airways was the first airline in the world that introduced the business class, in 1979",
"The tray table is the dirtiest place on an airplane. The bacteria levels found on tray tables are even three times as high as levels on the toilet flush button.",
"1919 was the year when food was served on a plane for the first time. This happened on a trip from London to Paris. However, the sandwich wasn't for free but cost 3 Schilling back then.",
"Safety is first! That's why (at many airlines) pilots are not allowed to have a beard because it could cause problems when wearing the oxygen mask.",
"The likelihood that your flight crashes are extremely low. Actually, this likeliness is about 0.000024%",
"Up to today, 78 billion kilometers have been logged on all flights with a 747 aircraft. That's 100,000 times to the moon and back!",
"In 2019, 1.7 Million bags were lost worldwide! And lost really means lost. That doesn't include the mishandled bags that were delivered late!",
"Although it's still a common myth, the Bermuda Triangle doesn't play a role in commercial flights. Airlines no longer avoid that area.",
"80% of all plane crashes happen during take off and landing.",
"In 1947 a jetplane broke the sound barrier for the first time.",
"The amount of fuel that goes into a Boeing 747 could fuel 1,400 minivans!",
"In a survey 67% percent of pilots admitted that they've 'at least once' fallen asleep accidentally while flying."]

const generateAviationFact = () => {
    let selNumber = Math.floor(Math.random() * 21);
    let funFact = facts[selNumber];
    return funFact;
};
