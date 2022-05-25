import { ref, reactive } from 'vue'
import router from '@/router'
import { useStorage } from '@vueuse/core'
import { userAvatar } from '.'

export const loginToken = ref(localStorage.getItem('token')||'')
// export const loginToken = useStorage('username','')
export const username = useStorage('username','')

export const logout = () => {
    localStorage.removeItem('token')
    userAvatar.value = ""
    username.value = ""
    router.push('/login')
}

export const openlink = (link: string) => {
    window.open(link, "_blank");
  };

export const gotoLoginPage = () => {
    router.push('/login')
    // router.back()
}


