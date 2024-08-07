import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService  implements InMemoryDbService{

  constructor() { }

  createDb(): {} | Observable<{}> | Promise<{}> {
    return {
      users: [
        {
          "id": 1,
          "firstname": "Claude",
          "lastname": "Marvell",
          "email": "cmarvell0@army.mil",
          "role": "Surveyor",
          "createdAt": "2024-02-01T00:00:00"
        },
        {
          "id": 2,
          "firstname": "Darb",
          "lastname": "Ranyelld",
          "email": "dranyelld1@aol.com",
          "role": "Electrician",
          "createdAt": "2024-02-04T00:00:00"
        },
        {
          "id": 3,
          "firstname": "Francklin",
          "lastname": "Cuniam",
          "email": "fcuniam2@arstechnica.com",
          "role": "Electrician",
          "createdAt": "2024-02-07T00:00:00"
        },
        {
          "id": 4,
          "firstname": "Farris",
          "lastname": "Verzey",
          "email": "fverzey3@surveymonkey.com",
          "role": "Surveyor",
          "createdAt": "2024-02-09T00:00:00"
        },
        {
          "id": 5,
          "firstname": "Mortimer",
          "lastname": "Baversor",
          "email": "mbaversor4@fema.gov",
          "role": "Construction Expeditor",
          "createdAt": "2024-02-05T00:00:00"
        },
        {
          "id": 6,
          "firstname": "Bailey",
          "lastname": "Althrop",
          "email": "balthrop5@yahoo.co.jp",
          "role": "Project Manager",
          "createdAt": "2024-02-10T00:00:00"
        },
        {
          "id": 7,
          "firstname": "Townie",
          "lastname": "Justham",
          "email": "tjustham6@sun.com",
          "role": "Construction Manager",
          "createdAt": "2024-02-09T00:00:00"
        },
        {
          "id": 8,
          "firstname": "Den",
          "lastname": "Lantuffe",
          "email": "dlantuffe7@nymag.com",
          "role": "Construction Expeditor",
          "createdAt": "2024-02-03T00:00:00"
        },
        {
          "id": 9,
          "firstname": "Marney",
          "lastname": "Riguard",
          "email": "mriguard8@prnewswire.com",
          "role": "Supervisor",
          "createdAt": "2024-02-05T00:00:00"
        },
        {
          "id": 10,
          "firstname": "Sophi",
          "lastname": "Gori",
          "email": "sgori9@shop-pro.jp",
          "role": "Construction Foreman",
          "createdAt": "2024-02-11T00:00:00"
        }
      ],
      posts: [
        {
          "id": 1,
          "title": "mi sit amet lobortis sapien sapien non mi integer ac neque duis",
          "description": "a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed",
          "slug": "in felis donec semper sapien a libero nam",
          "image": "http://dummyimage.com/219x100.png/dddddd/000000",
          "content": "purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo",
          "author": "Bengt Branscombe",
          "created_at": "2024-01-04T00:00:00.00",
          "updated_at": "2024-01-04T00:00:00.00"
        },
        {
          "id": 2,
          "title": "non mauris morbi non lectus aliquam sit",
          "description": "donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est",
          "slug": "venenatis tristique fusce congue diam",
          "image": "http://dummyimage.com/164x100.png/dddddd/000000",
          "content": "in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque",
          "author": "Judie Postle",
          "created_at": "2024-01-05T00:00:00.00",
          "updated_at": "2024-01-05T00:00:00.00"
        },
        {
          "id": 3,
          "title": "accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam",
          "description": "blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
          "slug": "nullam porttitor lacus at turpis donec posuere",
          "image": "http://dummyimage.com/160x100.png/ff4444/ffffff",
          "content": "venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta",
          "author": "Stacy Biggerdike",
          "created_at": "2024-06-08T00:00:00.00",
          "updated_at": "2024-06-08T00:00:00.00"
        },
        {
          "id": 4,
          "title": "est et tempus semper est quam pharetra magna ac consequat metus",
          "description": "suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra",
          "slug": "in quam fringilla rhoncus mauris enim leo rhoncus sed",
          "image": "http://dummyimage.com/248x100.png/cc0000/ffffff",
          "content": "tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac",
          "author": "Margarethe Littrick",
          "created_at": "2024-01-08T00:00:00.00",
          "updated_at": "2024-01-08T00:00:00.00"
        },
        {
          "id": 5,
          "title": "libero convallis eget eleifend luctus ultricies",
          "description": "aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum",
          "slug": "massa donec dapibus duis at",
          "image": "http://dummyimage.com/249x100.png/dddddd/000000",
          "content": "penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis",
          "author": "Tammara Batcock",
          "created_at": "2024-01-07T00:00:00.00",
          "updated_at": "2024-01-07T00:00:00.00"
        },
        {
          "id": 6,
          "title": "sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi",
          "description": "felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl",
          "slug": "vestibulum ac est lacinia nisi venenatis tristique fusce congue",
          "image": "http://dummyimage.com/159x100.png/dddddd/000000",
          "content": "amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet",
          "author": "Morie Scamp",
          "created_at": "2024-01-09T00:00:00.00",
          "updated_at": "2024-01-09T00:00:00.00"
        },
        {
          "id": 7,
          "title": "aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula",
          "description": "ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue",
          "slug": "in magna bibendum imperdiet nullam orci pede venenatis",
          "image": "http://dummyimage.com/147x100.png/5fa2dd/ffffff",
          "content": "at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis",
          "author": "Tess Burnhams",
          "created_at": "2024-01-02T00:00:00.00",
          "updated_at": "2024-01-02T00:00:00.00"
        },
        {
          "id": 8,
          "title": "lacus morbi quis tortor id",
          "description": "duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus",
          "slug": "amet turpis elementum ligula vehicula",
          "image": "http://dummyimage.com/141x100.png/ff4444/ffffff",
          "content": "nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt",
          "author": "Desdemona Boag",
          "created_at": "2024-01-07T00:00:00.00",
          "updated_at": "2024-01-07T00:00:00.00"
        },
        {
          "id": 9,
          "title": "turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis",
          "description": "dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in",
          "slug": "eget tincidunt eget tempus vel pede morbi porttitor lorem id",
          "image": "http://dummyimage.com/186x100.png/dddddd/000000",
          "content": "nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes",
          "author": "Nickie Ludvigsen",
          "created_at": "2024-01-08T00:00:00.00",
          "updated_at": "2024-01-08T00:00:00.00"
        },
        {
          "id": 10,
          "title": "sit amet lobortis sapien sapien non mi integer ac",
          "description": "luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas",
          "slug": "mi integer ac neque duis bibendum morbi non",
          "image": "http://dummyimage.com/172x100.png/ff4444/ffffff",
          "content": "primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis",
          "author": "Wally Durber",
          "created_at": "2024-01-08T00:00:00.00",
          "updated_at": "2024-01-08T00:00:00.00"
        }
      ],
      comments: [
        {
          "id": 1,
          "postId": 1,
          "userId": 1,
          "parentId": null,
          "comment": "cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit",
          "createdAt": "2024-02-01T00:00:00"
        },
        {
          "id": 2,
          "postId": 2,
          "userId": 2,
          "parentId": null,
          "comment": "pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor",
          "createdAt": "2024-02-01T00:00:00"
        },
        {
          "id": 3,
          "postId": 3,
          "userId": 1,
          "parentId": 1,
          "comment": "accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend",
          "createdAt": "2024-02-01T00:00:00"
        },
        {
          "id": 4,
          "postId": 1,
          "userId": 1,
          "parentId": 1,
          "comment": "consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum",
          "createdAt": "2024-02-01T00:00:00"
        },
        {
          "id": 5,
          "postId": 1,
          "userId": 3,
          "parentId": 2,
          "comment": "non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci",
          "createdAt": "2024-02-01T00:00:00"
        },
        {
          "id": 6,
          "postId": 2,
          "userId": 3,
          "parentId": 1,
          "comment": "at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla",
          "createdAt": "2024-02-01T00:00:00"
        },
        {
          "id": 7,
          "postId": 2,
          "userId": 5,
          "parentId": 1,
          "comment": "placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula",
          "createdAt": "2024-02-01T00:00:00"
        },
        {
          "id": 8,
          "postId": 3,
          "userId": 8,
          "parentId": null,
          "comment": "lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta",
          "createdAt": "2024-02-01T00:00:00"
        },
        {
          "id": 9,
          "postId": 2,
          "userId": 5,
          "parentId": 3,
          "comment": "in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla",
          "createdAt": "2024-02-01T00:00:00"
        },
        {
          "id": 10,
          "postId": 4,
          "userId": 5,
          "parentId": null,
          "comment": "duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac",
          "createdAt": "2024-02-01T00:00:00"
        }
      ]
    }
  }
}
