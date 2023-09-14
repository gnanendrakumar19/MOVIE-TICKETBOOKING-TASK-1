const Admin = require("../MODEL/admin");

const insertAdmin = async (body) => {
    return await Admin.query().insert(body);
};
const getAdmin =async (body)=>{
    return await Admin.query().where("Name",body);
};

// (async()=>{
//     const result = await getAdmin("NGK")
//     console.log(result)
// })()


const getAllAdmins = async () => {
    return await Admin.query();
};
const getAdminById = async (body) => {
    return await Admin.query().where("AdminID",body);
};
const updateAdmin= async (id, body) => {
    return await Admin.query().patchAndFetchById(id, body);
};
const deleteAdmin = async (id) => {
    return await Admin.query().deleteById(id);
};


module.exports = {
    insertAdmin: insertAdmin,
    getAdmin: getAdmin,
    getAllAdmins: getAllAdmins,
    getAdminById: getAdminById,
    updateAdmin: updateAdmin,
    deleteAdmin: deleteAdmin
}