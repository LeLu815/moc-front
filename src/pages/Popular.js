import Box from "../components/P_box1"

const trashData = [
    {title: "이인", desc : "addsvsdvsdvsdvdsdvdvs", like: "2"},
    {title: "이인", desc : "addsvsdvsdvsdvdsdvdvs", like: "2"},
    {title: "이인", desc : "addsvsdvsdvsdvdsdvdvs", like: "2"},
    {title: "이인", desc : "addsvsdvsdvsdvdsdvdvs", like: "2"}
]


const Popular =()=>{
    return <div>
        {trashData.map((boxData)=><Box title={boxData.title} desc={boxData.desc} likes={boxData.like}/>)}
    </div>
}
export default Popular