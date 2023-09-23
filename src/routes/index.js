import QuizComp from "../components/quizComp/QuizComp"
import History from "../components/history/History";
import Home from "../components/home/home";
import ChatBot from "../components/chatBot/ChatBot";



const routes = [
    {
        path: '/ChatBot',
        component: ChatBot,
        exact: true
    },
    {
        path: '/QuizComp',
        component: QuizComp,
        exact: true
    },
    {
        path: '/History',
        component: History,
        exact: true
    },
    {
        path: '/',
        component: Home,
        exact: true  // @todo: Removed this just to publish the app on Github Page, otherwise, please add it
    },
]

export default routes;