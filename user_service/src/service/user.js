const user = require('../database/db/user')

let signUpUser = async (body) => {
    try {
        result = await user.insertUser(body);
        if(result){
            return {status:1,result:"signup successfull"}
        }else{
        return { status: 0, result: 'fields required signup unsuccessfull' }
        }
    } catch (err) {
        return { status: 0, error: err.message };
    }
};
// (async()=>{
//     const result = await signUpUser({ "UserID": '570', "Name": 'vasu', "Password": "fasdhjk" });
//     console.log(result);
// })()




// -----------------------------------------------------Sign in---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Sign in

const signIn = async (body) => {
    const name = body.Name;
    const password = body.Password;

    try {
        const result = await user.getUser(name);

        if (result) {
            if (result[0].Name === name && result[0].Password === password) {
                return { status: 1, result: 'Sign in successful' };
            } else {
                return { status: 0, result: 'Wrong password' };
            }
        } else {
            return { status: 1, result: 'User does not exist' };
        }
    } catch (error) {
        return { status: 0, result: "user doesnot exists" };
    }
};



// ----------------------or below one -----------------------------------------------------------

// const signIn = async (body) => {
//     const name = body.Name;
//     const password = body.Password;

//     try {
//         const result = await user.getUser(name);

//         if (result && result.length > 0) {
//             if (result[0].Name === name && result[0].Password === password) {
//                 return { status: 1, result: 'Sign in successful' };
//             } else {
//                 return { status: 0, result: 'Wrong password' };
//             }
//         } else {
//             return { status: 0, result: 'User does not exist' };
//         }
//     } catch (error) {
//         return { status: 0, result: 'An error occurred while signing in' };
//     }
// };

// (async () => {
//     const result = await signIn({ "Name": "ram", "Password": "1234" });
//     console.log(result);
// })();


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Get All:

const getAll = async()=>{
    try{
        result = await user.getAllUSERS();
        return{status:1, data:{USER:result} };
    }catch(err){
        return{status:0,error:err.message};
    }
};
// ------------------------------------------------------GET BY ID -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//GET By ID

let getById = async(body)=>{
    try{
        result = await user.getById(body);
        return{ status:1, result:result};
        // return { status: 1, data: { USER: result } };
    }catch(err){
        return{status:0,error:err.message};
    }
};

// (async () => {
//     const UserID = 123; // Provide the desired user ID
//     const result = await getById(UserID);
//     console.log(result);
// })();

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------Get By Name----------------------------------------------------------------------------------------------------------------------------------
// Get By Name
let getByName = async (Name) => {
    try {
        result = await user.getByName(Name);
        return { status: 1, result: result };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async () => {
//     const name = "vasu"; // Provide the desired name
//     const result = await getByName(name);
//     console.log(result);
// })();

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Upadate By ID:

const UpdateUser = async (UserID,body) => {
    try {
        result = await user.UpdateUser(UserID, body);
        return { status: 1, result: result = "record Updated" };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async () => {
//     const UserID = "123"; // Provide the desired  UserID
//     const body = { "Name": "vasu", "Password": "Dont4get", "Email": "vasuvas@gmail.com", "Phone": 7812222111 };
//     const result = await UpdateUser(UserID, body);
//     console.log(result);
// })();



// -------------------------------------------------------DELETE USER ------------------------------------------------------------------------------------------------------------------------------
// Delete User By ID

let deleteUser = async (UserID) =>{
    try{
        result = await user.deleteUser(UserID);
        return { status:1, result:result = "record deleted"};
    }catch(err){
        return{status:0,error:err.message};
    }
};

// (async ()=>{
//     const UserID = "B899004100174ECD9450106EFCFAECA7"; // Provide the desired UserID
//     const result = await deleteUser(UserID);
//     console.log(result);
// })();


// ----------------------------------------------------------Delete By Name -----------------------------------------------------------------------------------------------------------------------------------------------
// DELETE BY NAME:

const deleteUserByName = async (Name)=>{
    try
    {
        result = await user.deleteUserByName(Name);
        return {status:1, result:result = "deletedByName"};
    }
    catch (err)
    {
        return {status:0, error:err.message};
    }
};

// (async ()=>{
//     const Name = "NGK";
//     const result = await deleteUserByName(Name);
//     console.log(result);
// }) ();

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//ORM
let getBooking = async (body) => {
    try {
        result = await user.booking(body)
        if (result) {
            return { status: 1, result: result }
        } else {
            return { status: 0, result: "no booking available" }
        }
    } catch (error) {
        return { status: 0, result: error }

    }
}

module.exports = {
    signUpUser:signUpUser,
    signIn:signIn,
    getAll: getAll,
    getById: getById,
    getByName: getByName,
    UpdateUser: UpdateUser,
    deleteUser: deleteUser,
    deleteUserByName: deleteUserByName,
    getBooking: getBooking,
}