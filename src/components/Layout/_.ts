import { ReactNode } from "react"
import { BackCardProps } from "../BackCard/_"
import { FrontCardProps } from "../FrontCard/_"

export type LayoutProps = {
    headerProps: {
        back: BackCardProps,
        front: FrontCardProps
    },
    children: ReactNode
}