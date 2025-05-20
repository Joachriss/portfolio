import bg00 from "/images/bg00.jpg";

interface projectCardProps{
    name: string;
    link: string;
    description: string
}

export const ProjectCard = ({name,link,description}:projectCardProps) => {
  return (
    <a href={link} className="rounded cursor-pointer">
        <div className="overflow-hidden h-30 w-full">
            <img src={bg00} alt="" />
        </div>
        <div className="p-3">
            <h2 className="text-lg">{name}</h2>
            <small>{description}</small>
        </div>
    </a>
  )
}
