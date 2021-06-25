import { urlRef } from "../firebase";
import { nanoid } from "nanoid";

export async function findUrl(targetUrl) {
    return await urlRef.where('targetUrl', '==', targetUrl).get();
}

export async function generateId() {
    let id = nanoid(5);
    const query = await urlRef.where('id', '==', id).get();
    while (!query.empty) { id = nanoid(6) }
    return id;
}
