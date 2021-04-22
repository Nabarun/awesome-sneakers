import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.details = `
            <h1 align="center">Product Details</h1>
            <p align="center"> Everything you need to know about this product</p>
               <div class="container">
                    <div class="row">
        `;
        this.setTitle("Products");
        this.managedContent = this.getManagedContentFromJSON(params.id);
    }


    getManagedContentFromJSON(id) {
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
                if(elem.managedContentId === id) {

                    this.details += `
                    <div align="center">
                        <img src=${elem.contentNodes.SneakerImageMain.url} alt="Avatar" width="auto" >
                        </div>
                                <div class="card-body">
                                    <h4 class="card-title">${elem.contentNodes.SneakerName.value}</h4>
                                    <p class="card-text">${elem.contentNodes.SneakerPrice.value}</p>
                                    <p class="card-text">${elem.contentNodes.SneakerDetail.value}</p>
                                </div>
                                
                    `
                }
        });

        this.details += `
                </div>
            </div>`;

    }


    getManagedContent(id) {
        const serverUrl = 'http://localhost:8081/graphql'
        const graphqlQuery = {
            query: `{
                        channelById{
                            items{
                                title
                                managedContentId
                                contentNodes {
                                    bannerImage {
                                        url
                                    }
                                }
                            }
                        }
                    }`
            };

        // below ordinary XHR request with console.log
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', serverUrl);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function () {
            if (xhr.readyState === xhr.DONE) {
                console.log(xhr.response);
                if (xhr.status === 200) {
                    return xhr.response;
                    console.log(xhr.response);
                    console.log(xhr.responseText);
                }
            }
        };

        xhr.send(JSON.stringify(graphqlQuery));

        return {
            "contentNodes" : {
                "bannerImage" : {
                    "altText" : null,
                    "fileName" : "slack (1).jpg.png",
                    "mediaType" : "Image",
                    "mimeType" : "image/png",
                    "nodeType" : "Media",
                    "resourceUrl" : "/services/data/v50.0/connect/cms/delivery/channels/0ap1R000000blKC/media/MCIDYMXS3DXJBRVAFL2LHNTDKAVU/content",
                    "thumbnailUrl" : null,
                    "title" : "Graphql Test 2 Image",
                    "unauthenticatedUrl" : "https://wallpaperaccess.com/full/86289.jpg",
                    "url" : "https://wallpaperaccess.com/full/86289.jpg"
                },
                "body" : {
                    "nodeType" : "RichText",
                    "value" : "This picture was sold at 2 million USD"
                },
                "title" : {
                    "nodeType" : "NameField",
                    "value" : "Graphql Test 2 News"
                }
            },
            "contentUrlName" : "graphql-test-2-news",
            "language" : "en_US",
            "managedContentId" : "20Y1R0000008OQ9UAM",
            "publishedDate" : "2021-03-28T17:12:57.000Z",
            "title" : "Graphql Test 2 News",
            "type" : "news",
            "typeLabel" : "News",
            "unauthenticatedUrl" : "/cms/delivery/v50.0/0DB36000000XeFRGA0/contents/20Y1R0000008OQ9UAM?oid=00D36000000JfaDEAS"
        };
    }

    async getHtml() {
        return `${this.details}`;
    }
}
