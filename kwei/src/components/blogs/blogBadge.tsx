import { BadgeTag } from "../badge";

const tagList = [
    {
        name: "HTML",
    },
    {
        name: "CSS",
    },
    {
        name: "JS",
    }
]

export function BlogBadge() {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-4 mb-4">
            {tagList.map((tag) => {
                return <BadgeTag name={tag.name} className="bg-violet-300" />
            })}
        </div>
    )
}