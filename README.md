# WP-Ajax

A simple JS library to Get, Post, Put and Delete to a Wordpress API

## Usage

```js
import { apiGet, apiPut, apiPost, apiDelete } from "wp-ajax";

async function getPosts() {
    try {
        const data = await apiGet("wp/v2/posts");
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function createPost() {
    try {
        const data = await apiPost("wp/v2/posts", {
            title: "Hello World",
            content: "This is my first post",
            status: "publish",
        });
    } catch (error) {
        console.error(error);
    }
}

async function updatePost($post_id) {
    try {
        const data = await apiPut(`wp/v2/posts/${$post_id}`, {
            title: "Hello World",
            content: "This is my first post",
            status: "publish",
        });
    } catch (error) {
        console.error(error);
    }
}

async function deletePost($post_id) {
    try {
        const data = await apiDelete(`wp/v2/posts/${$post_id}`);
    } catch (error) {
        console.error(error);
    }
}
```

## Error Handling

If the API returns an error, the library will throw an error with the following format:

```js
{
    status: 400,
    code: "rest_invalid_param",
    message: "The request is invalid"
}
```

## Calling from PHP

Make sure you include the "wp-api" library when you enqueue your script:

```php
wp_enqueue_script("my-script", "path/to/my/script.js", ["wp-api"]);
```

We're using Wordpress' API library, so all authentication, NONCE and permission checks are handled by Wordpress.

## License

MIT