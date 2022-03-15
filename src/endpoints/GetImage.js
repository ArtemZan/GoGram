const Read = require("../utils/Read");

async function GetImage(req, res)
{
    let image;
    try{
        image = await Read(req.body.filename)
    }
    catch(e)
    {
        res.status(400).send({error: e.message})
        return
    }

    res.status(200).send({image})
}

module.exports = GetImage