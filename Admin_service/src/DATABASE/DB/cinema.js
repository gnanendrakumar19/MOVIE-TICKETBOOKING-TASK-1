const Cinema = require("../MODEL/cinema");

const insertCinema = async (body) => {
    return await Cinema.query().insert(body);
};
const getCinemaList = async () => {
    return await Cinema.query();
};
const getCinemaById = async (id) => {
    return await Cinema.query();
};
const updateCinema = async (id, body) => {
    return await Cinema.query().patchAndFetchById(id, body);
};
const deleteCinema = async (id) => {
    return await Cinema.query().deleteById(id);
};


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ORM
const cinema = async (body) => {
    return await Cinema.query().withGraphFetched('Theaters').where(body).first()
}

// (async () => {
//     const result = await cinema({"CinemaId":1});
//     console.log(result);
// })();
module.exports = {
    insertCinema:insertCinema,
    cinema :cinema,
    getCinemaList:getCinemaList,
    getCinemaById:getCinemaById,
    updateCinema:updateCinema,
    deleteCinema:deleteCinema
};