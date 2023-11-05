

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    const workoutType = String(event.pathParameters.workoutType);
    let workout;

    // hardcoded responses for now (no db)
    if (workoutType == "Arms") 
        workout = {
            'workoutId': 1, 
            'type': workoutType, 
            'length': "20 minutes", 
            'image': "https://www.pngarts.com/files/4/Strong-Muscle-Arm-Transparent-Image.png",
            'description': "This is the most intense arm workout that will double your biceps in one month",
            'quote': "I love this workout!",
            'tags': ['Fast', 'Intense', 'Modern'],
            'checks': ['High Rated', 'Fun', 'Dynamic'],
        };
    else if (workoutType == "Legs") 
        workout = {
            'workoutId': 2, 
            'type': workoutType, 
            'length': "40 minutes", 
            'image': "https://hotemoji.com/images/dl/x/leg-emoji-by-google.png",
            'description': "Expert level leg workout. For advanced athletes only.",
            'quote': "This workout was really hard",
            'tags': ['Medium Difficulty', 'Deadlifts', 'Challenging'],
            'checks': ['Quick', 'Legs', 'Awesome'],
        };
    else if (workoutType == "Back") 
        workout = {
            'workoutId': 3, 
            'type': workoutType, 
            'length': "1 hour", 
            'image': "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fwww.doctorramey.com%2Fwp-content%2Fuploads%2F2015%2F06%2Fback_pain.png&f=1&nofb=1&ipt=fb66835e94abdfa59e8aa71725b08739b43e9ba7df0f797cf15badeafb309f5e&ipo=images",
            'description': "Crazy back workout. Good for your back.",
            'quote': "This workout grew my back so fast",
            'tags': ['Back', 'Long', 'Highest Difficult'],
            'checks': ['High Rated', 'Challenging', 'Back Workout'],
        };
    else 
        workout = {
            'workoutId': 1, 
            'type': "Error", 
            'length': "error minutes",
            'image': "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2Fc9a27e0a-52f7-4cec-a932-b6246308a58e%2Fdfnukjz-0f4dc473-62cc-473c-8ee8-e1a01f5787f6.png%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M5YTI3ZTBhLTUyZjctNGNlYy1hOTMyLWI2MjQ2MzA4YTU4ZVwvZGZudWtqei0wZjRkYzQ3My02MmNjLTQ3M2MtOGVlOC1lMWEwMWY1Nzg3ZjYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LAy1v69f0jD8PocZATncuHCTwKz2SZvzoNOYEK3mUwY&f=1&nofb=1&ipt=d12a51daa6e23953a575f1e68063dc68de8c57c1d7a98073f77c7cd264d6b334&ipo=images",
            'description': "error workout",
            'quote': "this is an error",
            'tags': ['error', 'error', 'error'],
            'checks': ['error', 'error', 'error'],
        };

    return {
        statusCode: 200,
        // Uncomment below to enable CORS requests
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        //body: JSON.stringify("hello"),
        body: JSON.stringify(workout),
    };
};

