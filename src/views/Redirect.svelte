<script>
    import { urlRef } from '../firebase';

    export let id = '';
    let urlExists = true;

    function redirectTo(url) {
        if (url.startsWith('https://') || url.startsWith('http://')) {
            window.location.href = url;
        } else {
            window.location.href = `http://${url}`;
        }
    }

    urlRef.doc(id).get().then((url) => {
        if (url.exists) {
            redirectTo(url.data().targetUrl);
        } else {
            urlExists = false;
        }
    });
</script>

<div class="h-screen w-full bg-indigo-50 fixed font-montserrat">
    <div class="md:mx-36 mt-24 px-6 md:px-12 h-3/4 bg-white rounded-lg shadow-lg">
        {#if urlExists}
            <h4 class="font-semibold pt-24">Redirecting... 🚀</h4>
        {:else}
            <div class="flex flex-col md:flex-row justify-center pt-36">
                <h4 class="font-semibold">There was a problem with your request. 😟</h4>
                <a href="/" class="w-24 h-8 bg-blue-dark text-white rounded mx-auto md:ml-5 mt-5 md:mt-0 pt-1 text-center">Go back</a>
            </div>
        {/if}
    </div>
</div>
