# Authentification endpoints


## POST /signup
Should be used with `Content-Type`: `multipart/form-data` header= See https://www.npmjs.com/package/multer for more
<br>
Payload:

 * email: `string`
 * username: `string`
 * password: `string` (should be encrypted on the frontend)
 * description: `string` (optional)
 * picture: `binary`

 Returns: 
 ```json
{
    "accessToken":"<yourJWT>"
}
 ```
 
 --- 

## POST /login

<br>
Payload: 

 * username: `string` (also accepts email, which was used to signup)
 * password: `string` (should be encrypted on the frontend)

 Returns: 
 ```json
{
    "accessToken":"<yourJWT>"
}
```
<br>

---

# Password recovery

### To recover password execute the following endpoints in the same order:

<br>

## POST /password/send_code
Sends email with a verification code
<br>
Payload:
 * email: `string`

<br>

---

## POST /password/verify_code
<br>
Payload:
 * email: `string`
 * code: `string`

<br>

---

## POST /password
Changes password
<br>
Payload:
 * email: `string`
 * newPassword: `string`

