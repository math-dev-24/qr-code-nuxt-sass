
export default defineNuxtRouteMiddleware(async (to, from) => {
    const userSupabase = useSupabaseUser()
    const { user, isAuthenticated } = useAuth()
    if (userSupabase) {
        isAuthenticated.value = true
        user.value = userSupabase
        return
    }
    return useRouter().push('/login')
})