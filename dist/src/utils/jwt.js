import jwt from "jsonwebtoken";
const createToken = (payload, secret, expiresIn) => {
    const token = jwt.sign(payload, secret, {
        expiresIn
    });
    return token;
};
// const verifyToken = (token:string,secret:string)=>{
//     try {
//         const verifiedToken = jwt.verify(token,secret)
//         return{
//             success:true,
//             data:verifiedToken
//         }
//     } catch (error:any) {
//         return{
//             success:false,
//             error:error.message
//         }
//     }
// }
const verifyToken = (token, secret) => {
    return jwt.verify(token, secret);
};
export const jwtUtilis = {
    createToken,
    verifyToken
};
//# sourceMappingURL=jwt.js.map