import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function httpHello6(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world';

    return { body: `Hello, ${name}!` };
};

app.http('httpHello6', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: httpHello6
});
