const Profile = require("../../models/Profile")

async function SetProfileDescription(req, res)
{
    const profile = await Profile.findOne({username: req.user.name})

    if(!profile)
    {
        res.status(400).json("There is no profile for this username")
        return;
    }

    profile.description = req.body.description

    profile.save()

    res.sendStatus(200)
}

module.exports = SetProfileDescription