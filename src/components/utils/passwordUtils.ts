import bcrypt from "bcrypt";

const crypto = async(password:string) =>{
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    return passwordHash;
}

const compare = (password:string, passwordHash:string) =>{
    const result = bcrypt.compareSync(password, passwordHash);
    return result;
}
export {
    crypto,
    compare,
}