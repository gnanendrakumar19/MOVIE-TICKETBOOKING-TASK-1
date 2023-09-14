const admin = require ('../DATABASE/DB/admin')
// const Admin = require('../DATABASE/MODEL/admin')

let signUpAdmin = async (body)=>{
    try{
        result = await admin.insertAdmin(body);
        if (result){
            return {status:1,result:"signup completed"}
        }else{
            return{status:0, result:'user name & password are not matching'}
        }
    }catch (err) {
        return {status:0, error:err.message};
    }
};

// Signin

const signIn= async (body)=>{
    const name = body.Name;
    const password = body.Password;
    try{
        const result = await admin.getAdmin(name);

        console.log(result);
        if (result){
            if(result[0].Name == name && result[0].Password == password){
                return { status: 1, result: 'Sign in successful '}
            }else {
                return { status: 0, result: 'Wrong password'};
            }
        }else{
            return { status: 1, result: 'user does not exist' }
        }
    } catch (error) {
        return { status: 0, result: "admin doesnot exists" };
    }
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Get All:

const getAllAdmins = async () => {
    try {
        result = await admin.getAllAdmins();
        return { status: 1, data: { ADMIN: result } };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// ------------------------------------------------------GET BY ID -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//GET By ID

let getAdminById = async (AdminID) => {
    try {
        result = await admin.getAdminById(AdminID);
        return { status: 1, result: result };
        // return { status: 1, data: { ADMIN: result } };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async () => {
//     const AdminID = 1; // Provide the desired AdminID
//     const result = await getAdminById(AdminID);
//     console.log(result);
// })();


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Upadate By ID:

const updateAdmin = async (AdminID, body) => {
    try {
        result = await admin.updateAdmin(AdminID, body);
        return { status: 1, result: result = "record Updated" };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async () => {
//     const AdminID = "123"; // Provide the desired  AdminID
//     const body = { "Name": "vasu", "Password": "Dont4get", "Email": "vasuvas@gmail.com", "Phone": 7812222111 };
//     const result = await updateAdmin(AdminID, body);
//     console.log(result);
// })();


// -------------------------------------------------------DELETE USER ------------------------------------------------------------------------------------------------------------------------------
// Delete User By ID

let deleteAdmin = async (AdminID) => {
    try {
        result = await admin.deleteAdmin(AdminID);
        return { status: 1, result: result = "record deleted" };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async ()=>{
//     const AdminID = "B899004100174ECD9450106EFCFAECA7"; // Provide the desired AdminID
//     const result = await deleteAdmin(AdminID);
//     console.log(result);
// })();



module.exports = {
    signUpAdmin: signUpAdmin,
    signIn:signIn,
    getAllAdmins: getAllAdmins,
    getAdminById: getAdminById,
    updateAdmin: updateAdmin,
    deleteAdmin: deleteAdmin
}

