import NextAuth, {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import loginRequest from "@/requests/auth/loginRequest";

export const authOption: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                identifier: {label: "نام کاربری", type: "text"},
                password: {label: "گذرواژه", type: "password"}
            },
            async authorize(credentials, req) {

                const res = await loginRequest({identifier: credentials?.identifier, password: credentials?.password})

                console.log(res)

                if (res.status !== 200) return null

                if (res.status == 200 && res.data) return res.data.user as any

                return null
            }
        })
    ],
}

const handler = NextAuth(authOption)

export {handler as GET, handler as POST}