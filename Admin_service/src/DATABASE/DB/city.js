const City = require("../MODEL/city");

const insertCity = async (body) => {
    return await City.query().insert(body);
};
const getCityList = async () => {
    return await City.query();
};
const getCityById = async (id) => {
    return await City.query();
};
const getCityByName = async (id) => {
    return await City.query();
};

const updateCity = async (id, body) => {
    return await City.query().patchAndFetchById(id, body);
};
const deleteCity = async (id) => {
    return await City.query().deleteById(id);
};

const deleteCityByName = async (id) => {
    return await City.query().deleteCityByName(id);
};

module.exports = {
    insertCity: insertCity,
    getCityList: getCityList,
    getCityById: getCityById,
    getCityByName: getCityByName,
    updateCity: updateCity,
    deleteCity: deleteCity,
    deleteCityByName: deleteCityByName
}