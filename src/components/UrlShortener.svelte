<script>
    import LinkIcon from "./LinkIcon.svelte";
    import { firebase, urlRef } from "../firebase";
    import { generateId, findUrl } from "../utils/urls";
    import { getNotificationsContext } from 'svelte-notifications';

    let targetUrl, alias, output, shortenedUrl = '';
    let urlValidity = false;

    const { addNotification } = getNotificationsContext();

    function validateUrl() {
        const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        urlValidity = pattern.test(targetUrl);
    }

    async function shortenUrl() {
        const existingUrl = await findUrl(targetUrl);
        let urlId;

        if (!existingUrl.empty) {
            urlId = existingUrl.docs[0].id;
        } else {
            urlId = await generateId();
            await urlRef.doc(urlId).set({ targetUrl, usages: 0, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
        }
        shortenedUrl = `${__app.env.APP_HOST}/${urlId}`;
    }

    function copyToClipboard() {
        addNotification({
            id: 'copyUrlNotification',
            text: 'Copied! 💪🏼',
            position: 'top-center',
            type: 'success',
            removeAfter: 4500,
        });
        output.select();
        document.execCommand('copy');
    }
</script>

<div class="mt-8 md:mt-10 2xl:mt-8">
    <form on:submit|preventDefault={shortenUrl}>
        <div class="flex w-full flex-col md:flex-row">
            <div class="flex items-center bg-gray-100 rounded pl-3 md:pl-5 md:w-2/3">
                <LinkIcon cssClass="h-5 w-5" />
                <input type="text" class="h-16 md:h-14 w-full mr-3 ml-3 bg-gray-100 outline-none text-gray-600" bind:value={targetUrl} on:change={validateUrl} placeholder="Paste your URL here" />
            </div>
            <button type="submit" class="bg-blue-dark text-white font-semibold rounded h-14 w-28 md:w-36 mx-auto md:ml-10 lg:ml-14 mt-3 md:mt-0 disabled:opacity-60" disabled={!urlValidity}>
                Shorten
            </button>
        </div>
    </form>

    <div class="flex mt-7 flex-col md:flex-row">
        <input type="text" value={shortenedUrl} bind:this={output} placeholder="....." class="h-16 md:h-14 md:w-1/2 lg:w-2/5 pl-3 bg-gray-100 outline-none rounded" readonly>
        <button class="bg-blue-dark text-white font-semibold rounded h-14 w-28 mx-auto md:ml-14 mt-3 md:mt-0 disabled:opacity-60" on:click={copyToClipboard} disabled={!shortenedUrl}>Copy</button>
    </div>
</div>
