<script>
    import { Router, Route } from 'svelte-routing';
    import { FirebaseApp } from 'sveltefire';
    import { firebase } from './firebase';
    import Home from './views/Home.svelte';
    import Redirect from "./views/Redirect.svelte";

    export let url = '';
</script>

<FirebaseApp {firebase}>
    <Router {url}>
        <Route path="/" component="{Home}" />
        <Route path="/:id" let:params>
            <Redirect id={params.id} />
        </Route>
    </Router>
</FirebaseApp>

<style global>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;600;700&display=swap');
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    h3 {
        font-size: 1.75rem;
    }

    h4 {
        font-size: 1.5rem;
    }

    h5 {
        font-size: 1.25rem;
    }
</style>
