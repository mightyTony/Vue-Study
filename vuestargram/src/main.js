import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

let emitter = mitt();
let app = createApp(App)
app.config.globalProperties.emitter = emitter; // 글로벌 변수 보관함

import store from './store.js'
import './registerServiceWorker'

//.use(store) : 모든 컴포넌트 들이 store.js state(데이터)를 공유한다
app.use(store).mount('#app')
