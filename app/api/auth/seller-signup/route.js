import connectToDatabase from "@/app/lib/db-connect";
import seller from "@/app/models/seller";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export async function POST(request) {

    try {
        await connectToDatabase();
        const data = await request.json();
        let exists = await seller.findOne({ email: data.email });
        if (exists) {
            return NextResponse.json({ message: "Email already in use! Try another Email" });
        }
        exists=null;
        exists = await seller.findOne({ username: data.username });
        if (exists) {
            return NextResponse.json({ message: "User already exists! Login to your account" });
        }

        else {
            const salt = await bcrypt.genSalt(10);
            const hashedpass = await bcrypt.hash(data.password, salt);

            const newseller = new seller({

                email: data.email,
                password: hashedpass,
                username: data.username,
                fullName: data.name,
                role: "seller"
            });
            await newseller.save();
            return NextResponse.json({ message: "Account created successfully!" });
        }

    }
    catch (error) {
        return NextResponse.json({ message: "Something went wrong!" });
    }
}