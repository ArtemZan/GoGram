const Profile = require("../../models/Profile")

async function GetProfile(req, res)
{
    console.log(req.user)
    const profile = await Profile.findOne({username: req.user.name}, {_id: 0})

    if(profile)
    {
        res.status(200).send(profile)
        return;
    }

    res.status(404).send("Profile with given username not found")
}

module.exports = GetProfile