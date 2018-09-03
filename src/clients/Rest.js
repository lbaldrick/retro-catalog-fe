import 'whatwg-fetch';

const DOMAIN_BASE = 'http://localhost:3003/';

const REQUEST_OPTIONS =  {
    headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
};

const REQUEST_GET_OPTIONS =  Object.assign({}, REQUEST_OPTIONS, {
    method: 'get',
});

const REQUEST_POST_OPTIONS =  Object.assign({}, REQUEST_OPTIONS, {
    method: 'post',
});

const REQUEST_PUT_OPTIONS =  Object.assign({}, REQUEST_OPTIONS, {
    method: 'put',
});

const REQUEST_DELETE_OPTIONS =  Object.assign({}, REQUEST_OPTIONS, {
    method: 'delete',
});

class Rest {
    get(url) {
        return fetch(this.createUrl(url), REQUEST_GET_OPTIONS)
            .then((response) => {
                return response.text();
            })
            .then((text) => {
                return JSON.parse(text);
            })
            .catch((error) => {
                return {
                    error,
                }
            });
    }

    put(url, body) {
        return fetch(this.createUrl(url), Object.assign( { body }, REQUEST_PUT_OPTIONS));
    }

    post(url, body) {
        return fetch(this.createUrl(url), Object.assign( { body: JSON.stringify(body) }, REQUEST_POST_OPTIONS))
    }

    delete(url) {
        return fetch(this.createUrl(url), REQUEST_DELETE_OPTIONS);
    }

    createUrl(url) {
        return `${DOMAIN_BASE}${url}`;
    }
}

const restClient = new Rest();

export default restClient;
