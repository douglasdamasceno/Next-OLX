import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../components/utils/dbConnect";
import Users from "../../src/models/users";
import { crypto } from "../../src/components/utils/passwordUtils";

const get = async(request: NextApiRequest, response: NextApiResponse)=>{
    await dbConnect();
    const users = await Users.find();
    response.status(200).json({success:200, users});
}

const post = async(request: NextApiRequest, response: NextApiResponse)=>{
    const {name, email, password} = request.body;
    await dbConnect();
    const passwordHash = await crypto(password);
    const user = new Users({name, email, password :passwordHash});
    user.save().then(() => {
        response.status(201).json({success:200});
    }).catch((err:Error) => {
        response.status(500).json({error:err});
    });   
}

export {
    get,
    post,
}