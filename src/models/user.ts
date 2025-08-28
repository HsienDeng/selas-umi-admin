import {useCallback, useState} from "react";

export default function useUserModel() {

    const [user, setUser] = useState({
        name: "Silas"
    })

    // useCallBack: 缓存函数定义，避免在组件每次重新渲染时生成新的函数引用。
    const fetchUser = useCallback(() => {
        setUser({
            name: "Silas1",
        })
    }, [])

    return {
        user,
        fetchUser,
    }
}