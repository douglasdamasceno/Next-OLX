import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../components/utils/dbConnect";
import Users from "../../../src/models/users";
import { compare } from "../../../src/components/utils/passwordUtils";


const post = async(request: NextApiRequest, response: NextApiResponse)=>{
    const {email, password} = request.body;
    await dbConnect();
   
    const user = await Users.findOne({email});
    if(!user){
        response.status(401).json({sucess:false, message:"invalid"});
    }
    const passwordIsCorret = await compare(password, user.password);
    if(passwordIsCorret){
        return response.status(200).json({_id:user._id, name:user.name, email:user.email});
    }
    return response.status(401).json({sucess:false, message:"invalid"}); 
}

export {
    post,
}