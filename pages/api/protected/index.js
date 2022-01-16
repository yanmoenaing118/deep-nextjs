import { getSession } from "next-auth/react"

export default async (req,res) => {
    
    const session = await getSession({req});

    if(session) {
        return res.status(200).json(session);
    }

    res.status(403).json({
        msg: "protected route. u must be authenticated to view this page"
    })


}