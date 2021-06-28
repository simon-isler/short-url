import { firebase, urlRef } from "../src/firebase";

const increment = firebase.firestore.FieldValue.increment(1);
let url = process.env.APP_HOST;

function format(url) {
    if (url.startsWith('https://') || url.startsWith('http://')) { return url; }

    return `http://${url}`;
}

module.exports = async (req, res) => {
    const { query: { id } } = req;
    const doc = urlRef.doc(id);
    const targetUrl = (await doc.get()).data()?.targetUrl;

    if (targetUrl) {
        await doc.update({ usages: increment });
        url = targetUrl;
    }

    res.redirect(format(url));
}
