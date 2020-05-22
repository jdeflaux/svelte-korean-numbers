import App from './App.svelte';

const app = new App({
    target: document.body,
    props: {
        max: 100
    }
});

export default app;
