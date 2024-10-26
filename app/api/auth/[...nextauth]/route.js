import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import connectToDatabase from '@/app/lib/db-connect'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import seller from '@/app/models/seller'
import customer from '@/app/models/customer'

const handler = NextAuth({
    providers: [

        // GoogleProvider({
        //     clientId: process.env.GOOGLE_ID,
        //     clientSecret: process.env.GOOGLE_SECRET
        // }),


        CredentialsProvider({
            // name: "Credentials",
            // credentials: {
            //   username: { label: "Username", type: "text", placeholder: "jsmith" },
            //   password: { label: "Password", type: "password" }
            // },

            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                try {
                    await connectToDatabase();
                    
                    if(credentials.userType==="seller")
                    {
                        const exists = await seller.findOne({ username: credentials.username })
                        if (exists) {
                            if (await bcrypt.compare(credentials.password, exists.password)) {  
                                return exists;
                            }
                            else {
                                throw new Error("Password Incorrect");
                            }
    
                        }
                        else {
                            throw new Error("User does not Exist! Please Signup!");
                        } 
                    }
                    else if(credentials.userType==="customer")
                    {
                        const exists = await customer.findOne({ username: credentials.username , storeId: credentials.storeid })
                        if (exists) {
                            if (await bcrypt.compare(credentials.password, exists.password)) {  
                                return exists;
                            }
                            else {
                                throw new Error("Password Incorrect");
                            }
    
                        }
                        else {
                            throw new Error("User does not Exist! Please Signup!");
                        } 
                    }
                    
                    

                }
                catch (error) {
                    if (error.message === "Password Incorrect" || error.message === "User does not Exist! Please Signup!") {
                        throw new Error(error.message);
                      } else {
                        throw new Error("An unexpected error occurred. Please try again.");
                      }
                  }


            }
        }
        )

    ],
    
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.name = user.fullName; 
                token.username = user.username;
                token.role = user.role;
                token.storeid = user.storeId;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.name = token.name;
            session.user.username = token.username;
            session.user.role = token.role;
            session.user.storeid = token.storeid;
            return session;
        },
        
    

}
})

export { handler as GET, handler as POST };