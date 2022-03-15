# Endpoints

## Authorization:
Some of the endpoints reqire JWT authorization
In order to authorize set header `authorization` to `'Bearer <JWT>'`, where `<JWT>` is user's token that they have received on login/signup

## GET /image
Returns image in format:
```json
{
    "image":{
        "type": "Buffer",
        "data": number[]
    }
}
```
where `data` is an array of bytes, representing the image

<br>
Payload:

 * filename: `string`

The documentation for other endpoints is in corresponding subfolders of this folder