<script>
    import Navbar from "../components/Navbar.svelte";
    import Intro from "../components/Intro.svelte";
    import UrlShortener from "../components/UrlShortener.svelte";
    import Notifications from 'svelte-notifications';
</script>

<Notifications>
    <div class="h-screen w-full bg-indigo-50 fixed font-montserrat">
        <div class="md:mx-16 md:mt-16 lg:mx-24 2xl:mx-36 lg:mt-16 2xl:mt-24 px-6 md:px-8 lg:px-12 h-full md:h-3/4 bg-white rounded-lg shadow-lg">
            <Navbar />

            <div class="mt-8 md:mt-12">
                <Intro />
                <UrlShortener />
            </div>
        </div>
    </div>
</Notifications>
