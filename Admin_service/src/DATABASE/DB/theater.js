const Theater = require("../MODEL/theater");

const insertTheater = async (body) => {
    return await Theater.query().insert(body);
};
const getTheaterList = async () => {
    return await Theater.query();
};
const getTheaterById = async (id) => {
    return await Theater.query();
};
const updateTheater = async (id, body) => {
    return await Theater.query().patchAndFetchById(id, body);
};
const deleteTheater = async (id) => {
    return await Theater.query().deleteById(id);
};

module.exports = {
    insertTheater: insertTheater,
    getTheaterList: getTheaterList,
    getTheaterById: getTheaterById,
    updateTheater: updateTheater,
    deleteTheater: deleteTheater
}