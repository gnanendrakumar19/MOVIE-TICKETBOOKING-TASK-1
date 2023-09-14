const city = require ('../DATABASE/DB/city')

let addCity = async (body)=>{
    try{
        // const result = await city.insertCity({body});
        result = await city.insertCity(body);
        if (result){
            return{status:1,result:"location add ayyindhi"}
        }else{
        return{status:0, result:'Invalid Location'}
        }
    }catch(err){
        return {status:0, error:err.message}
    }
};

// (async () => {
//     const result = await addCity({ "CityID":"2","Name": "CHIRALA", "State": "AP", "Zipcode":"522102" });
//     console.log(result);
// })();

// (async () => {
//     const result = await addCity({ "CityID":"4","Name": "ponnur", "State": "AP", "Zipcode":"522104" });
//     console.log(result);
// })();



// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Get All:

const getCityList = async () => {
    try {
        result = await city.getCityList();
        return { status: 1, data: { CITY: result } };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};
// ------------------------------------------------------GET BY ID -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//GET By ID

let getCityById = async (body) => {
    try {
        result = await city.getCityById(body);
        return { status: 1, result: result };
        // return { status: 1, data: { CITY: result } };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async () => {
//     const CityID = 123; // Provide the desired CityID
//     const result = await getCityById(CityID);
//     console.log(result);
// })();

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------Get By Name----------------------------------------------------------------------------------------------------------------------------------
// Get By Name
let getCityByName = async (Name) => {
    try {
        result = await city.getCityByName(Name);
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

const updateCity = async (CityID, body) => {
    try {
        result = await city.updateCity(CityID, body);
        return { status: 1, result: result = "record Updated" };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async () => {
//     const CityID = "123"; // Provide the desired  CityID
//     const body = { "Name": "vasu", "Password": "Dont4get", "Email": "vasuvas@gmail.com", "Phone": 7812222111 };
//     const result = await updateCity(CityID, body);
//     console.log(result);
// })();



// -------------------------------------------------------DELETE USER ------------------------------------------------------------------------------------------------------------------------------
// Delete User By ID

let deleteCity = async (CityID) => {
    try {
        result = await city.deleteCity(CityID);
        return { status: 1, result: result = "record deleted" };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async ()=>{
//     const CityID = "B899004100174ECD9450106EFCFAECA7"; // Provide the desired CityID
//     const result = await deleteCity(CityID);
//     console.log(result);
// })();


// ----------------------------------------------------------Delete By Name -----------------------------------------------------------------------------------------------------------------------------------------------
// DELETE BY NAME:

const deleteCityByName = async (Name) => {
    try {
        result = await city.deleteCityByName(Name);
        return { status: 1, result: result = "deletedByName" };
    }
    catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async ()=>{
//     const Name = "NGK";
//     const result = await deleteUserByName(Name);
//     console.log(result);
// }) ();


module.exports = {
    addCity:addCity,
    getCityList: getCityList,
    getCityById: getCityById,
    getCityByName: getCityByName,
    updateCity: updateCity,
    deleteCity: deleteCity,
    deleteCityByName: deleteCityByName,
}

