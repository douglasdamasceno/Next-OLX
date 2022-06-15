import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../src/components/utils/dbConnect"; 
import { crypto } from "../../src/components/utils/passwordUtils";
import Users from "../../src/models/users";

const users = async(request: NextApiRequest, response: NextApiResponse) => {
    const {method} = request;
    switch (method) {
        case 'GET':
            await dbConnect();
            response.status(200).json({success:200});
            break;
        
        case 'POST':
            const {name, email, password} = request.body;
            await dbConnect();
            const passwordHash = await crypto(password);
            const user = new Users({name, email, password :passwordHash});
            user.save().then(() => {
                response.status(201).json({success:200});
            }).catch((err:Error) => {
                response.status(500).json({error:err});
            });
            break;
    }
}

export default users;