import Image from "next/image";
import Link from "next/link";

const Resume=()=> {
    return (<Link href="https://drive.google.com/file/d/1u8rx6WdxD3okgYblTgZ5s37u0WGa2vkZ/view?usp=sharing"
                  target={'_blank'}>
        <div className="hover:cursor-pointer flex justify-center items-center">
            <Image
                src="/3.svg"
                alt="clickable image"
                width={30}
                height={40}
            />
        </div>

    </Link>)
}
export default Resume;
