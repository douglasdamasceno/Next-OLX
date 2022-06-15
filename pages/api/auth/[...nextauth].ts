import axios from "axios"
import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
  providers: [
    Providers.Credentials({
        name: 'Credentials',
        async authorize(credentials:any) {
           const res = await axios.post("/api/auth/credentials", {
                method:'POST',
                body:JSON.stringify(credentials),
                headers: {'Content-Type': 'application/json'}
            })
            const user = res.data;
            if (user) {
                return user;
            }
            return null;
            
        }
    }) ,
  ],
  session: {
    jwt: true,
  },
  jwt:{
    secret: process.env.JWT_SECRET,
  },
  // A database is optional, but required to persist accounts in a database
  database: process.env.MONGODB_URI,
})