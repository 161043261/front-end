import axios from 'axios';
import { reactive, onMounted } from 'vue';

export default function () {
    // data
    let dogList = reactive<string[]>([])
    // methods
    async function addDog() {
        // axios.get("http://dog.ceo/api/breed/pembroke/images/random").then(
        //     (resp: any) => { console.log(resp.data); },
        //     (err: any) => { console.log(err); });
        try {
            let resp = await axios.get('https://dog.ceo/api/breed/pembroke/images/random');
            dogList.push(resp.data.message as string);
        } catch (err) {
            alert(err);
        }
    }

    onMounted(() => {
        addDog();
    })
    return { dogList, addDog };
}
