import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../src/components/utils/dbConnect"; 
const users = async(request: NextApiRequest, response: NextApiResponse) => {
    const {method} = request;
    switch (method) {
        case 'GET':
            await dbConnect();
            response.status(200).json({success:200});
            break;
    }
}

export default users;