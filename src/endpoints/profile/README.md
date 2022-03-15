# Profile endpoints

NOTE: Profiles are created on sign up. User can't create a profile in any other way

## GET /profile

Returns profile
<br>
Payload: `none`

<br>

 --- 

## GET /profile/performance

Returns profile daily performance
<br>
Payload: 
```json
{
    "date":"number" - time point, from which the performance is retreived
}
```

<br>

 --- 


## POST /profile/description
Changes profile description
<br>
Payload:
 * postId: `string`
 * description: `string`
 
 --- 
 
## POST /profile/picture
Changes profile picture
<br>
Payload:
 * picture: `binary`
 
 ---  

## GET /profile/picture
Returns profile picture in format:
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
Payload: `none`
 
 --- 
