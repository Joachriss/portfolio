
interface projectCardProps {
  name: string;
  link: string;
  image: string;
  description: string
}

export const ProjectCard = ({ name, link, image, description }: projectCardProps) => {
  return (
    <div className=" w-full mx-auto group">
      <a href={link} className="rounded cursor-pointer">
        <div className="overflow-hidden w-full h-44">
          <img src={image} className="w-full group-hover:scale-105 duration-200 h-full object-cover" alt="" />
        </div>
        <div className="p-3">
          <h2 className="text-lg">{name}</h2>
          <small>{description}</small>
        </div>
      </a>
    </div>
  )
}
