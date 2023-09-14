const Shows = require ("../MODEL/shows");

const insertShows = async (body) =>{
    return await Shows.query().insert(body);
};
const getShowsList = async () => {
    return await Shows.query();
};
const getShowById = async (id) => {
    return await Shows.query();
};
const updateShows = async (id, body) => {
    return await Shows.query().patchAndFetchById(id, body);
};
const deleteShows = async (id) => {
    return await Shows.query().deleteById(id);
};
module.exports = {
    insertShows:insertShows,
    getShowsList: getShowsList,
    getShowById: getShowById,
    updateShows: updateShows,
    deleteShows: deleteShows
}
