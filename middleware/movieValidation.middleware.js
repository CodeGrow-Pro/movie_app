const {movieReleaseStatus} = require('../helpers/movie.constant')
exports.movieValidate = (req,res,next)=>{
    const body = req.body;
    if(!body.name){
        return res.status(404).send({
            message:"Movie Name not found! Name is required!"
        })
    }
    if(!body.releaseDate){
        return res.status(404).send({
            message:"Movie Release date  not found! Release Date is required!"
        })
    }
    if(!body.director){
        return res.status(404).send({
            message:"Movie director  not found! directoris required!"
        })
    }
    if(!body.movieImage){
        return res.status(404).send({
            message:"Movie Image  not found! Movie Image required!"
        })
    }
    if(!body.price){
        return res.status(404).send({
            message:"Movie Price  not found! directoris Price!"
        })
    }
    if(!body.price){
        return res.status(404).send({
            message:"Movie Price  not found! director is Price!"
        })
    }
    if(!movieReleaseStatus[body.releaseStatus]){
        return res.status(404).send({
            message:"Movie Release Status  not found! Release Status Price!"
        })
    }
    next()
}