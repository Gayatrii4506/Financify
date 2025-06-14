import { authMiddleWare } from "@clerk/nextjs";


export default authMiddleWare({
    publicRoutes:['/']
})

export const config = {
    matcher: [
           "/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"

    ],
};