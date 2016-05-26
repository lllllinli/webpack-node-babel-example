import route from "koa-route";

const apiPath = {
  books: "/api/books"
};

function * books(next) {
  this.body = '{\"name\":\"javascript cookbook\"}';
};

export default function(app) {
    app.use(route.get(apiPath.books, books));
}
