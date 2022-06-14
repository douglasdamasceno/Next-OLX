import bcrypt from "bcrypt";

const crypto = async(password:string) =>{
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    return passwordHash;
}

export {
    crypto
}