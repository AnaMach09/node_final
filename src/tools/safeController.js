const safeControllerWrapper = (fn) => async (req,res, next) => {
    try{
        await fn(req, res);
    }catch(e){
        return next(e);
    }
};
module.exports = safeControllerWrapper;