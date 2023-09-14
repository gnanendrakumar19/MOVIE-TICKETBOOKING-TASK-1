const { body } = require("express-validator");
const { user } = require("../Model/Tables");
const  User = require("../Model/user");

//Sign up

const insertUser = async (body) => {
    return await User.query().insert(body);
};
// (async()=>{
//     const result = await insertUser({"UserID":'569',"Name":'vasu',"Password":"fasdhjk"})
//     console.log(result)
// })()

// ---------------------------------------------------------------------------------------------------------------------------
//Sign in

const getUser =async(body)=>{
    return await User.query().where('name',body)
};
// (async()=>{
//     const result =await getUser('ram')
//     console.log(result)
// })()

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Get All:

const getAllUSERS = async () => {
    return await User.query();
};

// (async()=>{
//     const result =await getAllUSERS()
//     console.log(result)
// })()


// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Get By ID

const getById = async (body) => {
    return await User.query().where("UserID",body);
};
// (async () => {
//     const UserID = 234; // Provide the desired user ID
//     const result = await getById(UserID);
//     console.log(result);
// })();


// Name
const getByName = async (body) => {
    return await User.query().where("Name",body);
};
// (async () => {
//     const Name = "vasu"; // Provide the desired user Name
//     const result = await getByName(Name);
//     console.log(result);
// })();


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
// UPDATE

// const UpdateUser = async (UserID, body) => {
//     return await User.query().where(UserID, body);
// };

const UpdateUser = async (UserID, body) => {
    return await User.query().findById(UserID).patch(body);
};


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//DELETE

const deleteUser = async (UserID) => {
    return await User.query().where('UserID', UserID).delete();
};

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// DELETE BY NAME:

const deleteUserByName = async (Name)=>{
    return await User.query().where("Name", Name).delete();
};


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //ORM
const booking = async (body) => {
    return await User.query().withGraphFetched('Booking').where("UserID",body).first()
}

// (async()=>{
//     result = await booking("123")
//     console.log(result)
// })()


module.exports = {
    insertUser:insertUser,
    getUser:getUser,
    getAllUSERS: getAllUSERS,
    getById: getById,
    getByName: getByName,
    UpdateUser: UpdateUser,
    deleteUser: deleteUser,
    deleteUserByName: deleteUserByName,
    booking: booking
}