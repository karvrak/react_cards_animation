import { Black, Darkpurple,Gold, White, BrightRed, DarkRed, Gray} from "./color"

export const background  = {   
    position: "fixed",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    backgroundColor:Gold  ,
    
}
export const CardAnime = {   
    width: "375px",
    height: "523px",
    perspective: "1000px",

    
}
export const ContentAnime = {   
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: "16px",
    transition: "transorm 0.1s ",
    backgroundColor: Black,
}
export const GlowAnime = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    transition: "transorm 0.1s ",
    borderRadius: "16px",
    mixBlendMode: "hard-light",
    opacity: "0.5",

    background: "radial-gradient(circle at 50% 0%, rgb(184, 196, 211), transparent"
}
export const imageStyleOverview = {
   
    width: "100%",
    height: "100%",
    objectFit: "cover",

}