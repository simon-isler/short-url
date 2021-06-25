<script>
    import Navbar from "../components/Navbar.svelte";
    import Intro from "../components/Intro.svelte";
    import UrlShortener from "../components/UrlShortener.svelte";
    import Notifications from 'svelte-notifications';
</script>

<Notifications>
    <div class="h-screen w-full bg-indigo-50 fixed font-montserrat">
        <div class="mx-36 mt-24 px-12 h-3/4 bg-white rounded-lg shadow-lg">
            <Navbar />

            <div class="mt-12">
                <Intro />
                <UrlShortener />
            </div>
        </div>
    </div>
</Notifications>
