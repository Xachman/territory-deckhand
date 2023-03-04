
const registeredRoutes: Route[] = [

]

interface Route {
    path: string;
    method: string;
    callback: () => Response;
}

export const Routes = (request: Request): Response => {
    let route = registeredRoutes.find( route => {
        console.log(route.method)
        const url = new URL(request.url);
        if (route.method == request.method && route.path == url.pathname) {
            return route
        }
    })

    if (route) {
        return route.callback()
    } 

    return new Response("Not Found", {
        status: 404
    })
}

interface RegisterRouteParams {
    method: string,
    path: string
}

export const RegisterRoute = (params: RegisterRouteParams, callback: () => Response) => {
    registeredRoutes.push({ method: params.method, path: params.path , callback: callback})
}


export const JsonErrorResponse = (): Response  => {
    const errorJson = JSON.stringify({
        status: "error",
        message: "Bad Request"
    }, null, 2);

    return new Response(errorJson, {
        status: 400,
        headers: {
            'content-type': 'application/json;charset=UTF-8',
        },
    });
}