import Home from './components/Home.vue'
import About from './components/About.vue'
import Show from './components/Show.vue'
import Honor from './components/Honor.vue'
import Enterprise from './components/Enterprise.vue'
import Contact from './components/Contact.vue'

export default[{
	path:'/about',
	component: About
},{
	path:'/show',
	component: Show
},{
	path:'/honor',
	component: Honor
},{
	path:'/enterprise',
	component: Enterprise
},{
	path:'/contact',
	component: Contact
},{
	path:'/home',
	component: Home
},{
	path:'/',
	redirect: '/home'
}]