import { debounce } from './utiles'
import backTop from "@/components/content/backTop/backTop";

export const itemListenerMixin = {
    mounted() {
        let refresh = debounce(this.$refs.scroll.refresh, 200);
        this.$bus.$on("imgLoad", () => {
            refresh();
        });
    }
}


export const back = {
    data() {
        return {
            isShowBackTop: false,
        }
    },
    methods: {
        backTop() {
            this.$refs.scroll.scrollTop(0, 0);
        },
    },
    components: {
        backTop
    }
}