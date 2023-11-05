

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    const workoutType = String(event.pathParameters.workoutType);
    let workout;

    // hardcoded responses for now (no db)
    if (workoutType == "arms") 
        workout = {'workoutId': 1, type: workoutType, 'length': "20 minutes"};
    else if (workoutType == "legs") 
        workout = {'workoutId': 2, type: workoutType, 'length': "40 minutes"};
    else if (workoutType == "back") 
        workout = {'workoutId': 3, type: workoutType, 'length': "1 hour"};
    else 
        workout = {'workoutId': 1, type: workoutType, 'length': "1 hour"};

    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
        //body: JSON.stringify("hello"),
        body: JSON.stringify(workout),
    };
};

