import { urlRef } from "../src/firebase";

function format(url) {
    if (url.startsWith('https://') || url.startsWith('http://')) { return url; }

    return `http://${url}`;
}

module.exports = async (req, res) => {
    const { query: { id } } = req;
    const data = (await urlRef.doc(id).get()).data();
    const url = data?.targetUrl ? data.targetUrl : process.env.APP_HOST;

    res.redirect(format(url));
}
