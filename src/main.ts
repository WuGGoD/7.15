import './sass/style.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {
	Button,
	TreeSelect,
	Image,
	Grid,
	GridItem,
	Popup,
	ConfigProvider,
	FloatingPanel,
	Tab,
	Tabs,
	Card,
} from 'vant'
import 'vant/lib/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Button)
app.use(TreeSelect)
app.use(Image)
app.use(Grid)
app.use(GridItem)
app.use(Popup)
app.use(ConfigProvider)
app.use(FloatingPanel)
app.use(Tab)
app.use(Tabs)
app.use(Card)

app.mount('#app')
