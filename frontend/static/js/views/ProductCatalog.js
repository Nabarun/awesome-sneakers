import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.resp = `
            <h1 align="center">Product Menu</h1>
               <div class="container">
                    <div class="row">
        `;
        this.setTitle("Products");
        this.getManagedContentFromUrl();
    }

    getManagedContentFromJSON() {
        const json = `
        {
    "currentPageUrl": "/services/data/v48.0/connect/cms/delivery/channels/0apxx00000004fo/contents/query?managedContentType=Sneaker&page=0&pageSize=25",
    "items": [
        {
            "contentNodes": {
                "SneakerPrice": {
                    "nodeType": "Text",
                    "value": "$158.00"
                },
                "SneakerDetail": {
                    "nodeType": "RichText",
                    "value": "&lt;ul&gt;\\n &lt;li&gt;Hit the streets rocking the Boss Hugo Boss&amp;reg; Zero Tennis Sneakers. This footwear pairs well with just about anything in the closet and was designed for all day activities while remaining in comfort and style.&lt;span&gt;﻿&lt;/span&gt;&lt;/li&gt;\\n &lt;li&gt;Exterior Hugo pull-tab logo at heel counter for easy on/off access.&lt;/li&gt;\\n &lt;li&gt;Padded tongue and collar for optimal comfort.&lt;/li&gt;\\n&lt;/ul&gt;\\n&lt;p&gt;&lt;br /&gt;&lt;/p&gt;"
                },
                "SneakerName": {
                    "nodeType": "NameField",
                    "value": "BOSS Hugo Boss Zero Tennis Sneakers"
                },
                "SneakerImageMain": {
                    "altText": null,
                    "altUrl": null,
                    "fileName": "HugoBoss_Red.png",
                    "mediaType": "Image",
                    "mimeType": "image/png",
                    "nodeType": "Media",
                    "resourceUrl": null,
                    "title": "HugoBoss_Red",
                    "unauthenticatedUrl": null,
                    "url": "https://d23q98rtu4xlmj.cloudfront.net/static/00Dxx0000001qCB/MC6ZO4HS6DT5FVLCIKRAO5GXJFN4.jpeg"
                }
            },
            "contentUrlName": "boss-hugo-boss-zero-tennis-sneakers",
            "language": "en_US",
            "managedContentId": "20Yxx00000007XeEAI",
            "publishedDate": "2021-04-21T21:22:25.000Z",
            "title": "BOSS Hugo Boss Zero Tennis Sneakers",
            "type": "Sneaker",
            "typeLabel": "Sneakers"
        },
        {
            "contentNodes": {
                "SneakerPrice": {
                    "nodeType": "Text",
                    "value": "$59.99"
                },
                "SneakerDetail": {
                    "nodeType": "RichText",
                    "value": "&lt;ul&gt;\\n &lt;li&gt;The Journee Collection&amp;reg; Comfort Foam™ Kimber Sneakers offer comfort and modern style with a low-profile silhouette, round toe, and a padded collar.&lt;/li&gt;\\n &lt;li&gt;Fabric upper boasts mini cooling perforations throughout.&lt;/li&gt;\\n &lt;li&gt;Lace-up design for a secure fit.&lt;/li&gt;\\n &lt;li&gt;Contrasting rear pull-tab for easy entry.&lt;/li&gt;\\n&lt;/ul&gt;\\n&lt;p&gt;&lt;br /&gt;&lt;/p&gt;"
                },
                "SneakerName": {
                    "nodeType": "NameField",
                    "value": "Journee Collection"
                },
                "SneakerImageMain": {
                    "altText": null,
                    "altUrl": null,
                    "fileName": "journee_collection.jpeg",
                    "mediaType": "Image",
                    "mimeType": "image/jpeg",
                    "nodeType": "Media",
                    "resourceUrl": null,
                    "title": "journee_collection",
                    "unauthenticatedUrl": null,
                    "url": "https://d23q98rtu4xlmj.cloudfront.net/static/00Dxx0000001qCB/MCGR25LQ3TTRCRPHLL5MJDNYYSKU.jpeg"
                }
            },
            "contentUrlName": "journee-collection",
            "language": "en_US",
            "managedContentId": "20Yxx00000007XPEAY",
            "publishedDate": "2021-04-21T20:58:03.000Z",
            "title": "Journee Collection",
            "type": "Sneaker",
            "typeLabel": "Sneakers"
        },
        {
            "contentNodes": {
                "SneakerPrice": {
                    "nodeType": "Text",
                    "value": "$59.99"
                },
                "SneakerDetail": {
                    "nodeType": "RichText",
                    "value": "&lt;ul&gt;\\n &lt;li&gt;The Journee Collection&amp;reg; Comfort Foam™ Kimber Sneakers offer comfort and modern style with a low-profile silhouette, round toe, and a padded collar.&lt;/li&gt;\\n &lt;li&gt;Fabric upper boasts mini cooling perforations throughout.&lt;/li&gt;\\n &lt;li&gt;Lace-up design for a secure fit.&lt;/li&gt;\\n &lt;li&gt;Contrasting rear pull-tab for easy entry.&lt;/li&gt;\\n&lt;/ul&gt;\\n&lt;p&gt;&lt;br /&gt;&lt;/p&gt;"
                },
                "SneakerName": {
                    "nodeType": "NameField",
                    "value": "Journee Collection"
                },
                "SneakerImageMain": {
                    "altText": null,
                    "altUrl": null,
                    "fileName": "journee_collection.jpeg",
                    "mediaType": "Image",
                    "mimeType": "image/jpeg",
                    "nodeType": "Media",
                    "resourceUrl": null,
                    "title": "journee_collection",
                    "unauthenticatedUrl": null,
                    "url": "https://d23q98rtu4xlmj.cloudfront.net/static/00Dxx0000001qCB/MCGR25LQ3TTRCRPHLL5MJDNYYSKU.jpeg"
                }
            },
            "contentUrlName": "journee-collection",
            "language": "en_US",
            "managedContentId": "20Yxx00000007XPEAZ",
            "publishedDate": "2021-04-21T20:58:03.000Z",
            "title": "Journee Collection",
            "type": "Sneaker",
            "typeLabel": "Sneakers"
        }
    ],
    "total": 2
}
        `
        let managedContents = JSON.parse(json);


        managedContents.items.forEach(elem => {
            this.resp += `
                <div class="col-md-4">
                    <div class="card" style="width:18rem">
                        <div class="row no-gutters">
                            <img src=${elem.contentNodes.SneakerImageMain.url} class="imgfluid" alt="Responsive image">
                           
                            <div class="card-body">
                                <h4 class="card-title">${elem.contentNodes.SneakerName.value}</h4>
                                <p class="card-text">${elem.contentNodes.SneakerPrice.value}</p>
                                <a href="#productDetails/${elem.managedContentId}" class="btn btn-primary">See Details</a>
                            </div>
                        </div>
                    </div>
                </div>
                `
        });

        this.resp += `
                </div>
            </div>`;

    }

    getManagedContentFromUrl() {
        const serverUrl = 'https://d23q98rtu4xlmj.cloudfront.net/static/00Dxx0000001gXl/0apxx000000010C.json'
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', serverUrl, true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.onload = function () {
                alert(xhr.response);
                if (xhr.readyState === xhr.DONE) {
                    const options = {
                        status: xhr.status,
                        statusText: xhr.statusText
                    };
                    if (xhr.status === 200) {
                        resolve(xhr.response);
                        let managedContents = JSON.parse(json);

                        alert(managedContents);
                        managedContents.items.forEach(elem => {
                            this.resp += `
                                <div class="col-md-4">
                                    <div class="card" style="width:18rem">
                                        <div class="row no-gutters">
                                            <img src=${elem.contentNodes.SneakerImageMain.url} class="imgfluid" alt="Responsive image">
                                           
                                            <div class="card-body">
                                                <h4 class="card-title">${elem.contentNodes.SneakerName.value}</h4>
                                                <p class="card-text">${elem.contentNodes.SneakerPrice.value}</p>
                                                <a href="#productDetails/${elem.managedContentId}" class="btn btn-primary">See Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `
                        });

                        this.resp += `
                                </div>
                            </div>`;
                    }
                }
            };
            xhr.send();
        });

    }

    async getHtml() {
        return `${this.resp}`;
    }
}
