import Posts from "./views/Posts.js";
import PostView from "./views/PostView.js";
import Settings from "./views/Settings.js";
import Products from "./views/ProductCatalog.js";
import ProductDetails from "./views/ProductDetails.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "#", view: Products },
        { path: "#products", view: Products },
        { path: "#productDetails/:id", view: ProductDetails }
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.hash.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }
    //let fragmentId = location.hash.substr(1);
    const view = new match.route.view(getParams(match));
    console.log(match);
    if(match.route.path == '#productDetails/:id'){
        document.querySelector("#details").innerHTML = await view.getHtml();
    }

    if(match.route.path == '#products'){
        document.querySelector("#catalog").innerHTML = await view.getHtml();
    }


    /*if(fragmentId == "products") {
        alert("in product");
        document.querySelector("#catalog").innerHTML = await view.getHtml();
    }
    if(fragmentId.match(new RegExp('^productDetails'))) {
        console.log(view);
        document.querySelector("#details").innerHTML = await view.getHtml();
    }*/
};

window.addEventListener("popstate", router);

/*window.addEventListener("hashchange",  function (){
    console.log(location.hash);
    let fragmentId = location.hash.substr(1);
    if(location.hash.substr(1) == "products"){
        getContent(fragmentId, function (content){
            const view = new match.route.view(getParams(match));
            document.querySelector("#app").innerHTML = view.getHtml();
        })
    }

    if(location.hash.substr(1).match(new RegExp('^productDetails'))) {
        document.querySelector("#app").innerHTML = "Details";
    }
});*/

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});


function getContent(fragmentId, callback) {
    var request = new XMLHttpRequest();
    request.onload = function() {
        callback(request.responseText);
    }

    request.open("GET", "#"+fragmentId);
    request.send(null);
}
