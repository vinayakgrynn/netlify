import querystring from "querystring";

exports.handler = (event, context, callback) => {
    try {
        // Only allow POST
        //if (event.httpMethod !== "POST") {
            //return { statusCode: 200, body: "Method Not Allowed" };
        //}

        // When the method is POST, the name will no longer be in the event’s
        // queryStringParameters – it’ll be in the event body encoded as a query string
        //const params = querystring.parse(event.body);
        //const name = params.name || "World";
        //var obj = JSON.parse(event.body);
        //const name = event.queryStringParameters.name || "World";
        var send_obj = JSON.stringify(event.body);


        callback(null, {
            statusCode: 200,
            headers: {"Access-Control-Allow-Origin":"*"},
            body: send_obj
        });
    }
    catch(err) {
        var er = err.toString();

        callback(null, {
            statusCode: 200,
            headers: {"Access-Control-Allow-Origin":"*"},
            body: er
        });
    }
};
