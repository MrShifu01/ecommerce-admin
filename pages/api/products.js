// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from '@/lib/mongodb';
import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/product';
import mongoose from 'mongoose'

export default async function handle(req, res) {
    const {method} = req;
    await mongooseConnect()
    if (method === "GET") {
        res.json(await Product.find())
    }

    if (method === "POST") {
        const {title, description, price} = req.body
        const productDoc = await Product.create({
            title, description, price
        })
        res.json(productDoc);
    }
}
