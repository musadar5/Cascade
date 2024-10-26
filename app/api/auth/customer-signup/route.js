import connectToDatabase from "@/app/lib/db-connect";
import customer from "@/app/models/customer";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export async function POST(request) {

    try {
        await connectToDatabase();
        const data = await request.json();
        let exists = await customer.findOne({ email: data.email , storeId: data.storeid });
        if (exists) {
            return NextResponse.json({ message: "Email already in use! Try another Email" });
        }
        exists=null;
        exists = await customer.findOne({ username: data.username , storeId: data.storeid  });
        if (exists) {
            return NextResponse.json({ message: "User already exists! Login to your account" });
        }

        else {
            const salt = await bcrypt.genSalt(10);
            const hashedpass = await bcrypt.hash(data.password, salt);

            const newcustomer = new customer({
                email: data.email,
                password: hashedpass,
                username: data.username,
                fullName: data.name,
                role: "customer",
                storeId: data.storeid
            });
            await newcustomer.save();
            return NextResponse.json({ message: "Account created successfully!" });
        }

    }
    catch (error) {
        return NextResponse.json({ message: "Something went wrong!" });
    }
}