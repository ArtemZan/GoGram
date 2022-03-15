const Profile = require("../../models/Profile")

async function SetProfilePicture(req, res)
{
    //console.log(req)

    const profile = await Profile.findOne({username: req.user.name})

    try{
        if(profile.image != null)
        {
            Delete(profile.image)
        }
    }
    catch(e)
    {
        res.status(500).json({error: e.message})
    }

    profile.image = req.file.path

    await profile.save()

    res.sendStatus(201)
}

module.exports = SetProfilePicture