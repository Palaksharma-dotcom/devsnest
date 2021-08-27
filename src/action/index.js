// const inc=()=>{
//     return{
//         type:"inc",
//     };
// };
// const dec=()=>{
//     return{
//         type:"dec",
//     };
// };
// export{inc,dec};
const Username = (item) =>{
    return {
        type: "NameChange",
        payload: item,
    };
};

const   Usermail = (val) => {
    return {
        type : "MailChange",
        payload : val ,
    };
};

export {Username ,Usermail} ;