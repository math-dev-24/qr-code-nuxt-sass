import {serverSupabaseUser} from '#supabase/server'
import {User} from "@supabase/auth-js";

export default defineEventHandler(async (event) => {
    const user: User = await serverSupabaseUser(event) as User

    return {
        user
    }
})