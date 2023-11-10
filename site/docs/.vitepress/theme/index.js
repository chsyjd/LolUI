import DefaultTheme from "vitepress/theme";
import ui from 'lol-ui'
import 'lol-ui/es/style.css'
export default {
    ...DefaultTheme,
    enhanceApp: async ({ app }) => {
        // app is the Vue 3 app instance from `createApp()`. router is VitePress'
        // custom router. `siteData`` is a `ref`` of current site-level metadata.
        app.use(ui);

    },
};
