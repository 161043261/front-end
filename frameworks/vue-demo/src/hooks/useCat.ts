import axios from "axios";
import {onMounted, reactive} from "vue";

export default function () {
    // data
    let catList = reactive<string[]>([]);

    // methods
    async function addCat() {
        // axios.get("https://api.thecatapi.com/v1/images/search").then(
        //     (resp: any) => { console.log(resp.data); },
        //     (err: any) => { console.log(err); });
        try {
            let resp = await axios.get(
                "https://api.thecatapi.com/v1/images/search",
            );
            catList.push(resp.data[0].url as string);
        } catch (err) {
            alert(err);
        }
    }

    onMounted(() => {
        addCat();
    });
    return {catList, addCat};
}
