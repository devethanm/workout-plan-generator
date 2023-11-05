

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    const workoutType = String(event.pathParameters.workoutType);
    let workout;

    // hardcoded responses for now (no db)
    if (workoutType == "Arms") 
        workout = {'workoutId': 1, 'type': workoutType, 'length': "20 minutes", 'image': "https://www.pngarts.com/files/4/Strong-Muscle-Arm-Transparent-Image.png"};
    else if (workoutType == "Legs") 
        workout = {'workoutId': 2, 'type': workoutType, 'length': "40 minutes", 'image': "https://hotemoji.com/images/dl/x/leg-emoji-by-google.png"};
    else if (workoutType == "Back") 
        workout = {'workoutId': 3, 'type': workoutType, 'length': "1 hour", 'image': "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fwww.doctorramey.com%2Fwp-content%2Fuploads%2F2015%2F06%2Fback_pain.png&f=1&nofb=1&ipt=fb66835e94abdfa59e8aa71725b08739b43e9ba7df0f797cf15badeafb309f5e&ipo=images"};
    else 
        workout = {'workoutId': 1, 'type': workoutType, 'length': "1 hour"};

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

