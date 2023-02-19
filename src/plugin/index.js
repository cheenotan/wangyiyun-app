import { Swipe, SwipeItem, Button, Loading, Popup, Slider } from 'vant'
// import 'vant/lib/index.css'
let plugins = [Swipe, SwipeItem, Button, Loading, Popup, Slider]

export default function getVant(app) {
    plugins.forEach((item) => {
        return app.use(item)
    })
}